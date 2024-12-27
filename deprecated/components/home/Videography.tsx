import React from "react";
import SectionTitle from "../global/SectionTitle";
import Link from "next/link";

const Videography = () => {
  const mostRecentProject =
    "https://www.youtube.com/embed/tzhBVdltJZU?controls=1&showinfo=0&rel=0&modestbranding=1";
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Check out a featured moment." />
      </div>
      <div className="relative w-auto flex justify-center">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={mostRecentProject}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videography;
