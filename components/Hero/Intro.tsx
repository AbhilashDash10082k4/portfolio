"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Intro() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left order-3 md:order-1"
          >

            <div className="space-y-4 tracking-tight font-outfit relative w-full">
              {/* Subtle glow pulse behind headline */}
              
              <div className="relative mb-2">
                <h2 className="text-sm md:text-base font-light text-cyan-400/80 tracking-[0.2em] uppercase font-outfit">
                  Hi, I&apos;m <span className="text-white font-normal">Abhilash Dash</span>
                </h2>
              </div>
              
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white tracking-tight leading-[1.1] font-outfit">
                Fullstack & AI <br className="hidden sm:block" />
                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Systems Builder</span>
              </h1>
              
              <p className="relative text-neutral-400 font-light text-base md:text-lg lg:text-xl tracking-tight leading-relaxed max-w-lg pt-4 font-outfit mx-auto md:mx-0">
                I design and build scalable web platforms, automation systems, and AI tools that help businesses grow without increasing operational complexity.
              </p>
            </div>

            {/* CTA Buttons - Hidden on mobile here, shown below image */}
            <div className="hidden md:flex flex-row gap-6 mt-12 w-auto">
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold transition-all overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Book a Strategy Call</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
              >
                View Solutions
              </motion.button>
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center relative w-full lg:pl-12 order-2 md:order-2 mb-4 md:mb-0">
            {/* Large soft radial glow behind the entire column */}
            <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] -z-10 pointer-events-none" />
            
            <motion.div
              className="group relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

              {/* Image with subtle styling */}
              <div className="relative w-full h-full p-2">
                <Image
                  src="/dp.webp"
                  alt="dp"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-full border border-white/10 w-full h-full object-cover brightness-[0.9] transition-all duration-700 group-hover:brightness-105 group-hover:border-cyan-500/30 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile CTA Buttons - Shown after image on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 mt-6 w-full px-4 md:hidden order-4"
          >
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-4 rounded-xl bg-linear-to-r from-cyan-500 to-cyan-400 text-black font-bold shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all active:scale-[0.98]"
            >
              Book a Strategy Call
            </button>
            
            <button 
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-4 rounded-xl border border-white/20 bg-white/5 text-white font-medium backdrop-blur-md hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              View Solutions
            </button>
          </motion.div>
        </div>
    );
}