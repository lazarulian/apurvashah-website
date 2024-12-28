import Hero from "@/components/pages/home/Hero";
import Section from "@/components/reusable/section";
import { Suspense } from "react";
import Skeleton from "@/components/reusable/skeleton";
import Currently from "@/components/pages/home/Currently";
import Experiences from "@/components/pages/home/Experiences";
import Projects from "@/components/pages/home/Projects";
import Videography from "@/components/pages/home/Videography";
import Contact from "@/components/reusable/contact-link";
// import Photography from "@/components/pages/home/Photography";

export default function Home() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500 select">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6">
        <Hero />
        <Section heading="Currently">
          <Suspense
            fallback={
              <div className="flex flex-wrap items-center gap-x-1">
                Listening to <Skeleton className="inline-flex w-24 h-4" />
                by <Skeleton className="inline-flex w-12 h-4" /> and slowly
                reading <Skeleton className="inline-flex w-24 h-4" /> by{" "}
                <Skeleton className="inline-flex w-24 h-4" />.
              </div>
            }
          >
            <Currently />
          </Suspense>
        </Section>
        <Experiences />
        <Projects />
        <Videography />
        {/* <Photography /> */}
      </div>
      <aside className="md:max-w-[450px] md:text-right">
        <Contact />
      </aside>
    </div>
  );
}
