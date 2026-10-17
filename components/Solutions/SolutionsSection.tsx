/**
 * Editorial project showcase sourced from data/portfolio-projects.ts.
 * The first item is featured; subsequent items use varied card proportions.
 * Homepage limit keeps the preview curated while /projects shows all records.
 */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { portfolioProjects } from "@/data/portfolio-projects";

const statusStyles = {
  "In progress": "border-emerald-700/20 bg-emerald-100 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-400/10 dark:text-emerald-200",
  Prototype: "border-sky-700/20 bg-sky-100 text-sky-800 dark:border-sky-300/20 dark:bg-sky-400/10 dark:text-sky-200",
  Planned: "border-border bg-surface-muted text-muted",
} as const;

const projectVisuals = [
  { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=82", label: "PRODUCT SYSTEMS", tone: "project-visual-sage" },
  { image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80", label: "EXPERIMENT / 02", tone: "project-visual-lime" },
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", label: "AUTOMATION LAB", tone: "project-visual-ink" },
  { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", label: "AI WORKFLOWS", tone: "project-visual-cream" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", label: "VOICE SYSTEMS", tone: "project-visual-sage" },
  { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", label: "DIGITAL PRODUCTS", tone: "project-visual-ink" },
];

export const SolutionsSection = ({ limit }: { limit?: number }) => {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects;

  return (
    <Section id="projects" className="projects-section relative py-24 md:py-36">
      <div className="page-container">
        <div className="projects-heading mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-5">A selection of work & experiments</p>
            <h2 className="projects-display-title">
              Built with purpose.
              <span> Still becoming.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted md:pb-2">
            A growing collection of products, prototypes, and ideas worth exploring.
          </p>
        </div>

        <div className="projects-editorial-grid">
          {projects.map((project, index) => {
            const visual = projectVisuals[index % projectVisuals.length];
            const statusLabel = project.status === "Planned" ? "UPCOMING" : project.status.toUpperCase();
            return (
              <article key={project.slug} className={"project-card editorial-project-card " + (index === 0 ? "project-card-featured" : "project-card-standard")}>
                <div
                  className={"project-visual " + visual.tone}
                  role="img"
                  aria-label={"Placeholder project image for " + project.title}
                  style={{ backgroundImage: "linear-gradient(180deg, rgba(9,16,12,.04) 35%, rgba(9,16,12,.68) 100%), url('" + visual.image + "')" }}
                >
                  <span className="project-visual-label">{visual.label}</span>
                  <span className={"project-status " + statusStyles[project.status]}>{statusLabel}</span>
                  <span className="project-visual-title" aria-hidden="true">{project.title}</span>
                </div>
                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{String(index + 1).padStart(2, "0")} / {project.role}</span>
                    <span>{project.stack.slice(0, 2).join(" · ")}</span>
                  </div>
                  <div className="project-card-bottom">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <Link href={project.repositoryUrl ?? "/contact?project=" + encodeURIComponent(project.title)} target={project.repositoryUrl ? "_blank" : undefined} rel={project.repositoryUrl ? "noreferrer" : undefined} aria-label={(project.repositoryUrl ? "View source for " : "Discuss ") + project.title} className="project-round-link">
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </Link>
                  </div>
                  <div className="project-stack" aria-label={project.title + " technology and focus areas"}>
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {limit && (
          <div className="mt-12 flex justify-center md:mt-16">
            <Link href="/projects" className="secondary-button">Explore all projects <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </div>
        )}
      </div>
    </Section>
  );
};
