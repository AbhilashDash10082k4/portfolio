/**
 * Homepage reading order: hero, selected projects, service storytelling,
 * tech stack, and contact. Dedicated routes remain independently navigable.
 */
import { Hero } from "@/components/Hero/Hero";
import { SolutionsSection } from "@/components/Solutions/SolutionsSection";
import { ServicesStory } from "@/components/ServicesStory";
import { Contact } from "@/components/Contact";
import { TechStackSection } from "@/components/TechStackSection";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Hero />
      <SolutionsSection limit={3} />
      <ServicesStory />
      <TechStackSection />
      <Contact />
    </div>
  );
}
