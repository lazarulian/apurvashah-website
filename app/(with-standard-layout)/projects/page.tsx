import { Metadata } from "next";
import { getAllProjects, sortProjectsByDate } from "@/lib/mdx/projects";
import ProjectsGrid from "@/components/pages/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of my creative and technical projects spanning photography, videography, and development.",
  keywords: [
    "Projects",
    "Portfolio",
    "Apurva Shah",
    "Photography",
    "Videography",
  ],
  alternates: {
    canonical: "https://apurvashah.org/projects",
  },
};

export default function ProjectsPage() {
  const projects = sortProjectsByDate(getAllProjects());

  return (
    <div className="animate-in fade-in duration-500">
      <ProjectsGrid projects={projects} />
    </div>
  );
}
