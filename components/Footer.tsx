/**
 * Site-wide footer with copyright and verified profile links.
 * Related files: app/layout.tsx mounts the footer on every route; the GitHub
 * destination matches the profile link used in components/Navbar.tsx.
 */
import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Built with care.
        </p>
        <Link
          href="https://github.com/AbhilashDash10082k4"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          className="text-muted-foreground transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <Github aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </footer>
  );
}
