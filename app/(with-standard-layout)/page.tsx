import Hero from "@/components/pages/home/Hero";
import Section from "@/components/reusable/section";
import { Suspense } from "react";
import Skeleton from "@/components/reusable/skeleton";
import Currently from "@/components/pages/home/Currently";

export default function Home() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500 select">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6 h-screen">
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
      </div>
    </div>
  );
}
