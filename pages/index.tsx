import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Videography from "@/components/home/Videography";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "My name is Apurva Shah. I am a student at UCLA studying Cognitive Science specializing in Computer Science.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32"></div>
      <Videography />
      <Projects />
      <CTA />
    </Page>
  );
}
