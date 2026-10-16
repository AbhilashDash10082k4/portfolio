/**
 * Selected-work section for the homepage.
 * Related files: data/projects.ts owns project content; app/page.tsx mounts
 * this section; components/Navbar.tsx targets its #projects anchor.
 * Keep this a Server Component: rendering the data does not require client JS.
 */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

const statusStyles = {
  "In progress": "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  Prototype: "border-sky-400/25 bg-sky-400/10 text-sky-300",
  Planned: "border-white/15 bg-white/5 text-white/55",
} as const;

export const SolutionsSection = () => {
  return (
    <Section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Selected work & experiments
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Building useful software,{" "}
              <span className="text-white/45">one problem at a time.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/55 md:text-base">
            A transparent snapshot of products and automation ideas I’m building. Each card shows its current status; links appear only when there’s a real destination to visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group flex min-h-72 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-7"
            >
              <div className="mb-7 flex items-start justify-between gap-3">
                <span className="font-mono text-xs tracking-wider text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-white/55">{project.summary}</p>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  {project.role}
                </p>
                <ul aria-label={`${project.title} technology and focus areas`} className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.repositoryUrl && (
                <div className="mt-6 border-t border-white/10 pt-4">
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  >
                    View source <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
