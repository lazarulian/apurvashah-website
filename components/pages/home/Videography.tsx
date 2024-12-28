import React from "react";
import Section from "@/components/reusable/section";
import VideoGallery from "@/components/reusable/video-gallery";
import { videos } from "@/lib/data/videos";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Videography = () => {
  return (
    <>
      <Section heading="Videography">
        <div className="flex flex-col gap-y-1.5">
          <p>
            I have always been was fascinated by the way that the smallest
            moments in life had the ability to move me. Ever since I first felt
            that pull, I&apos;ve been captivated—obsessed, really—with finding a
            way to catch these fleeting moments and share them through my eyes.
          </p>
          <LinkPrimitive
            external
            href="https://www.youtube.com/@apurvashahh"
            variant="route"
            className="my-2"
          >
            Visit my portfolio on YouTube
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
        </div>
      </Section>
      <VideoGallery videos={videos} />
    </>
  );
};

export default Videography;
