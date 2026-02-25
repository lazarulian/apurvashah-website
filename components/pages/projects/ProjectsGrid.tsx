"use client";

import { useState, useMemo } from "react";
import { Project } from "@/lib/types/project";
import ProjectCard from "./ProjectCard";
import Section from "@/components/reusable/section";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  // Get unique categories from the projects data
  const categories = useMemo(
    () => ["all", ...new Set(projects.map((p) => p.frontmatter.category))],
    [projects]
  );

  // Filter and sort logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.frontmatter.category === selectedCategory
      );
    }

    // Sort
    return filtered.sort((a, b) => {
      if (sortBy === "date") {
        return (
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
        );
      }
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });
  }, [projects, selectedCategory, sortBy]);

  return (
    <Section heading="Projects">
      {/* Filter Controls */}
      <div className="mb-6 space-y-4">
        {/* Category Filter - Pills/Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm border rounded-sm transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-gray-600 border-accent"
                  : "border-gray-800 text-gray-500 hover:border-accent"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Sort Control */}
        <div className="flex items-center gap-x-3 text-sm">
          <span className="text-gray-600">Sort by:</span>
          <button
            onClick={() => setSortBy("date")}
            className={`transition-colors duration-300 ${
              sortBy === "date" ? "text-accent" : "text-gray-500 hover:text-accent"
            }`}
          >
            Date
          </button>
          <span className="text-gray-800">|</span>
          <button
            onClick={() => setSortBy("title")}
            className={`transition-colors duration-300 ${
              sortBy === "title" ? "text-accent" : "text-gray-500 hover:text-accent"
            }`}
          >
            Title
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project.frontmatter} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No projects found matching your filters.
        </div>
      )}
    </Section>
  );
}
