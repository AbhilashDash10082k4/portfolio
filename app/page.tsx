/**
 * Homepage reading order: hero, selected projects, tech stack, service focus, CTA.
 * Dedicated About, Projects, Blog, and Contact routes live under app/.
 */
import { Hero } from "@/components/Hero/Hero";
import { SolutionsSection } from "@/components/Solutions/SolutionsSection";
import { Contact } from "@/components/Contact";
import { TechStackSection } from "@/components/TechStackSection";
import Link from "next/link";
import { ArrowUpRight, Bot, Code2, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Hero />
      <SolutionsSection limit={3} />
      <TechStackSection />
      <section className="page-container py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="page-eyebrow">What I can help with</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
            Practical engineering for real business problems.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6 md:p-7">
            <Code2 className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold tracking-tight">Full-stack products</h3>
            <p className="mt-3 leading-7 text-muted">Web applications with thoughtful interfaces, reliable APIs, and maintainable data models.</p>
          </article>
          <article className="surface-card p-6 md:p-7">
            <Bot className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold tracking-tight">AI agents</h3>
            <p className="mt-3 leading-7 text-muted">Useful AI workflows that connect models, tools, and business context to complete real tasks.</p>
          </article>
          <article className="surface-card p-6 md:p-7">
            <Workflow className="size-6 text-accent-strong" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold tracking-tight">Business automation</h3>
            <p className="mt-3 leading-7 text-muted">Integrations and repeatable workflows that reduce manual handoffs and busywork.</p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-accent-strong hover:underline">
            More about how I work <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Contact />
    </div>
  );
}
