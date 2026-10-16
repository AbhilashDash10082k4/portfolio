import { Section } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Intro } from "./Intro";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[88svh] items-center justify-center overflow-hidden pb-24 pt-28 md:min-h-screen md:pt-24"
    >
      {/* Restore the original animated background layers while retaining the updated hero content. */}
      <BackgroundRippleEffect />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-[radial-gradient(circle_at_20%_35%,rgba(34,211,238,0.12),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full bg-[radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-full bg-[url('/grid.svg')] bg-size-[40px_40px] opacity-[0.4] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 pt-4 md:px-10 md:pt-0">
        <div className="mb-10 flex justify-center md:mb-14 md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-medium tracking-wide text-white/70 sm:text-xs">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-lime-300" />
            Independent engineer · Full-stack, AI & automation
          </span>
        </div>
        <Intro />
      </div>

      <ScrollButton />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-96 bg-linear-to-t from-[#04071D] via-[#04071D]/40 to-transparent"
      />
    </Section>
  );
}
