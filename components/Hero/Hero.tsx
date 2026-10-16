import { Section } from "@/components/ui/section";
import { Intro } from "./Intro";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden pb-24 pt-32 md:min-h-screen md:pt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-1/4 size-72 rounded-full bg-accent/20 blur-3xl md:size-[28rem]" />
      <div className="page-container relative z-10 pt-5">
        <Intro />
      </div>
      <ScrollButton />
    </Section>
  );
}
