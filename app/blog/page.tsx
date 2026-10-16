import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpenText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Abhilash Dash",
  description: "Notes and articles on software engineering, AI agents, and automation.",
};

export default function BlogPage() {
  return (
    <div className="page-container min-h-[70vh] pb-24 pt-36 md:pt-44">
      <header className="max-w-3xl">
        <p className="page-eyebrow">Notes from building</p>
        <h1 className="page-title mt-5">Ideas, experiments, <span className="text-accent-strong">and lessons learned.</span></h1>
        <p className="page-copy mt-7">A place for practical notes on software engineering, AI agents, and workflow automation.</p>
      </header>
      <section className="surface-card mt-12 max-w-3xl p-7 sm:mt-16 sm:p-10">
        <BookOpenText className="size-8 text-accent-strong" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold tracking-tight">Writing is in progress.</h2>
        <p className="mt-3 leading-7 text-muted">I couldn’t verify any published blog destinations in the current repository, so I haven’t added placeholder articles or invented links. Published writing will appear here when real URLs are available.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-accent-strong hover:underline">Have a topic in mind? Get in touch <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
      </section>
      <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted"><Mail aria-hidden="true" className="size-4" /> You can also reach me at <a className="font-bold text-accent-strong underline underline-offset-2" href="mailto:abhilash10082k4@gmail.com">abhilash10082k4@gmail.com</a>.</p>
    </div>
  );
}
