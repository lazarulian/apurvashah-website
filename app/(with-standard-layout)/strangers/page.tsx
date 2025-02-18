import React from "react";
import Section from "@/components/reusable/section";
import type { Metadata } from "next";
import ScrollArea from "@/components/reusable/scroll-area";
import StrangerCard from "@/components/reusable/strangersCard";
import { wereNotReallyStrangers } from "@/lib/data/strangers";

export const metadata: Metadata = {
  title: "Strangers",
  keywords: ["We're not really strangers"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://apurvashah.org/strangers",
  },
};

export default function Strangers() {
  return (
    <div className="justify-between animate-in fade-in duration-500 select md:max-w-[450px] h-screen space-y-2">
      <Section heading="We're Not Really Strangers">
        <ScrollArea className="relative mx-3 md:w-[calc(100%+100px)] before:absolute before:h-full before:w-px before:bg-gray-800 before:top-0 before:-left-2 after:absolute after:h-full after:w-px after:bg-gray-800 after:top-0 after:-right-2">
          <div className="flex w-full h-full gap-x-2">
            {wereNotReallyStrangers.normal.map((question, index) => (
              <StrangerCard question={question} key={index} />
            ))}
          </div>
        </ScrollArea>
      </Section>
      <Section heading="We're Not Really Strangers (Relationship Edition)">
        <ScrollArea className="relative mx-3 md:w-[calc(100%+100px)] before:absolute before:h-full before:w-px before:bg-gray-800 before:top-0 before:-left-2 after:absolute after:h-full after:w-px after:bg-gray-800 after:top-0 after:-right-2">
          <div className="flex w-full h-full gap-x-2">
            {wereNotReallyStrangers.relationship.map((question, index) => (
              <StrangerCard question={question} key={index} />
            ))}
          </div>
        </ScrollArea>
      </Section>
    </div>
  );
}
