"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl bg-black/50 backdrop-blur-md border-white/10">
        <Link
          href="/"
          className="relative text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-size-[200%_auto] animate-gradient-shift transition-all duration-300 group"
        >
          <span className="absolute inset-0 blur-lg bg-linear-to-r from-cyan-500/50 to-blue-500/50 opacity-0 -z-10" />
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-white/70 hover:text-cyan-400 transition-all duration-300 group hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              >
                {link.name}
                {/* Hover underline animation */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                {/* Active state underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-cyan-500 to-cyan-400" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-white/10 pr-4">
            <Link
              href="https://github.com/AbhilashDash10082k4"
              target="_blank"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <Button 
            size="sm" 
            variant="primary" 
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative w-6 h-6 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X /> : <Menu />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 md:hidden bg-black/90"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-center py-2 text-muted-foreground hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center gap-6 py-4 border-t border-white/10">
              <Link href="https://github.com" target="_blank">
                <Github className="w-6 h-6 text-muted-foreground" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 text-muted-foreground" />
              </Link>
              <Link href="mailto:hello@example.com">
                <Mail className="w-6 h-6 text-muted-foreground" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
