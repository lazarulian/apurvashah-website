interface ReadingData {
  slug: string;
  title: string;
  author: string;
  cover: string;
}

const FALLBACK_BOOK: ReadingData = {
  slug: "sally-rooney-intermezzo-lffpd",
  title: "Intermezzo",
  author: "Sally Rooney",
  cover:
    "https://m.media-amazon.com/images/I/91+ztOtj57L._AC_UF1000,1000_QL80_.jpg",
};

export const getShelves = async (): Promise<{ reading: ReadingData }> => {
  return { reading: FALLBACK_BOOK };
};
