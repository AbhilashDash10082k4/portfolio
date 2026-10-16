/**
 * Shared footer for every route, with verified profile and contact links.
 */
import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 mt-12 border-t border-border bg-surface/60">
      <div className="page-container flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-bold">© {new Date().getFullYear()} Abhilash Dash</p>
          <p className="mt-1 text-xs text-muted">Full-stack engineering · AI agents · Automation</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/blog" className="text-sm font-bold text-muted transition hover:text-accent-strong">Blog</Link>
          <Link href="mailto:abhilash10082k4@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-bold text-muted transition hover:text-accent-strong"><Mail className="size-4" aria-hidden="true" /> Email</Link>
          <Link href="https://github.com/AbhilashDash10082k4" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)" className="inline-flex items-center gap-1.5 text-sm font-bold text-muted transition hover:text-accent-strong">GitHub <Github className="size-4" aria-hidden="true" /><ArrowUpRight className="size-3" aria-hidden="true" /></Link>
        </div>
      </div>
    </footer>
  );
}
