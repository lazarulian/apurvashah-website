export interface ProjectFrontmatter {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string; // ISO 8601 format: "2024-12-27"
  liveLink: string;
  codeLink?: string;
  featured: boolean;
  slug: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}

export type ProjectCategory = string;
