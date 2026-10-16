"use client";

/**
 * Portfolio projects section.
 *
 * Purpose:
 * - Render the canonical project records as responsive, accessible project cards.
 * - Show honest project status and only render links that are actually configured.
 *
 * Related files:
 * - data/portfolio-projects.ts owns the project content and verified URLs.
 * - app/page.tsx places this section on the homepage.
 * - components/Navbar.tsx links to this section through #projects.
 *
 * Keep claims and status labels factual. Do not add sample URLs or fabricated metrics.
 */

import { portfolioProjects } from "@/data/portfolio-projects";
import { Section } from "@/components/ui/section";

export const SolutionsSection = () => {
  return (
    <Section id="projects" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Selected work & explorations
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Products built around{" "}
            <span className="text-white/55">real problems.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Full-stack products, AI agents, and business automation. Projects
            are labeled honestly as they move from idea to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex min-h-72 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-cyan-400/30 hover:bg-white/[0.045] md:p-7"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/65">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/60">
                {project.summary}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs text-white/40">
                  <span className="text-white/60">Role:</span> {project.role}
                </p>
                <ul
                  aria-label={`${project.title} technology stack`}
                  className="flex flex-wrap gap-2"
                >
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              {(project.repositoryUrl ||
                project.demoUrl ||
                project.caseStudyUrl) && (
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm">
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      Repository <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="text-cyan-300 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      Case study <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
