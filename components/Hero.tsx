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
      className="flex items-center justify-center min-h-screen relative"
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

      <div className="container mx-auto px-4 flex flex-col-reverse md:grid md:grid-cols-2 relative z-10 gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-24 sm:pt-28 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 flex flex-col justify-center sm:justify-evenly px-4 sm:px-6 md:px-10 lg:px-12"
        >
          <div className="font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
            <span className="text-sm sm:text-lg md:text-xl font-medium text-gray-400">
              Hi,
            </span>
            <br></br>
            <span className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              I am Abhilash Dash
            </span>
            <span className="text-lg sm:text-2xl md:text-3xl font-bold">,</span>
            <br />
            <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl bg-linear-to-t from-cyan-700 to-cyan-200 bg-clip-text text-transparent">
              Fullstack Engineer
            </span>
            <br></br>
            <br></br>
            <h3 className="text-white/80 font-thin text-xs sm:text-sm md:text-lg lg:text-xl tracking-tight leading-normal">
              I build fast, scalable web applications with a strong focus on
              clean UI and performance.
            </h3>
          </div>

          <div className="flex gap-4">
            {/* <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button> */}
          </div>
        </motion.div>
        <div className="col-span-1 flex items-center justify-center mt-6 sm:mt-8 md:mt-0">
          <motion.div
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Soft blurred background for depth */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl sm:blur-[80px] md:blur-[120px]"></div>

            {/* Image with subtle glow */}
            <Image
              src="/dp.jpg"
              alt="dp"
              width={300}
              height={300}
              className="relative z-10 rounded-full border border-cyan-400/40 w-full h-full object-cover opacity-90 shadow-lg shadow-cyan-500"
            />
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
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#04071D] via-[#04071D]/50 to-transparent pointer-events-none z-20" />
    </Section>
  );
}
