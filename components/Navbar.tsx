/**
 * Global responsive navigation and active-section indicator.
 * Related files: app/page.tsx defines the page sections; About, selected work,
 * and Contact provide the #about, #projects, and #contact anchors.
 */
"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    setHidden(latest > previous && latest > 150);
    lastScrollY.current = latest;
  });

  React.useEffect(() => {
    const elements = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((element): element is HTMLElement => element !== null);

    if (!("IntersectionObserver" in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center p-3 sm:p-4"
    >
      <nav
        aria-label="Main navigation"
        className="glass flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/65 px-5 py-3 backdrop-blur-md sm:px-6"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          Portfolio<span className="text-cyan-300">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`text-sm transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${isActive ? "text-cyan-300" : "text-white/65"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://github.com/AbhilashDash10082k4"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            <Github aria-hidden="true" className="size-5" />
          </Link>
          <Button size="sm" variant="primary" onClick={scrollToContact}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex size-9 items-center justify-center text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
            className="absolute left-4 right-4 top-[4.5rem] flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/95 p-4 shadow-xl backdrop-blur-md md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-center text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/10 pt-3">
              <Link
                href="https://github.com/AbhilashDash10082k4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm text-white/75 hover:text-white"
              >
                <Github aria-hidden="true" className="size-4" /> GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
