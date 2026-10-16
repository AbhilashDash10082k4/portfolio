"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function ScrollButton() {
  return (
    <motion.button
      type="button"
      aria-label="Scroll to selected projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
      className="absolute bottom-7 left-1/2 z-30 flex h-12 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface/70 text-muted shadow-sm backdrop-blur-sm transition hover:border-accent-strong/40 hover:text-accent-strong"
    >
      <ChevronDown aria-hidden="true" className="size-5 animate-bounce" />
    </motion.button>
  );
}
