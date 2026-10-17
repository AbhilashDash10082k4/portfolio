/**
 * Selected-work grid sourced from data/portfolio-projects.ts.
 * On the homepage, limit shows a small preview; /projects renders all records.
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

export const SolutionsSection = ({ limit }: { limit?: number }) => {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects;

  return (
    <Section id="projects" className="relative py-20 md:py-28">
      <div className="page-container">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-4">Selected work & experiments</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.06em] sm:text-4xl md:text-5xl">
              Building useful software, <span className="text-muted">one problem at a time.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.slug} className="project-card glass-panel group flex min-h-72 flex-col rounded-2xl p-6 sm:p-7">
              <div className="mb-7 flex items-start justify-between gap-3">
                <span className="font-mono text-xs tracking-wider text-muted/70">{String(index + 1).padStart(2, "0")}</span>
                <span className={"rounded-full border px-2.5 py-1 text-[11px] font-bold " + statusStyles[project.status]}>{project.status}</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
                <p className="text-sm leading-6 text-muted">{project.summary}</p>
              </div>
              <div className="mt-7">
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted">{project.role}</p>
                <ul aria-label={project.title + " technology and focus areas"} className="flex flex-wrap gap-2">
                  {project.stack.map((item) => <li key={item} className="rounded-md border border-border bg-surface-muted/70 px-2 py-1 text-xs text-muted">{item}</li>)}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
                {project.repositoryUrl ? (
                  <Link href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={"View " + project.title + " source code on GitHub (opens in a new tab)"} className="project-card-cta">
                    View source <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                ) : (
                  <span className="text-xs font-semibold text-muted">Building in public</span>
                )}
                <Link href={"/contact?project=" + encodeURIComponent(project.title)} className="project-card-cta">
                  Discuss a similar build <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {limit && (
          <div className="mt-9 flex justify-center">
            <Link href="/projects" className="secondary-button">View all projects <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </div>
        )}
      </div>
    </Section>
  );
};
