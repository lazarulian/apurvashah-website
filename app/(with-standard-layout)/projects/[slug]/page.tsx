import { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx/projects";
import ProjectDetail from "@/components/pages/projects/ProjectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = getProjectBySlug(slug);

    return {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      keywords: [project.frontmatter.category, "Apurva Shah"],
      alternates: {
        canonical: `https://apurvashah.org/projects/${slug}`,
      },
      openGraph: {
        title: project.frontmatter.title,
        description: project.frontmatter.description,
        images: [project.frontmatter.thumbnail],
        type: "article",
        publishedTime: project.frontmatter.date,
      },
    };
  } catch {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const project = getProjectBySlug(slug);
    return <ProjectDetail project={project} />;
  } catch {
    notFound();
  }
}
