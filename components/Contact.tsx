/**
 * Homepage contact invitation. The full enquiry form lives at /contact.
 */
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="page-container py-16 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-accent-strong/20 bg-surface/90 p-7 shadow-[0_30px_100px_var(--shadow)] sm:p-10 md:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 size-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="page-eyebrow mb-4">Have a problem worth solving?</p>
            <h2 className="text-4xl font-semibold tracking-[-0.065em] sm:text-5xl md:text-6xl">Let’s build something valuable.</h2>
            <p className="page-copy mt-5 max-w-xl">Tell me what you’re working on, what’s getting in the way, and what a good outcome would look like. I’ll get back to you by email.</p>
          </div>
          <Link href="/contact" className="primary-button w-full shrink-0 sm:w-fit sm:px-7 sm:text-base">
            Start a conversation <Mail aria-hidden="true" className="size-5" /><ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
