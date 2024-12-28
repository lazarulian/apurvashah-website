import React from "react";
import Section from "@/components/reusable/section";
import { Accordion, AccordionItem } from "@/components/reusable/collapsible";
import { experiences } from "@/lib/data/experiences";

const Experiences = () => {
  return (
    <Section heading="Experience">
      <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
        {experiences.map((role) => (
          <React.Fragment key={role.company}>
            <AccordionItem
              role={role.role}
              company={role.company}
              range={role.range}
              description={role.description}
              skills={role.skills}
              link={role.link}
            />
            <div className="h-px bg-gray-800 w-[calc(100%-16px)] mx-auto" />
          </React.Fragment>
        ))}
      </Accordion>
    </Section>
  );
};

export default Experiences;
