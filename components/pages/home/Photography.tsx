import React from "react";
import Section from "@/components/reusable/section";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Gallery from "@/components/reusable/gallery";
import { photos } from "@/lib/data/photos";

const Photography = () => {
  return (
    <>
      <Section heading="Photography" className="shrink-0">
        <div className="flex flex-col gap-y-1.5">
          <p>
            I got into photography in highschool and have continued ever since.
            Although I have mostly dedicated most of my effort to Videography
            for the time being, photography is a vital part of documenting my
            life and painting the canvases that are my journals.
          </p>
          <LinkPrimitive
            external
            href="https://photography.apurvashah.org"
            variant="route"
            className="my-2"
          >
            Visit my portfolio
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>
        </div>
      </Section>
      <Gallery photos={photos} />
      <div className="p-0 md:p-4" />
    </>
  );
};

export default Photography;
