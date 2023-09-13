import React from "react";
import projects from "@/data/content/projects";
import academicProjects from "@/data/content/academicProjects";
import { Project } from "types";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  projectType: string;
};

let projectMap = {
  "passionProjects": projects,
  "academicProjects": academicProjects,

}

function Projects({ projectType }: ProjectProps) {
  const projectsList = projectMap[projectType]
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.slice(0).reverse().map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
