import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectFrontmatter } from "@/lib/types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * Get all project slugs from the content directory
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    slug,
  };
}

/**
 * Get all projects with frontmatter and content
 */
export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects;
}

/**
 * Get only featured projects
 */
export function getFeaturedProjects(): Project[] {
  const projects = getAllProjects();
  return projects.filter((project) => project.frontmatter.featured === true);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  const projects = getAllProjects();
  return projects.filter(
    (project) => project.frontmatter.category === category
  );
}

/**
 * Sort projects by date (newest first)
 */
export function sortProjectsByDate(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get all unique categories from projects
 */
export function getAllCategories(): string[] {
  const projects = getAllProjects();
  const categories = projects.map((project) => project.frontmatter.category);
  return Array.from(new Set(categories));
}
