import React from "react";
import Section from "@/components/reusable/section";
import type { Metadata } from "next";
import { LinkWithArrow } from "@/components/reusable/link-with-arrow";
import {
  albumRecommendations,
  bookRecommendations,
} from "@/lib/data/recommendations";

export const metadata: Metadata = {
  title: "About",
  keywords: [
    "About",
    "Apurva Shah",
    "Apurva",
    "San Francisco",
    "UCLA",
    "Fremont",
  ],
  alternates: {
    canonical: "https://apurvashah.org/about",
  },
};

export default function About() {
  return (
    <div className="justify-between animate-in fade-in duration-500 select md:max-w-[450px] h-screen space-y-2">
      <Section heading="About Me">
        <p>
          Hi everyone, I&apos;m Apurva. I&apos;m currently living in San
          Francisco, CA and recently graduated from UCLA. In my free time, I
          enjoy backpacking, trying new foods, watching football, and reading
          new books.
        </p>
        <br />
        <p>
          Some things that I am really passionate about are vegetarianism,
          improving my community, and social reform. If you are interested in
          talking with me about any of that or just want to grab a coffee,
          please reach out to me. I would love to get to know you.
        </p>
        <br />
        <p>
          Now that I have your attention, here are some things that I want to
          put you on.
        </p>
      </Section>
      <Section heading="Reading Recommendations">
        <span>
          <ul>
            {bookRecommendations.map((book, index) => (
              <li
                key={index}
                className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2"
              >
                <LinkWithArrow text={book.text} href={book.href} />
              </li>
            ))}
          </ul>
        </span>
      </Section>
      <Section heading="Music Recommendations">
        <span>
          <ul>
            {albumRecommendations.map((book, index) => (
              <li
                key={index}
                className="relative flex items-center before:w-1 before:h-1 before:bg-accent before:rounded-full before:leading-none gap-x-2"
              >
                <LinkWithArrow text={book.text} href={book.href} />
              </li>
            ))}
          </ul>
        </span>
      </Section>
    </div>
  );
}
