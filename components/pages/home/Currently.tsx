import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { getShelves } from "@/lib/literal";
import { ReadingCard } from "@/components/reusable/hover-card";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { myMusic } from "@/lib/data/music";

// Helper function to calculate the day of the year
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0); // Start of the year
  const diff =
    now.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Helper function to select a track based on the day of the year
const getDailyTrack = () => {
  const dayOfYear = getDayOfYear();
  return myMusic[dayOfYear % myMusic.length];
};

const Currently = async () => {
  noStore();

  try {
    const { reading } = await getShelves();
    const track = getDailyTrack();

    return (
      <>
        <p className="first-letter:uppercase">
          Listening to{" "}
          <LinkPrimitive href={track.songUrl || "#"} external popover>
            {track.title}
          </LinkPrimitive>
          &nbsp;by {track.artist} and making my way through{" "}
          <ReadingCard {...reading}>
            <LinkPrimitive
              href={`https://literal.club/apurvashah/book/${reading.slug}`}
              external
              popover
            >
              {reading.title}
            </LinkPrimitive>
          </ReadingCard>{" "}
          by {reading.author}.
        </p>
      </>
    );
  } catch (error) {
    console.error("Unexpected error in Currently component:", error);

    // Fallback UI if everything fails
    const track = getDailyTrack();
    return (
      <p className="first-letter:uppercase">
        Listening to{" "}
        <LinkPrimitive href={track.songUrl || "#"} external popover>
          {track.title}
        </LinkPrimitive>
        &nbsp;by {track.artist} and exploring great books.
      </p>
    );
  }
};

export default Currently;
