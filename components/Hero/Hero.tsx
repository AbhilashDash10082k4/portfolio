/**
 * Primary hero and first-impression layout.
 * Related files: Intro.tsx contains positioning and CTAs; ScrollButton.tsx
 * links to the selected-work section; app/globals.css defines shared colors.
 * Keep decorative layers CSS-only to avoid a large interactive DOM effect grid.
 */
import { Section } from "@/components/ui/section";
import { Intro } from "./Intro";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <Section
      id="hero"
      className="portfolio-hero relative flex min-h-[88svh] items-center justify-center overflow-hidden pb-24 pt-28 md:min-h-screen md:pt-24"
    >
      <div aria-hidden="true" className="portfolio-hero__glow" />
      <div aria-hidden="true" className="portfolio-hero__grid" />
      <div className="container relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex justify-center md:mb-14 md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-medium tracking-wide text-white/70 sm:text-xs">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-lime-300" />
            Independent engineer · Full-stack, AI & automation
          </span>
        </div>
        <Intro />
      </div>
      <ScrollButton />
    </Section>
  );
}
