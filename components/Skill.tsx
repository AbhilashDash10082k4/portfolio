import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { 
  Monitor, Globe, Zap, Atom, Palette, 
  Server, Clock, Webhook, Database, GitPullRequest,
  Brain, Link as LinkIcon, Share2, HardDrive, BookOpen,
  Box, Network, RefreshCw, Cloud, BarChart,
  CheckCircle2, ArrowRight, Search, Cpu, Workflow, ShieldCheck,
  Layers, Rocket, Gauge, Sparkles, Binary
} from "lucide-react";

const TechIcon = ({ icon, name, className }: { icon: string; name: string; className?: string }) => {
  if (icon.startsWith("/")) {
    return (
      <div className={cn("relative", className)}>
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>
    );
  }

  const LucideIcon = (() => {
    switch (icon) {
      case "lucide:Search": return Search;
      case "lucide:Zap": return Zap;
      case "lucide:Globe": return Globe;
      case "lucide:Monitor": return Monitor;
      case "lucide:Clock": return Clock;
      case "lucide:Webhook": return Webhook;
      case "lucide:Database": return Database;
      case "lucide:Workflow": return Workflow;
      case "lucide:Sparkles": return Sparkles;
      case "lucide:LinkIcon": return LinkIcon;
      case "lucide:Binary": return Binary;
      case "lucide:BookOpen": return BookOpen;
      case "lucide:RefreshCw": return RefreshCw;
      case "lucide:BarChart": return BarChart;
      case "lucide:Server": return Server;
      case "lucide:Atom": return Atom;
      case "lucide:Palette": return Palette;
      case "lucide:GitPullRequest": return GitPullRequest;
      case "lucide:Share2": return Share2;
      case "lucide:HardDrive": return HardDrive;
      case "lucide:Box": return Box;
      case "lucide:Network": return Network;
      case "lucide:Cloud": return Cloud;
      case "lucide:CheckCircle2": return CheckCircle2;
      case "lucide:ArrowRight": return ArrowRight;
      case "lucide:Cpu": return Cpu;
      case "lucide:ShieldCheck": return ShieldCheck;
      case "lucide:Layers": return Layers;
      case "lucide:Rocket": return Rocket;
      case "lucide:Gauge": return Gauge;
      default: return null;
    }
  })();

  if (!LucideIcon) return null;
  return <LucideIcon className={cn("w-full h-full", className)} />;
};

// Memoized Icon Component to prevent re-renders when hoveredSkill changes
interface Skill {
  name: string;
  icon: string;
}

const SkillIcon = React.memo(
  ({
    skill,
    left,
    top,
    setHoveredSkill,
  }: {
    skill: Skill;
    left: string;
    top: string;
    setHoveredSkill: (name: string | null) => void;
  }) => {
  const isEnlarged = skill.name === "Linux" || skill.name === "MongoDB";

  return (
    <motion.div
      className="absolute"
      style={{ left, top, x: "-50%", y: "-50%" }}
    >
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="group relative cursor-pointer flex items-center justify-center border-none outline-none"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="absolute inset-0 -m-4 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <Image
          src={`/${skill.icon}`}
          alt={skill.name}
          width={isEnlarged ? 120 : 60}
          height={isEnlarged ? 120 : 60}
          className={cn(
            isEnlarged
              ? "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              : "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            "object-contain transition-all duration-300 group-hover:scale-125",
            (skill.name === "Next.js" ||
              skill.name === "Express" ||
              skill.name === "Rust" ||
              skill.name === "Linux" ||
              skill.name === "GitHub") &&
              "invert"
          )}
          onError={(e) => {
            if (skill.name === "React") {
              (e.target as HTMLImageElement).style.opacity = "0.5";
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
});

SkillIcon.displayName = "SkillIcon";
const skills = [
  { name: "Next.js", icon: "icons8-next.js-48.svg" },
  { name: "React", icon: "react.svg" },
  { name: "TypeScript", icon: "icons8-typescript-48.svg" },
  { name: "JavaScript", icon: "icons8-javascript-48.svg" },
  { name: "Tailwind", icon: "icons8-tailwind-css-48.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Rust", icon: "icons8-rust-logo-48.svg" },
  { name: "PostgreSQL", icon: "icons8-postgresql-48.svg" },
  { name: "MongoDB", icon: "mongodb-green.svg" },
  { name: "Express", icon: "icons8-express-js-48.svg" },
  { name: "Docker", icon: "icons8-docker-48.svg" },
  { name: "Kubernetes", icon: "icons8-kubernetes-48.svg" },
  { name: "Git", icon: "icons8-git-48.svg" },
  { name: "Linux", icon: "linux.svg" },
  { name: "HTML5", icon: "icons8-html-5-48.svg" },
];
// Memoized Ray Component to prevent unnecessary re-renders
const SkillRay = React.memo(
  ({ x, y, isHovered }: { x: number; y: number; isHovered: boolean }) => {
    return (
      <g>
        <line
          x1="300"
          y1="300"
          x2={x}
          y2={y}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        <motion.line
          x1="300"
          y1="300"
          x2={x}
          y2={y}
          stroke="#22d3ee"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </g>
    );
  }
);
SkillRay.displayName = "SkillRay";

export const EngineeringCapabilities = () => {
  const regions = [
    {
      title: "High-Converting Web Platforms",
      description: "Performance-first, SEO-optimized web platforms designed to convert visitors and scale efficiently.",
      mainIcon: <Monitor className="w-5 h-5" />,
      tech: [
        { name: "Next.js", icon: "/icons8-next.js-48.svg" },
        { name: "SEO", icon: "lucide:Search" },
        { name: "Optimization", icon: "lucide:Zap" },
        { name: "React", icon: "/react.svg" },
        { name: "Tailwind", icon: "/icons8-tailwind-css-48.svg" }
      ],
      enables: ["Faster load times", "Better SEO ranking", "Higher lead conversion"],
      color: "blue" as const,
      delay: 0.1
    },
    {
      title: "Workflow Automation Systems",
      description: "Automated workflows that eliminate manual tasks and integrate business tools seamlessly.",
      mainIcon: <Workflow className="w-5 h-5" />,
      tech: [
        { name: "Node.js", icon: "/nodejs.svg" },
        { name: "Cron Jobs", icon: "lucide:Clock" },
        { name: "APIs", icon: "lucide:Webhook" },
        { name: "Supabase", icon: "lucide:Database" },
        { name: "n8n", icon: "lucide:Workflow" }
      ],
      enables: ["Zero manual data entry", "Real-time tool syncing", "Reduced operational overhead"],
      color: "purple" as const,
      delay: 0.2
    },
    {
      title: "AI-Powered Business Tools",
      description: "Custom AI systems that assist sales, support, and operations using intelligent automation.",
      mainIcon: <Brain className="w-5 h-5" />,
      tech: [
        { name: "OpenAI", icon: "lucide:Sparkles" },
        { name: "LangChain", icon: "lucide:LinkIcon" },
        { name: "LangGraph", icon: "lucide:Binary" },
        { name: "Vector DBs", icon: "lucide:Database" },
        { name: "RAG", icon: "lucide:BookOpen" }
      ],
      enables: ["24/7 Intelligent support", "Automated lead profiling", "Instant knowledge retrieval", "Predictive Analytics", "Natural Language UX"],
      color: "emerald" as const,
      delay: 0.3
    },
    {
      title: "Production Infrastructure",
      description: "Reliable deployment pipelines and scalable infrastructure built for performance and uptime.",
      mainIcon: <ShieldCheck className="w-5 h-5" />,
      tech: [
        { name: "Docker", icon: "/icons8-docker-48.svg" },
        { name: "Kubernetes", icon: "/icons8-kubernetes-48.svg" },
        { name: "CI/CD", icon: "lucide:RefreshCw" },
        { name: "Vercel", icon: "/vercel.svg" },
        { name: "Monitoring", icon: "lucide:BarChart" }
      ],
      enables: ["100% Infrastructure uptime", "Rapid feature deployment", "Automated scaling & recovery", "Cost Optimization", "Security Hardening"],
      color: "cyan" as const,
      delay: 0.4
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full mt-12 pb-20">
      {regions.map((region) => (
        <CapabilityBlock key={region.title} {...region} />
      ))}
    </div>
  );
};

const CapabilityBlock = ({ 
  title, 
  description, 
  tech, 
  enables, 
  color, 
  delay,
  mainIcon 
}: CapabilityBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#020412]/60 hover:bg-[#020412]/80 hover:border-cyan-500/30 transition-all duration-200 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full overflow-hidden"
    >
      {/* Dynamic Mesh Gradient Background */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[60px]",
        color === "blue" && "bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)]",
        color === "purple" && "bg-[radial-gradient(circle_at_50%_50%,#a855f7,transparent_70%)]",
        color === "emerald" && "bg-[radial-gradient(circle_at_50%_50%,#10b981,transparent_70%)]",
        color === "cyan" && "bg-[radial-gradient(circle_at_50%_50%,#06b6d4,transparent_70%)]"
      )} />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-200 shadow-lg group-hover:scale-110",
            color === "blue" && "bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20 group-hover:shadow-blue-500/20",
            color === "purple" && "bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-purple-500/20",
            color === "emerald" && "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-emerald-500/20",
            color === "cyan" && "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-cyan-500/20"
          )}>
            <div className="transition-transform duration-200 group-hover:scale-110">
              {mainIcon}
            </div>
          </div>
          <div className="flex -space-x-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            {tech.slice(0, 3).map((t, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-neutral-900/80 border border-white/10 flex items-center justify-center backdrop-blur-md p-1.5 shadow-xl">
                <TechIcon icon={t.icon} name={t.name} className="w-full h-full" />
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
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0A0C1A] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-[#0E1122] transition-all duration-200 group/chip"
            >
              <TechIcon 
                icon={t.icon} 
                name={t.name} 
                className={cn(
                  "w-4 h-4 transition-transform duration-300 group-hover/chip:scale-110",
                  color === "blue" && "text-blue-400",
                  color === "purple" && "text-purple-400",
                  color === "emerald" && "text-emerald-400",
                  color === "cyan" && "text-cyan-400"
                )} 
              />
              <span className="text-[10px] font-bold text-neutral-400 group-hover/chip:text-white transition-colors uppercase tracking-[0.15em] whitespace-nowrap font-outfit">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-white/[0.08] relative z-10 bg-gradient-to-t from-white/[0.02] to-transparent p-4 -mx-4 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
            Operational Value
          </p>
          <Sparkles className={cn(
            "w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-700",
            color === "blue" && "text-blue-400",
            color === "purple" && "text-purple-400",
            color === "emerald" && "text-emerald-400",
            color === "cyan" && "text-cyan-400"
          )} />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {enables.map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-2 group/item"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (i * 0.05) }}
            >
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_currentColor]",
                color === "blue" && "bg-blue-500/50 text-blue-400",
                color === "purple" && "bg-purple-500/50 text-purple-400",
                color === "emerald" && "bg-emerald-500/50 text-emerald-400",
                color === "cyan" && "bg-cyan-500/50 text-cyan-400"
              )} />
              <span className="text-[12px] text-neutral-400 font-light font-outfit group-hover/item:text-neutral-200 transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive side-border glow */}
      <div className={cn(
        "absolute left-0 top-1/4 bottom-1/4 w-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        color === "blue" && "bg-gradient-to-b from-transparent via-blue-400 to-transparent",
        color === "purple" && "bg-gradient-to-b from-transparent via-purple-400 to-transparent",
        color === "emerald" && "bg-gradient-to-b from-transparent via-emerald-400 to-transparent",
        color === "cyan" && "bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
      )} />
    </motion.div>
  );
};

interface CapabilityBlockProps {
  title: string;
  description: string;
  mainIcon: React.ReactNode;
  tech: { name: string; icon: string }[];
  enables: string[];
  color: "blue" | "purple" | "emerald" | "cyan";
  delay: number;
}

export const SpiralSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center scale-[1.1] sm:scale-[1.2] md:scale-[1.3] lg:scale-[1.4] py-16 md:py-0">
      <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />

      <div className="z-30 w-32 h-32 md:w-32 md:h-32 bg-[#0a0d26] rounded-full flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/30 border border-white/10 relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-default">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-50" />
        <span className="text-white font-thin text-xl md:text-xl tracking-[0.2em] relative z-10 pointer-events-none text-center uppercase">
          SKILLS
        </span>
        <span
          className={cn(
            "text-cyan-300 text-xs md:text-sm font-light tracking-widest mt-2 transition-opacity duration-300 absolute bottom-4 md:bottom-6 text-center uppercase",
            hoveredSkill ? "opacity-100" : "opacity-0"
          )}
        >
          {hoveredSkill}
        </span>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 600">
            {skills.map((skill, i) => {
              const angleRad = i * 137.5 * (Math.PI / 180);
              const radius = 150 + i * 9;
              const x = 300 + Math.cos(angleRad) * radius;
              const y = 300 + Math.sin(angleRad) * radius;
              const isHovered = hoveredSkill === skill.name;

              return (
                <SkillRay
                  key={`line-${skill.name}`}
                  x={x}
                  y={y}
                  isHovered={isHovered}
                />
              );
            })}
          </svg>
        </div>

        {skills.map((skill, i) => {
          const angleRad = i * 137.5 * (Math.PI / 180);
          const radius = 150 + i * 9;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          const left = ((300 + x) / 600) * 100;
          const top = ((300 + y) / 600) * 100;

          return (
            <SkillIcon
              key={skill.name}
              skill={skill}
              left={`${left}%`}
              top={`${top}%`}
              setHoveredSkill={setHoveredSkill}
            />
          );
        })}
      </motion.div>
    </div>
  );
};