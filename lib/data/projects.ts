export interface ProjectType {
  name: string;
  description: string;
  liveLink: string;
  codeLink?: string;
}

export const projects: ProjectType[] = [
  {
    name: "Colors from Los Angeles",
    description:
      "is a the culmination of the time that I spent in Los Angeles. The documentation of the dreams, people, and moments that shaped who I am today. This is a work in progress, and the link below is just what inspired this project.",
    liveLink: "https://www.youtube.com/watch?v=8lxfrFrVZY0",
  },
  {
    name: "CheatCodes",
    description:
      "is my way of sharing my lived experiences with you. CheatCodes includes culture, thoughts, and meomentary glimpses into my life.",
    liveLink: "https://blog.apurvashah.org/",
    codeLink: "https://github.com/lazarulian/blog-remake",
  },
];
