
import { Section } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Intro } from "./Intro";
import { ScrollButton } from "./ScrollButton";
export function Hero() {
  return (
    <Section
      id="hero"
      className="flex items-center justify-center min-h-screen relative py-12 md:py-0 overflow-hidden"
    >
      <BackgroundRippleEffect />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Atmospheric Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_35%,rgba(34,211,238,0.12),transparent_40%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none z-0" />
      
      {/* Grid background with reduced opacity for better clarity */}
      <div className="absolute inset-x-0 top-0 h-full w-full bg-[url('/grid.svg')] bg-size-[40px_40px] opacity-[0.4] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl pt-4 md:pt-0 -mt-12 md:mt-0">
        {/* Status Badge - Absolutely centered horizontally */}
        <div className="w-full flex justify-center mb-8 md:mb-12">
          <div className="inline-flex w-fit items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs backdrop-blur-md">
            <span className="relative flex size-1.5 sm:size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex size-1.5 sm:size-2 rounded-full bg-cyan-400"></span>
            </span>
            <span className="px-2 text-cyan-300 sm:text-cyan-400 font-medium tracking-wide">
              Open to Freelance, Remote & Relocation
            </span>
          </div>
        </div>

        <Intro/>
      </div>

      {/* Scroll Down Button */}
      <ScrollButton/>

      {/* Bottom fade to seamlessly transition into About section's #04071D background */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-[#04071D] via-[#04071D]/40 to-transparent pointer-events-none z-20" />
    </Section>
  );
}
