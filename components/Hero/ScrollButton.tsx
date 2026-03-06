"use client";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function ScrollButton() {
    return (<motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth"});
        }}
        className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-7 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all group"
      >
        <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white transition-colors animate-bounce" />
      </motion.button>)
}