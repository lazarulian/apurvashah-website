import React from "react";
import { cn } from "@/lib/utils";

const Video = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div
      className={cn(
        "border border-gray-12 overflow-hidden aspect-video",
        className
      )}
    >
      <iframe
        className="shadow-lg object-cover object-center h-80"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
