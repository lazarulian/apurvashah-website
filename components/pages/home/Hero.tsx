import React from "react";
import Section from "@/components/reusable/section";
import LinkPrimitive from "@/components/reusable/link-primatives";
import {
  ArrowRight,
  Copy,
  ScribbleLoop,
} from "@phosphor-icons/react/dist/ssr/index";
import { ContactItem } from "@/components/reusable/contact-link";
import { ContactCopyItem } from "@/components/reusable/contact-link";

const Hero = () => {
  return (
    <Section>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-accent" />
        Apurva Shah
      </h1>
      <p className="mt-1 text-gray-9">
        Software Engineer, Videographer, and a Chipotle enthusiast.
      </p>
      <div className="flex flex-col mt-4 gap-y-2">
        <p>
          Crafting memorable interfaces with a deep attention to detail. I
          dedicate most my time to continuous learning and refining my skillset.
        </p>
        <p>
          I&apos;m a creative{" "}
          <LinkPrimitive
            href="https://www.youtube.com/watch?v=jG7dSXcfVqE"
            external
          >
            doing what I can&apos;t
          </LinkPrimitive>
          .
        </p>
        <div className="flex gap-x-6 mt-2 items-center">
          <LinkPrimitive href="/about" variant="route">
            Learn a bit more
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>

          <LinkPrimitive href="/blog" variant="route">
            Check out my blog
            <ScribbleLoop size={12} aria-hidden={true} />
          </LinkPrimitive>
          <ContactItem icon={<Copy />} className="text-sm">
            <ContactCopyItem title="Email me" copy="shahh.apurva@gmail.com" />
          </ContactItem>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
