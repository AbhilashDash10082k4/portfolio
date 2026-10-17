/**
 * Centered editorial hero with a portrait layer and CSS scroll-linked fade.
 * Keep motion CSS-only so the hero adds no client-side runtime.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <div className="hero-editorial">
      <div className="hero-stage">
        <div className="hero-portrait-layer" aria-hidden="true">
          <Image src="/dp.webp" alt="" width={960} height={1200} priority sizes="(max-width: 767px) 100vw, 960px" />
        </div>
        <div className="hero-copy-layer">
          <p className="hero-eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-bold tracking-wide text-muted shadow-sm backdrop-blur-xl">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong shadow-[0_0_12px_rgba(43,122,109,0.35)]" />
            Independent engineer · Full-stack, AI & automation
          </p>
          <p className="hero-name mb-4">Hi, I’m <span className="hero-name-script">Abhilash Dash</span></p>
          <h1 className="page-title">
            I build things that
            <span className="hero-title-italic mt-2 block">move business forward.</span>
          </h1>
          <p className="page-copy mx-auto mt-7 max-w-2xl">
            Full-stack products, AI agents, and thoughtful automations — engineered to make ambitious ideas useful.
          </p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="primary-button text-base sm:px-7 sm:text-lg">
              Let’s build something <ArrowUpRight aria-hidden="true" className="size-5" />
            </Link>
            <Link href="/projects" className="secondary-button">
              Explore selected work <ArrowDownRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-editorial-note">
        <span className="hero-note-index">INDEPENDENT BY DESIGN · BUILT WITH INTENT</span>
        <p>Good technology should feel <em>effortless.</em> The thinking behind it shouldn’t.</p>
        <span className="hero-note-side">DESIGN · ENGINEERING · AI</span>
      </div>
    </div>
  );
}
