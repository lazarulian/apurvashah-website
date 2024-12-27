import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const academicProjects: Project[] = [
  {
    id: 0,
    title: "Nametable",
    desc: "Created a fully functional C++ name-table with a novel implementation of a hash table.",
    img: "/static/projects/CS32Project4.jpeg",
    link: "https://github.com/lazarulian/cs32",
    github: "https://github.com/lazarulian/cs32",
    tags: ["C++", "Data Structures"],
  },
  {
    id: 1,
    title: "BattleShip",
    desc: "A C++ implementation of the game Battleship with multiple player engines and a CPU.",
    img: "/static/projects/BattleShip.jpeg",
    link: "https://github.com/lazarulian/cs32",
    github: "https://github.com/lazarulian/cs32",
    tags: ["C++", "OOD"],
  },
  {
    id: 4,
    title: "Randall",
    desc: "Tuned and refactored a C program ('randall') for generating large quantities of random numbers.",
    img: "/static/projects/Makefile.jpeg",
    link: "https://github.com/lazarulian/cs35L",
    github: "https://github.com/lazarulian/cs35L",
    tags: ["C", "GDB", "Valgrind", "Makefile"],
  },
  {
    id: 5,
    title: "MySpell",
    desc: "Developed a shell script to sort and manipulate text files using tr, sort, and comm commands.",
    img: "/static/projects/BashScripting.jpeg",
    link: "https://github.com/lazarulian/cs35L",
    github: "https://github.com/lazarulian/cs35L",
    tags: ["Bash", "Scripting"],
  },
  {
    id: 7,
    title: "Performance Lab",
    desc: "Optimized 2D Transpose and 3D Stencil kernels for improved performance and energy efficiency using cache and memory optimization techniques.",
    img: "/static/projects/PerfLab.jpeg",
    tags: ["C", "Optimizations"],
  },
  {
    id: 15,
    title: "Git Detective",
    desc: "Python package analyzing Git repos using DFS, & topological sorting.",
    img: "/static/projects/GitGraph.jpeg",
    github: "https://github.com/lazarulian/cs35L",
    link: "https://github.com/lazarulian/cs35L",
    tags: ["Python", "Algorithms"],
  },
];

export const allTags = [];

academicProjects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default academicProjects;
