/**
 * Server-rendered cinematic hero. Portrait is a centered glass layer behind
 * the copy; depth is CSS-driven to avoid adding another client runtime.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <div className="hero-stage">
      <div className="hero-portrait-layer" aria-hidden="true">
        <Image src="/dp.webp" alt="" width={960} height={1200} priority sizes="(max-width: 767px) 100vw, 900px" />
      </div>
      <div className="hero-copy-layer">
        <p className="hero-eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-bold tracking-wide text-muted shadow-sm backdrop-blur-xl">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong shadow-[0_0_12px_rgba(43,122,109,0.35)]" />
          Independent engineer · Full-stack, AI & automation
        </p>
        <p className="hero-name mb-4">Hi, I’m <span className="hero-name-script">Abhilash Dash</span></p>
        <h1 className="page-title">
          Strategic business solutions
          <span className="mt-3 block text-accent-strong">& digital engineering.</span>
        </h1>
        <p className="page-copy mx-auto mt-7 max-w-2xl">
          I build full-stack products, AI agents, and workflow automations that turn complicated ideas into useful systems and reduce repetitive work.
        </p>
        <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="primary-button text-base sm:px-7 sm:text-lg">
            Let’s discuss your project <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
          <Link href="/projects" className="secondary-button">
            Explore selected work <ArrowDownRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="hero-tags mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-muted">
          <span>Full-stack engineering</span><span aria-hidden="true" className="size-1 rounded-full bg-accent-strong/60" />
          <span>AI agents</span><span aria-hidden="true" className="size-1 rounded-full bg-accent-strong/60" />
          <span>Business automation</span>
        </div>
      </div>
    </div>
  );
}
