"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Rocket, 
  Zap, 
  Bot, 
  MessageSquare, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

interface CapabilityCardProps {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  icon: React.ReactNode;
  color: string;
  delay: number;
}

export const CapabilityCard = ({ title, description, impact, tech, icon, color, delay }: CapabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col h-full"
    >
      {/* Background Gradient Glow */}
      <div className={cn(
        "absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10",
        color === "purple" && "bg-purple-500/10",
        color === "blue" && "bg-blue-500/10",
        color === "emerald" && "bg-emerald-500/10",
        color === "cyan" && "bg-cyan-500/10"
      )} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          "p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors",
          color === "purple" && "text-purple-400",
          color === "blue" && "text-blue-400",
          color === "emerald" && "text-emerald-400",
          color === "cyan" && "text-cyan-400"
        )}>
          {icon}
        </div>
        <motion.div 
          whileHover={{ rotate: 45 }}
          className="text-white/20 group-hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 font-outfit tracking-tight group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 font-outfit">
        {description}
      </p>

      <div className="mt-auto space-y-4">
        <div className="flex items-center gap-2 text-[13px] text-cyan-400/90 font-medium font-outfit">
          <CheckCircle2 className="w-4 h-4" />
          <span>{impact}</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {tech.map((t) => (
            <span 
              key={t} 
              className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-neutral-500 group-hover:text-neutral-300 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

