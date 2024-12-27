import Hero from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="justify-between md:flex animate-in fade-in duration-500 select">
      <div className="md:max-w-[450px] flex flex-col md:gap-y-0 gap-y-6 h-screen">
        <Hero />
      </div>
    </div>
  );
}
