import type { Metadata } from "next";
import { SolutionsSection } from "@/components/Solutions/SolutionsSection";

export const metadata: Metadata = {
  title: "Projects | Abhilash Dash",
  description: "Selected software projects and experiments in full-stack engineering, AI agents, and business automation.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 md:pt-32">
      <SolutionsSection />
    </div>
  );
}
