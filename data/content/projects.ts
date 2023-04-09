import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "ScaleCPET",
    desc: "A Cardiopulmonary Testing platform delivering visualizations, patient analysis, and insight.",
    img: "/static/projects/ScaleCPET.jpg",
    link: "https://scalecpet.apurvashah.org",
    tags: ["Django", "PostgreSQL", "NextJS", "TailwindCSS"],
  },
  {
    id: 1,
    title: "License Plate Detection",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/LicensePlate.jpg",
    // link: "https://buildfaster.co/",
    tags: ["Python", "Pytorch", "Flask"],
  },
  {
    id: 2,
    title: "CheatCodes",
    desc: "v1 of my personal blog created to share my experiences and ideas.",
    img: "/static/projects/CheatCodesv1.jpg",
    link: "https://blog.apurvashah.org",
    // github: "https://github.com/braydentw/react-emoji-search",
    tags: ["NextJS", "TailwindCSS", "GraphQL"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects