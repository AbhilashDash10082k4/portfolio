import type { Metadata } from "next";
import { Compass, Code2, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About | Abhilash Dash",
  description: "Learn about Abhilash's approach to full-stack engineering, AI agents, automation, and life beyond the keyboard.",
};

export default function AboutPage() {
  return (
    <div className="page-container about-page-shell pb-24 pt-36 md:pt-44">
      <header className="max-w-4xl">
        <p className="page-eyebrow">A little about me</p>
        <h1 className="page-title mt-5">Curious by nature. <span className="text-accent-strong">Engineer by practice.</span></h1>
        <p className="page-copy mt-7 max-w-3xl">
          I enjoy taking complex ideas apart, understanding how the pieces fit together, and turning them into software that solves a real problem. My interests sit at the intersection of full-stack engineering, AI agents, and business automation.
        </p>
      </header>

      <section className="mt-16 grid gap-5 md:mt-20 md:grid-cols-[1.15fr_0.85fr]">
        <article className="surface-card p-7 sm:p-9">
          <p className="page-eyebrow">How I think about engineering</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Useful beats complicated.</h2>
          <div className="about-body-copy mt-5 space-y-4 leading-7 text-muted">
            <p>I care about the full journey: understanding the problem, shaping the experience, designing the system, and making the pieces work together.</p>
            <p>I’m especially interested in tools that remove repetitive work and help people spend more time on decisions that actually need their attention.</p>
            <p>I’m still learning, experimenting, and refining my approach. I value clear reasoning, working software, and honest trade-offs over complexity for its own sake.</p>
          </div>
        </article>
        <article className="surface-card flex flex-col justify-between p-7 sm:p-9">
          <div>
            <p className="page-eyebrow">Beyond the keyboard</p>
            <span className="mt-6 block text-4xl leading-none text-accent-strong" aria-hidden="true">♞</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight">A chess player, too.</h2>
            <p className="mt-4 leading-7 text-muted">I enjoy playing chess. It’s a good reminder to be patient, recognize patterns, and think a few moves ahead—skills that come in handy when working through a difficult engineering problem.</p>
          </div>
          <p className="mt-8 border-t border-border pt-5 text-sm font-semibold text-muted">Curiosity doesn’t stop when the editor closes.</p>
        </article>
      </section>

      <section className="mt-16 md:mt-20">
        <p className="page-eyebrow">What I’m drawn to</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface/75 p-6">
            <Code2 className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold">Building products</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Interfaces, APIs, data models, and the details that make software feel coherent.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface/75 p-6">
            <Lightbulb className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold">Exploring AI</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Agents and integrations that connect models to tools, context, and practical outcomes.</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface/75 p-6">
            <Compass className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold">Learning in public</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Testing ideas, learning from what breaks, and improving through iteration.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
