/**
 * Homepage composition and reading order.
 * Related files: Hero introduces the portfolio; SolutionsSection renders
 * canonical project data from data/projects.ts; About, LiveLabSection, and
 * Contact provide the remaining sections linked by components/Navbar.tsx.
 */
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { SolutionsSection } from "@/components/Solutions/SolutionsSection";
import { LiveLabSection } from "@/components/live-lab/LiveLabSection";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <SolutionsSection />
      <About />
      <LiveLabSection />
      <Contact />
    </div>
  );
}
