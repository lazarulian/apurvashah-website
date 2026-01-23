import Link from "next/link";
import Section from "@/components/reusable/section";

export default function NotFound() {
  return (
    <div className="animate-in fade-in duration-500">
      <Section heading="Project Not Found">
        <div className="space-y-4">
          <p className="text-gray-500">
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-x-1 text-sm text-gray-500 hover:text-accent transition-colors duration-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </Section>
    </div>
  );
}
