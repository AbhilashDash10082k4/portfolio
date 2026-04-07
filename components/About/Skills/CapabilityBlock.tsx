"use client";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import {motion} from "motion/react";
import { TechIcon } from "./TechIcon";
import React from "react";
/*client*/
interface CapabilityBlockProps {
  title: string;
  description: string;
  mainIcon: React.ReactNode;
  tech: { name: string; icon: string | React.ReactNode }[];
  enables: string[];
  color: 'blue' | 'purple' | 'emerald' | 'cyan';
  delay: number;
}
export const CapabilityBlock = ({
  title,
  description,
  tech,
  enables,
  color,
  delay,
  mainIcon,
}: CapabilityBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      viewport={{ once: false, margin: "-60px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      className="group relative flex flex-col p-6 md:p-8 rounded-2xl border border-white/8 bg-[#020412]/60 hover:bg-[#020412]/80 hover:border-cyan-500/30 transition-[background-color,border-color,box-shadow] duration-200 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full overflow-hidden"
    >
      {/* Dynamic Mesh Gradient Background */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[60px]',
          color === 'blue' &&
            'bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)]',
          color === 'purple' &&
            'bg-[radial-gradient(circle_at_50%_50%,#a855f7,transparent_70%)]',
          color === 'emerald' &&
            'bg-[radial-gradient(circle_at_50%_50%,#10b981,transparent_70%)]',
          color === 'cyan' &&
            'bg-[radial-gradient(circle_at_50%_50%,#06b6d4,transparent_70%)]'
        )}
      />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-[transform,background-color,border-color,box-shadow] duration-200 shadow-lg group-hover:scale-110',
              color === 'blue' &&
                'bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20 group-hover:shadow-blue-500/20',
              color === 'purple' &&
                'bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-purple-500/20',
              color === 'emerald' &&
                'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-emerald-500/20',
              color === 'cyan' &&
                'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-cyan-500/20'
            )}
          >
            <div className="transition-transform duration-200 group-hover:scale-110 will-change-transform">
              {mainIcon}
            </div>
          </div>
          <div className="flex -space-x-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            {tech.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-neutral-900/80 border border-white/10 flex items-center justify-center backdrop-blur-md p-1.5 shadow-xl"
              >
                <TechIcon
                  icon={t.icon}
                  name={t.name}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 font-outfit tracking-tight leading-tight transition-colors duration-500 group-hover:text-cyan-400">
          {title}
        </h3>

        <p className="text-neutral-400 text-[14px] font-light leading-relaxed mb-8 font-outfit max-w-[90%]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {tech.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0A0C1A] border border-white/5 hover:border-cyan-500/30 hover:bg-[#0E1122] transition-all duration-200 group/chip"
            >
              <TechIcon
                icon={t.icon}
                name={t.name}
                className={cn(
                  'w-4 h-4 transition-transform duration-300 group-hover/chip:scale-110',
                  color === 'blue' && 'text-blue-400',
                  color === 'purple' && 'text-purple-400',
                  color === 'emerald' && 'text-emerald-400',
                  color === 'cyan' && 'text-cyan-400'
                )}
              />
              <span className="text-[10px] font-bold text-neutral-400 group-hover/chip:text-white transition-colors uppercase tracking-[0.15em] whitespace-nowrap font-outfit">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/8 relative z-10 bg-linear-to-t from-white/2 to-transparent p-4 -mx-4 rounded-b-4xl">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
            Operational Value
          </p>
          <Sparkles
            className={cn(
              'w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-700',
              color === 'blue' && 'text-blue-400',
              color === 'purple' && 'text-purple-400',
              color === 'emerald' && 'text-emerald-400',
              color === 'cyan' && 'text-cyan-400'
            )}
          />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {enables.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 group/item"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + i * 0.05 }}
            >
              <div
                className={cn(
                  'w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_currentColor]',
                  color === 'blue' && 'bg-blue-500/50 text-blue-400',
                  color === 'purple' && 'bg-purple-500/50 text-purple-400',
                  color === 'emerald' && 'bg-emerald-500/50 text-emerald-400',
                  color === 'cyan' && 'bg-cyan-500/50 text-cyan-400'
                )}
              />
              <span className="text-[12px] text-neutral-400 font-light font-outfit group-hover/item:text-neutral-200 transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive side-border glow */}
      <div
        className={cn(
          'absolute left-0 top-1/4 bottom-1/4 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-700',
          color === 'blue' &&
            'bg-linear-to-b from-transparent via-blue-400 to-transparent',
          color === 'purple' &&
            'bg-linear-to-b from-transparent via-purple-400 to-transparent',
          color === 'emerald' &&
            'bg-linear-to-b from-transparent via-emerald-400 to-transparent',
          color === 'cyan' &&
            'bg-linear-to-b from-transparent via-cyan-400 to-transparent'
        )}
      />
    </motion.div>
  );
};