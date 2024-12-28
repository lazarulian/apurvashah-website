import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { getShelves } from "@/lib/literal";
import { ReadingCard } from "@/components/reusable/hover-card";
import LinkPrimitive from "@/components/reusable/link-primatives";

const Currently = async () => {
  noStore();
  const { reading } = await getShelves();

  // const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: "Pink + White",
    artist: "Frank Ocean",
    songUrl:
      "https://music.apple.com/us/album/pink-white/1146195596?i=1146195714",
  };

  return (
    <>
      <p className="first-letter:uppercase">
        Listening to{" "}
        <LinkPrimitive href={track.songUrl} external popover>
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
};

export default Currently;
