"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";

gsap.registerPlugin(ScrollTrigger);

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

// Memoized Icon Component to prevent re-renders when hoveredSkill changes
const SkillIcon = React.memo(({ skill, left, top, setHoveredSkill }: any) => {
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

const SkillsCluster = () => {
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
              // Increased base radius for mobile to extend lines: original ~130, now ~150 on mobile logic
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

const BackgroundEffects = React.memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <StarsBackground />
    <ShootingStars />
  </div>
));

BackgroundEffects.displayName = "BackgroundEffects";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {
          clipPath: "ellipse(60% 40% at 50% 100%)",
        },
        {
          clipPath: "ellipse(160% 150% at 50% 100%)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "bottom bottom",
            scrub: 2,
          },
          ease: "none",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-[#04071D] overflow-hidden z-10"
    >
      <section id="about" className="py-24 md:py-32 w-full relative z-10">
        <BackgroundEffects />
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 px-6 md:px-12 max-w-7xl mx-auto items-center">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 z-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-thin text-white tracking-tight border-b border-white/20 pb-4 font-outfit">
                About Me
              </h2>
              <p className="text-cyan-400 font-medium text-lg tracking-wide uppercase font-outfit">
                Building Digital Experiences
              </p>
            </div>

            <div className="flex flex-col gap-6 text-neutral-300 font-light leading-relaxed text-base md:text-lg max-w-xl font-outfit">
              <p>
                I’m a full-stack developer passionate about building{" "}
                <span className="text-white font-medium">scalable systems</span>{" "}
                and seamless user interfaces.
              </p>
              <p>
                With a focus on{" "}
                <span className="text-white font-medium">
                  clean architecture
                </span>
                , I bridge the gap between complex backend logic and intuitive
                frontend design.
              </p>
              <p>
                My goal is to ship{" "}
                <span className="text-white font-medium">
                  production-ready software
                </span>{" "}
                that solves real problems while maintaining high performance and
                reliability.
              </p>
            </div>

            <div className="mt-4 flex flex-row gap-4">
              <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                Download Resume
              </button>
              <button className="px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all duration-300 backdrop-blur-sm">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side: Skills Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[500px] md:min-h-[600px] lg:-mt-20">
            <SkillsCluster />
          </div>
        </div>
      </section>
    </div>
  );
};
