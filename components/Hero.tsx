"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
export function Hero() {
  return (
    <Section
      id="hero"
      className="flex items-center justify-center min-h-screen relative py-20 md:py-0"
    >
      {/* Background Gradient Animation */}
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
          "bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}
      <BackgroundRippleEffect />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Atmospheric Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_35%,rgba(34,211,238,0.12),transparent_40%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none z-0" />
      
      {/* Grid background with reduced opacity for better clarity */}
      <div className="absolute inset-x-0 top-0 h-full w-full bg-[url('/grid.svg')] bg-size-[40px_40px] opacity-[0.4] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Badge below navbar */}
      <div className="absolute top-40 sm:top-24 md:top-32 left-0 right-0 z-20 flex justify-center">
        <div className="inline-flex w-fit items-center px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm">
          <span className="relative flex size-2 sm:size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex size-2 sm:size-3 rounded-full bg-cyan-300"></span>
          </span>

          <span className="px-2 text-cyan-400 sm:text-cyan-500 text-xs sm:text-sm">
            Open to Freelance, Remote & Relocation
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-2 items-center relative z-10 gap-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full"
        >
          <div className="space-y-4 tracking-tight font-outfit relative">
            {/* Subtle glow pulse behind headline */}
            <div className="absolute -inset-x-20 -inset-y-10 bg-cyan-500/5 blur-[100px] animate-pulse-glow pointer-events-none" />
            
            <div className="relative mb-2">
              <h2 className="text-sm md:text-base font-light text-cyan-400/70 tracking-widest uppercase font-outfit">
                Hi, I&apos;m <span className="text-white font-normal">Abhilash Dash</span>
              </h2>
            </div>
            
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white tracking-tight leading-[1.2] font-outfit">
              Fullstack & AI <br className="hidden sm:block" />
              <span className="text-cyan-400 whitespace-nowrap">Systems Builder</span>
            </h1>
            
            <p className="relative text-neutral-400 font-light text-base md:text-lg lg:text-xl tracking-tight leading-relaxed max-w-lg pt-4 font-outfit">
              I design and build scalable web platforms, automation systems, and AI tools that help businesses grow without increasing operational complexity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full md:w-auto px-6 md:px-0">
            <motion.button 
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-5 rounded-xl bg-linear-to-r from-cyan-600 to-cyan-400 text-black font-bold transition-all overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] w-full sm:w-auto"
            >
              {/* Internal Shimmer */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity pointer-events-none" />
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">Book a Strategy Call</span>
              {/* Outer glow ring */}
              <div className="absolute -inset-[2px] rounded-xl bg-cyan-400/20 blur-[2px] group-hover:bg-cyan-400/40 transition-all opacity-0 group-hover:opacity-100" />
            </motion.button>
            
            <motion.button 
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-5 rounded-xl border border-white/10 bg-white/5 text-white/70 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all backdrop-blur-sm text-center shadow-lg w-full sm:w-auto"
            >
              View Solutions
            </motion.button>
          </div>
        </motion.div>
        <div className="col-span-1 flex items-center justify-center relative">
          {/* Large soft radial glow behind the entire column */}
          <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] -z-10 pointer-events-none" />
          
          <motion.div
            className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Animated Gradient Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors duration-700">
               <div className="absolute inset-[-4px] rounded-full border border-cyan-500/10 animate-[spin_8s_linear_infinite]" />
            </div>

            {/* Image with subtle styling */}
            <div className="relative w-full h-full p-2">
              <Image
                src="/dp.jpg"
                alt="dp"
                width={300}
                height={300}
                className="relative z-10 rounded-full border border-white/5 w-full h-full object-cover brightness-[0.85] transition-all duration-700 group-hover:brightness-100 group-hover:border-cyan-500/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute z-30 bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1 px-2 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all group"
      >
        <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white transition-colors animate-bounce" />
      </motion.button>

      {/* Bottom fade to seamlessly transition into About section's #04071D background */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-[#04071D] via-[#04071D]/40 to-transparent pointer-events-none z-20" />
    </Section>
  );
}
