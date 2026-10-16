import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Abhilash Dash",
  description: "Tell Abhilash about your website, AI agent, or business automation project.",
};

export default function ContactPage() {
  return (
    <div className="page-container pb-24 pt-36 md:pt-44">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <header className="lg:sticky lg:top-32">
          <p className="page-eyebrow">Let’s talk</p>
          <h1 className="page-title mt-5">Have a project in mind?</h1>
          <p className="page-copy mt-6">Share a little context and what you’d like to achieve. Include a rough budget if you have one; it helps me understand the right scope.</p>
          <div className="mt-8 space-y-4">
            <a href="mailto:abhilash10082k4@gmail.com" className="flex items-center gap-3 text-sm font-bold text-accent-strong hover:underline">
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-surface"><Mail aria-hidden="true" className="size-5" /></span>
              abhilash10082k4@gmail.com
            </a>
            <p className="flex items-center gap-3 text-sm text-muted">
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-surface"><MessageCircle aria-hidden="true" className="size-5" /></span>
              A clear starting point is all you need.
            </p>
          </div>
        </header>
        <ContactForm />
      </div>
    </div>
  );
}
