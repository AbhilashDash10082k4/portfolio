"use client";

/**
 * Shared navigation for the Home, About, Projects, Blog, and Contact routes.
 * ThemeToggle intentionally appears immediately before the GitHub link.
 */
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AmbientAudioToggle } from "@/components/AmbientAudioToggle";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const iconLinkClass = "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/85 text-muted transition hover:border-accent-strong/50 hover:text-foreground";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    setHidden(latest > previous && latest > 180);
    lastScrollY.current = latest;
  });

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <nav aria-label="Main navigation" className="flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-surface/85 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:px-5">
        <Link href="/" className="shrink-0 text-base font-extrabold tracking-[-0.06em] sm:text-lg">
          Abhilash<span className="text-accent-strong">.</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={"text-sm font-bold transition-colors hover:text-accent-strong " + (active ? "text-accent-strong" : "text-muted")}>{link.name}</Link>;
          })}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className={iconLinkClass} />
          <AmbientAudioToggle className={iconLinkClass} />
          <Link href="https://github.com/AbhilashDash10082k4" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)" className={iconLinkClass}>
            <Github aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/contact" className="primary-button ml-1 min-h-10 px-4 py-2 text-sm">Let’s talk <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle className={iconLinkClass} />
          <button type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className={iconLinkClass} onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.16 }} className="absolute left-3 right-3 top-[4.4rem] flex flex-col gap-1 rounded-3xl border border-border bg-surface/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
            {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={"rounded-xl px-4 py-3 text-center text-sm font-bold transition-colors hover:bg-surface-muted " + (pathname === link.href ? "text-accent-strong" : "text-muted")}>{link.name}</Link>)}
            <div className="mt-2 flex items-center justify-center gap-3 border-t border-border pt-3">
              <AmbientAudioToggle className={iconLinkClass} />
              <Link href="https://github.com/AbhilashDash10082k4" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)" className={iconLinkClass}><Github aria-hidden="true" className="size-4" /></Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="primary-button min-h-10 px-4 py-2 text-sm">Let’s talk <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
