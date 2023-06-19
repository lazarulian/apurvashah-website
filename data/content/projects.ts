import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Nametable",
    desc: "Created a fully functional C++ name-table with a novel implementation of a hash table.",
    img: "/static/projects/CS32Project4.jpeg",
    link: "https://github.com/lazarulian/cs32",
    github: "https://github.com/lazarulian/cs32",
    tags: ["C++","Data Structures"],
  },
  {
    id: 1,
    title: "BattleShip",
    desc: "A C++ implementation of the game Battleship with multiple player engines and a CPU.",
    img: "/static/projects/BattleShip.jpeg",
    link: "https://github.com/lazarulian/cs32",
    github: "https://github.com/lazarulian/cs32",
    tags: ["C++","OOD"],
  },
  {
    id: 3,
    title: "HomekitAPI",
    desc: "A simple command line tool to control a garage door using a Raspberry Pi to be used with Homebridge.",
    img: "/static/projects/HomekitAPI.jpeg",
    github: "https://github.com/lazarulian/GarageDoorHomekitAPI",
    tags: ["Swift","Objective-C"],
  },
  {
    id: 4,
    title: "Randall",
    desc: "Tuned and refactored a C program ('randall') for generating large quantities of random numbers.",
    img: "/static/projects/Makefile.jpeg",
    link: "https://github.com/lazarulian/cs35L",
    github: "https://github.com/lazarulian/cs35L",
    tags: ["C","GDB", "Valgrind", "Makefile"],
  },
  {
    id: 5,
    title: "MySpell",
    desc: "Developed a shell script to sort and manipulate text files using tr, sort, and comm commands.",
    img: "/static/projects/BashScripting.jpeg",
    link: "https://github.com/lazarulian/cs35L",
    github: "https://github.com/lazarulian/cs35L",
    tags: ["Bash","Scripting"],
  },
  {
    id: 7,
    title: "Performance Lab",
    desc: "Optimized 2D Transpose and 3D Stencil kernels for improved performance and energy efficiency using cache and memory optimization techniques.",
    img: "/static/projects/PerfLab.jpeg",
    tags: ["C","Optimizations"],
  },
  {
    id: 8,
    title: "CheatCodes v2",
    desc: "The second iteration of my blog moving from a Headless CMS to MDX-backed blogs for improved performance.",
    img: "/static/projects/CheatcodesV2.jpeg",
    github: "https://github.com/lazarulian/blog-remake",
    link: "https://blog.apurvashah.org/",
    tags: ["NextJS","MDX", "TailwindCSS"],
  },
  {
    id: 9,
    title: "Personal Portfolio",
    desc: "Developed my personal portfolio showcasing my projects and information about me.",
    img: "/static/projects/Portfolio.jpeg",
    link: "https:/apurvashah.org",
    github: "https://github.com/lazarulian/apurvashah-website",
    tags: ["NextJS","TailwindCSS", "TypeScript"],
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
  // {
    //   id: 12,
    //   title: "Thread Lab",
    //   desc: "Developed optimized parallel algorithms using atomic builtins, and thread responsibility to compute histograms of large datasets.",
    //   img: "/static/projects/ThreadLab.jpeg",
    //   // link: "https://buildfaster.co/",
    //   tags: ["C","Threading"],
    // },
    {
      id: 13,
      title: "Bruin Den",
      desc: "A platform to find historical rent prices increasing housing accessibility within Westwood, Los Angeles.",
      img: "/static/projects/BruinDen.jpg",
      link: "https://bruinden.tech/",
      github: "https://github.com/lazarulian/bruin-den/",
      tags: ["NextJS", "Web Scraping", "Firebase", "LightGBM", "Machine Learning"],
    },
    {
      id: 14,
      title: "License Plate Detection",
      desc: "A flask application that will automatically detect and interpret license plate information.",
      img: "/static/projects/LicensePlate.jpg",
      tags: ["Python", "Pytorch", "Flask", "Deep Learning"],
    },
    {
      id: 11,
      title: "Bruin Subleasing",
      desc: "A platform to list and find subleasing at UCLA with CRUD operation and authentication using NoSQL.",
      img: "/static/projects/BruinSubleasing.jpeg",
      link: "https://github.com/lazarulian/bruin-subleasing",
      github: "https://github.com/lazarulian/bruin-subleasing",
      tags: ["NextJS", "TailwindCSS", "Firebase"],
    },
  {
    id: 16,
    title: "GPTinerary",
    desc: "Web app designed to generate travel itineraries using GPT-3 and convert them into universal ICS cal files.",
    img: "/static/projects/GPTinerary.jpeg",
    github: "https://github.com/lazarulian/GPTinerary/",
    link: "https://gptinerary.vercel.app/",
    tags: ["Node", "GPT-3", "NextJS", "TailwindCSS"],
  },
  {
    id: 17,
    title: "Genre Classifier",
    desc: "Implementation of genre classification engine extracting MFCCs to train Random Forest Classifiers.",
    img: "/static/projects/GenreClassifier.jpeg",
    tags: ["Python", "Flask", "Machine Learning"],
  },
  {
    id: 18,
    title: "EmotionalAnalytics",
    desc: "A service that classifies reviews by emotion, extracts customer complaints, and provides real-time alerts.",
    img: "/static/projects/EmotionalAnalytics.jpeg",
    github: "https://github.com/lazarulian/EmotionalAnalytics",
    link: "https://github.com/lazarulian/EmotionalAnalytics",
    tags: ["LangChain", "GPT-4", "ReactJS", "Flask"],
  },
  {
    id: 19,
    title: "ScaleCPET",
    desc: "A Cardiopulmonary Testing platform delivering visualizations, patient analysis, and insight.",
    img: "/static/projects/ScaleCPET.jpg",
    tags: ["Django", "PostgreSQL", "NextJS", "TailwindCSS"],
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