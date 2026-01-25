interface Book {
  slug: string;
  title: string;
  authors: { name: string }[];
  cover: string;
}

interface ReadingData {
  slug: string;
  title: string;
  author: string;
  cover: string;
}

const LITERAL_ENDPOINT = "https://literal.club/graphql/";

const FALLBACK_BOOK: ReadingData = {
  slug: "sally-rooney-intermezzo-lffpd",
  title: "Intermezzo",
  author: "Sally Rooney",
  cover:
    "https://m.media-amazon.com/images/I/91+ztOtj57L._AC_UF1000,1000_QL80_.jpg",
};

const getAccessToken = async (): Promise<string | null> => {
  try {
    const response = await fetch(LITERAL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              mutation login($email: String!, $password: String!) {
                  login(email: $email, password: $password) {
                      token
                  }
              }
          `,
        variables: {
          email: process.env.LITERAL_USER_EMAIL,
          password: process.env.LITERAL_USER_PASSWORD,
        },
      }),
    });

    // Check response.ok BEFORE parsing JSON
    if (!response.ok) {
      console.warn(
        `Literal API authentication failed: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn("Literal API returned non-JSON response");
      return null;
    }

    const data = await response.json();

    // Validate response structure
    if (!data?.data?.login?.token) {
      console.warn("Literal API response missing token");
      return null;
    }

    return data.data.login.token;
  } catch (error) {
    console.error("Failed to get Literal access token:", error);
    return null;
  }
};

export const getShelves = async (): Promise<{ reading: ReadingData }> => {
  try {
    const access_token = await getAccessToken();

    // If authentication failed, return fallback immediately
    if (!access_token) {
      console.warn("Using fallback book data due to authentication failure");
      return { reading: FALLBACK_BOOK };
    }

    const response = await fetch(LITERAL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query myReadingStates {
              myReadingStates {
                ...ReadingStateParts # find fragments below
                book {
                  ...BookParts # find fragments below
                }
              }
            }

            fragment ReadingStateParts on ReadingState {
              id
              status
              bookId
              profileId
              createdAt
            }

            fragment BookParts on Book {
              id
              slug
              title
              subtitle
              description
              cover
              authors {
                id
                name
              }
            }
              `,
      }),
    });

    if (!response.ok) {
      console.warn(
        `Literal API query failed: ${response.status}. Using fallback.`,
      );
      return { reading: FALLBACK_BOOK };
    }

    const { data } = await response.json();

    // Validate data structure
    if (!data?.myReadingStates || !Array.isArray(data.myReadingStates)) {
      console.warn("Invalid Literal API response structure. Using fallback.");
      return { reading: FALLBACK_BOOK };
    }

    const currentlyReading = data.myReadingStates.filter(
      (shelf: { status: string; book: Book }) => shelf.status === "IS_READING",
    );

    // If no books currently reading, use fallback
    if (currentlyReading.length === 0) {
      console.info("No books currently reading. Using fallback.");
      return { reading: FALLBACK_BOOK };
    }

    const latestBook = currentlyReading
      .slice(-1)
      .map(({ book }: { book: Book }) => ({
        slug: book.slug,
        title: book.title,
        author: book.authors[0].name,
        cover: book.cover,
      }))[0];

    return {
      reading: latestBook,
    };
  } catch (error) {
    console.error("Failed to fetch reading data from Literal:", error);
    return { reading: FALLBACK_BOOK };
  }
};
