/**
 * Hero copy, portrait, and primary navigation actions.
 * Related files: Hero.tsx owns the section background; app/page.tsx mounts
 * Hero; #projects and #contact are rendered by SolutionsSection and Contact.
 * This component is intentionally a Server Component: no client animation is
 * needed for the core message or links.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:gap-14 lg:gap-20">
      <div className="order-2 max-w-3xl text-center md:order-1 md:text-left">
        <p className="mb-5 text-sm font-medium tracking-wide text-white/55">
          Hi, I’m <span className="text-white">Abhilash Dash</span>
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          I build software that
          <span className="mt-1 block text-white/45">makes businesses</span>
          <span className="block text-lime-200">work smarter.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8 md:mx-0">
          Full-stack products, AI agents, and workflow automation built to
          reduce manual work and turn complicated ideas into useful systems.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime-200 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-200"
          >
            Discuss a project
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore selected work
            <ArrowDownRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40 md:justify-start">
          <span>Full-stack engineering</span>
          <span aria-hidden="true" className="hidden size-1 rounded-full bg-white/25 sm:block" />
          <span>AI agents</span>
          <span aria-hidden="true" className="hidden size-1 rounded-full bg-white/25 sm:block" />
          <span>Business automation</span>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-[300px] md:order-2 md:max-w-none">
        <div className="portfolio-portrait relative mx-auto aspect-[4/5] max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 sm:rounded-[2.5rem]">
          <Image
            src="/dp.webp"
            alt="Portrait of Abhilash Dash"
            width={640}
            height={800}
            priority
            sizes="(max-width: 767px) 280px, (max-width: 1279px) 36vw, 420px"
            className="h-full w-full rounded-[1.5rem] object-cover object-center sm:rounded-[2rem]"
          />
          <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16 sm:rounded-b-[2rem]">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">Independent builder</p>
            <p className="mt-1 text-lg font-medium text-white">From idea to working system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
