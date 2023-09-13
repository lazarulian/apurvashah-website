import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

import academicProjects from "./academicProjects";
import passionProjects from "./passionProjects";

const projects: Project[] = [...academicProjects, ...passionProjects];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
