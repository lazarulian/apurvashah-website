import React from "react";
import passionProjects from "@/data/content/passionProjects";
import academicProjects from "@/data/content/academicProjects";
import { Project } from "types";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
  projectType?: string;
};

let projectMap = {
  
  "passionProjects": passionProjects,
  "academicProjects": academicProjects,
}

function Projects({ projectType, overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projectMap[projectType]
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.slice(0).reverse().map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
