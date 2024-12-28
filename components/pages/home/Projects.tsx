import React from "react";
import Section from "@/components/reusable/section";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projects, ProjectType } from "@/lib/data/projects";

const Projects = () => {
  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;

const Project = (Project: ProjectType) => {
  return (
    <li>
      <p>
        <LinkPrimitive href={Project.liveLink} external>
          {Project.name}
        </LinkPrimitive>{" "}
        {Project.description}
      </p>
      <div className="flex items-center mt-2 gap-x-4">
        <a
          className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
          href={Project.liveLink}
          target="_blank"
          rel="noreferrer"
        >
          Live{" "}
          <span
            className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
            aria-hidden={true}
          >
            <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
          </span>
        </a>
        {Project.codeLink && (
          <a
            className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            href={Project.codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code{" "}
            <span
              className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
              aria-hidden={true}
            >
              <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
            </span>
          </a>
        )}
      </div>
    </li>
  );
};
