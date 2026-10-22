import { Section } from "@/components/ui/section";
import { Intro } from "./Intro";

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[100svh] items-stretch overflow-hidden p-0"
    >
      <div className="page-container relative z-10 w-full max-w-none p-0">
        <Intro />
      </div>
    </Section>
  );
}
