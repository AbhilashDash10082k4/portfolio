/**
 * Contact call-to-action.
 * Related files: components/Navbar.tsx links to #contact; app/page.tsx mounts
 * this section. Use only verified contact destinations; no inert form or
 * placeholder email/social profile is presented as a working contact method.
 */
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-5 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10 md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Have a problem worth solving?
          </p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Let’s build something useful.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                I’m interested in thoughtful full-stack products, AI agents, and business automation. Reach out through GitHub to start a conversation.
              </p>
            </div>
            <Link
              href="https://github.com/AbhilashDash10082k4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <Github aria-hidden="true" className="size-4" />
              Contact on GitHub
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
