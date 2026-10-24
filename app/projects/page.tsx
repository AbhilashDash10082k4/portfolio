import type { Metadata } from "next";
import { SolutionsSection } from "@/components/Solutions/SolutionsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects | Abhilash Dash",
  description: "Selected software projects and experiments in full-stack engineering, AI agents, and business automation.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <SolutionsSection layout="grid" />
    </div>
  );
}
