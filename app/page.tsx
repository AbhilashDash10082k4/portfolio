import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SolutionsSection } from "@/components/solutions/SolutionsSection";
import { LiveLabSection } from "@/components/live-lab/LiveLabSection";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <About />
      <SolutionsSection />
      <LiveLabSection />
      <Experience />
      <Contact />
    </div>
  );
}

