import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Welcome to my portfolio. I am a student at UCLA studying Cognitive Science specializing in Machine Learning & Computer Science." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
      </div>
      <CTA />
    </Page>
  );
}
