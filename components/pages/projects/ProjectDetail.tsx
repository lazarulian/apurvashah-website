import { Project } from "@/lib/types/project";
import Section from "@/components/reusable/section";
import { MDXRenderer } from "@/components/mdx/MDXRenderer";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { frontmatter, content } = project;

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <Section className="md:max-w-[700px]">
        <div className="space-y-4">
          {/* Thumbnail */}
          <div className="relative overflow-hidden border border-gray-800 rounded-md w-full aspect-[4/3]">
            <Image
              src={frontmatter.thumbnail}
              alt={frontmatter.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={30}
              priority
            />
          </div>

          {/* Meta */}
          <div className="space-y-2">
            <h1 className="text-2xl font-medium text-white">
              {frontmatter.title}
            </h1>
            {/* Date */}
            <p className="text-xs text-gray-500">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-white">{frontmatter.description}</p>
            {/* Links */}
            {frontmatter.liveLink && (
              <div className="flex items-center gap-x-4 pt-2">
                <a
                  className="flex gap-x-1.5 items-center text-gray-500 cursor-pointer text-sm hover:text-accent transition-colors duration-300"
                  href={frontmatter.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live{" "}
                  <span
                    className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                    aria-hidden={true}
                  >
                    <ArrowUpRight
                      size={12}
                      className="shrink-0 text-gray-600"
                    />
                  </span>
                </a>
                {frontmatter.codeLink && (
                  <a
                    className="flex gap-x-1.5 items-center text-gray-500 cursor-pointer text-sm hover:text-accent transition-colors duration-300"
                    href={frontmatter.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <span
                      className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                      aria-hidden={true}
                    >
                      <ArrowUpRight
                        size={12}
                        className="shrink-0 text-gray-600"
                      />
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Divider between metadata and content */}
      <hr className="border-gray-800 my-8 md:max-w-[700px]" />

      {/* MDX Content */}
      <Section className="md:max-w-[700px]">
        <MDXRenderer source={content} />
      </Section>

      {/* Back Link */}
      <Section className="md:max-w-[700px]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-x-1 text-sm text-gray-500 hover:text-accent transition-colors duration-300"
        >
          ← Back to Projects
        </Link>
      </Section>
    </div>
  );
}
