"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { EngineeringCapabilities } from "./Skill";
import { BusinessCapabilities } from "./BusinessCapabilities";
import { BusinessMetrics } from "./BusinessMetrics";
import { DeliverResults } from "./DeliverResults";

gsap.registerPlugin(ScrollTrigger);

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
      // Definitive smooth dome reveal from the top
      gsap.fromTo(
        containerRef.current,
        {
          clipPath: "ellipse(20% 0% at 50% 0%)",
          opacity: 0,
        },
        {
          clipPath: "ellipse(150% 150% at 50% 0%)",
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 98%", // Start slightly before it hits the bottom
            end: "top 25%",  // Finish fast enough to reveal headers
            scrub: 2.5,      // Slow and smooth manual scroll
            onUpdate: (self) => {
              if (self.progress > 0.95) {
                gsap.set(containerRef.current, { clipPath: "none" });
              }
            }
          },
          ease: "none",
        }
      );

      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );




  return (
    <div
      ref={containerRef}
      id="about"
      className="w-full relative bg-[#04071D] overflow-hidden z-10"
    >
      <section className="pt-24 pb-6 w-full relative z-10">

        <BackgroundEffects />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section 1: Strategic Business Solutions Layer */}
          <div className="mb-24">
            <div className="space-y-4 mb-12 text-center">
              <h2 id="business-solutions-header" className="text-4xl md:text-5xl font-thin text-white tracking-tight font-outfit">
                Strategic Business Solutions & <span className="text-cyan-400">Digital Engineering</span>
              </h2>

              <p className="text-neutral-400 font-light text-lg max-w-2xl font-outfit mx-auto">
                I translate complex technical architecture into high-impact business outcomes, 
                building systems that scale with your growth.
              </p>
            </div>

            <BusinessCapabilities />
          </div>


          {/* Section 2: Business Impact Metrics Strip */}
          <div className="mb-12">
            <BusinessMetrics />
          </div>

          <div className="py-12">
            <DeliverResults />
          </div>

          <div className="py-12 flex flex-col items-center">
            {/* Top Row: Profile & Bio (Centered) */}
            <div className="w-full max-w-6xl flex flex-col items-center text-center gap-10 z-10">
              <div className="relative py-12 px-8 w-full flex flex-col items-center">
                {/* Visual Anchor: Subtle Background Panel & Glow */}
                <div className="absolute inset-0 bg-white/[0.01] border-y border-white/[0.05] shadow-[0_0_50px_rgba(34,211,238,0.03)] pointer-events-none" />
                
                <div className="relative space-y-4 mb-2">
                  <h2 className="text-4xl md:text-5xl font-thin text-white tracking-tight font-outfit">
                    Software Architecture
                  </h2>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto" />
                  <p className="text-cyan-400 font-medium text-sm tracking-[0.3em] uppercase font-outfit">
                    Engineering for Scale & Performance
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 text-neutral-300 font-light leading-relaxed text-lg md:text-xl font-outfit max-w-5xl">
                <p>
                  I approach software engineering as the{" "}
                  <span className="text-white font-medium uppercase tracking-wider">strategic bedrock</span>{" "}
                  of modern business operations, where every line of code is an investment in scalability.
                </p>
                <p>
                  By bridging{" "}
                  <span className="text-white font-medium uppercase tracking-wider">clean architecture</span>{" "}
                  with performance-driven design, I translate complex requirements into robust systems that handle growth without technical debt.
                </p>
                <p>
                  My focus remains on delivering{" "}
                  <span className="text-white font-medium uppercase tracking-wider">production-grade assets</span>{" "}
                  that produce measurable ROI—ensuring your technical infrastructure directly drives long-term business outcomes.
                </p>
              </div>

              <div className="mt-8 flex flex-row gap-6">
                <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm font-outfit tracking-wider text-sm">
                  Download Resume
                </button>
                <button className="px-8 py-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all duration-300 backdrop-blur-sm font-outfit tracking-wider text-sm">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Bottom Row: Technical Skills Grid (Full Width) */}
            <div className="w-full pt-12 flex flex-col items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h3 className="text-white/30 text-xs uppercase tracking-[0.5em] font-bold font-outfit mb-3">
                  Engineering Capabilities
                </h3>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto" />
                <p className="text-cyan-400 font-light text-sm mt-4 uppercase tracking-[0.2em] font-outfit">
                  The technical foundation behind every solution I build
                </p>
              </motion.div>
              <EngineeringCapabilities />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

