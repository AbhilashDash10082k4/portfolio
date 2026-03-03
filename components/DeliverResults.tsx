"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Layers, 
  Terminal, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Strategy & System Design",
    description: "Aligning technical strategy with business goals to build the right foundation.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "blue"
  },
  {
    title: "Architecture & Planning",
    description: "Mapping out scalable infrastructure and choosing the optimal tech stack.",
    icon: <Layers className="w-6 h-6" />,
    color: "purple"
  },
  {
    title: "Implementation & Integration",
    description: "Rapid development with clean code, integrating seamless digital workflows.",
    icon: <Terminal className="w-6 h-6" />,
    color: "emerald"
  },
  {
    title: "Optimization & Scaling",
    description: "Refining performance and ensuring the system grows with your business.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "cyan"
  }
];

export const DeliverResults = () => {
  return (
    <div className="w-full py-8">
      <div className="space-y-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white tracking-tight font-outfit">
          How I <span className="text-cyan-400">Deliver Results</span>
        </h2>
        <p className="text-neutral-400 font-light text-lg max-w-2xl font-outfit mx-auto">
          A structured, engineering-first approach to building high-impact business systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5, delay: idx * 0.1 }
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col p-8 rounded-3xl border border-white/3 bg-white/2 hover:bg-white/4 hover:border-white/8 transition-all duration-500 backdrop-blur-sm shadow-2xl"
          >
            {/* Step Number Badge */}
            <div className="flex justify-between items-start mb-8">
              <div className={cn(
                "p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500 relative",
                "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500 after:blur-xl after:-z-10",
                step.color === "blue" && "text-blue-400 after:bg-blue-500/20",
                step.color === "purple" && "text-purple-400 after:bg-purple-500/20",
                step.color === "emerald" && "text-emerald-400 after:bg-emerald-500/20",
                step.color === "cyan" && "text-cyan-400 after:bg-cyan-500/20"
              )}>
                {step.icon}
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-cyan-400 transition-colors">
                Step 0{idx + 1}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3 font-outfit tracking-tight group-hover:text-cyan-300 transition-colors">
              {step.title}
            </h3>
            
            <p className="text-neutral-400 text-sm font-light leading-relaxed font-outfit">
              {step.description}
            </p>

            {/* Subtle bottom accent line on hover */}
            <div className={cn(
                "absolute bottom-0 left-8 right-8 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                step.color === "blue" && "bg-linear-to-r from-blue-500/50 to-transparent",
                step.color === "purple" && "bg-linear-to- from-purple-500/50 to-transparent",
                step.color === "emerald" && "bg-linear-to- from-emerald-500/50 to-transparent",
                step.color === "cyan" && "bg-linear-to- from-cyan-500/50 to-transparent"
            )} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
