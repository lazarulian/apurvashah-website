import React from "react";
import Section from "@/components/reusable/section";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getFeaturedProjects, sortProjectsByDate } from "@/lib/mdx/projects";
import Link from "next/link";

const Projects = () => {
  const featuredProjects = sortProjectsByDate(getFeaturedProjects()).slice(
    0,
    2
  );

  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
        {featuredProjects.map((project) => (
          <Project
            key={project.slug}
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            liveLink={project.frontmatter.liveLink}
            codeLink={project.frontmatter.codeLink}
            slug={project.slug}
          />
        ))}
      </ul>

      {/* View All Link */}
      <LinkPrimitive
        href="/projects"
        variant="route"
        className="mt-4 inline-flex items-center gap-x-1.5"
      >
        View all projects
        <ArrowRight size={12} aria-hidden={true} />
      </LinkPrimitive>
    </Section>
  );
};

export default Projects;

const Project = ({
  title,
  description,
  liveLink,
  codeLink,
  slug,
}: {
  title: string;
  description: string;
  liveLink?: string;
  codeLink?: string;
  slug: string;
}) => {
  return (
    <li>
      <p>
        <Link
          href={`/projects/${slug}`}
          className="hover:bg-accent fade-in duration-500 hover:text-gray-600 after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative inline-flex"
        >
          {title}
        </Link>{" "}
        {description}
      </p>
      <div className="flex items-center mt-2 gap-x-4">
        {liveLink && (
          <a
            className="flex gap-x-1.5 items-center text-gray-500 cursor-pointer text-sm"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live{" "}
            <span
              className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
              aria-hidden={true}
            >
              <ArrowUpRight size={12} className="shrink-0 text-gray-600" />
            </span>
          </a>
        )}
        {codeLink && (
          <a
            className="flex gap-x-1.5 items-center text-gray-500 cursor-pointer text-sm"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code{" "}
            <span
              className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
              aria-hidden={true}
            >
              <ArrowUpRight size={12} className="shrink-0 text-gray-600" />
            </span>
          </a>
        )}
      </div>
    </li>
  );
};
