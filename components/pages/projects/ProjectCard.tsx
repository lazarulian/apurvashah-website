"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectFrontmatter } from "@/lib/types/project";

interface ProjectCardProps {
  project: ProjectFrontmatter;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group cursor-pointer">
        {/* Thumbnail */}
        <div className="relative overflow-hidden border border-gray-800 rounded-md w-full aspect-[4/3] mb-3">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={30}
          />
        </div>

        {/* Content */}
        <div className="space-y-1">
          <h3 className="font-medium text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-white line-clamp-2">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
