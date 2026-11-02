"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Editorial Hero Introduction.
 * Uses consistent two-font typography (Manrope + Dancing Script accent).
 * Implements masked horizon typography reveals, magnetic button physics,
 * and depth scale on scroll for card-stack transition.
 */
export function Intro() {
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const stage = stageRef.current;
    const image = imageRef.current;
    const copy = copyRef.current;
    if (!stage || !image || !copy) return;

    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "bottom 10%",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      })
        .to(image, { opacity: 0.15, scale: 0.92, y: -40, ease: "none" }, 0)
        .to(copy, { opacity: 0.1, scale: 0.94, y: -30, ease: "none" }, 0);
    }, stage);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh, { passive: true });
    return () => {
      window.removeEventListener("resize", refresh);
      context.revert();
    };
  }, []);

  return (
    <div className="hero-editorial">
      <div ref={stageRef} className="hero-stage">
        {/* Eyebrow badge with text reveal */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-bold tracking-wide text-[#f3f5ef] shadow-sm backdrop-blur-xl"
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong" />
          Independent engineer · Full-stack, AI & automation
        </motion.p>

        {/* Silhouette portrait layer */}
        <div className="hero-portrait-positioner" aria-hidden="true">
          <div ref={imageRef} className="hero-portrait-layer">
            <Image
              src="/Contemplative%20Silhouette%20in%20Smoky%20Backlight.png"
              alt=""
              width={1600}
              height={1200}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Masked typography reveal content */}
        <div ref={copyRef} className="hero-copy-layer">
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hero-name text-[#a3aea5]"
            >
              Hi, I’m{" "}
              <span className="hero-name-script font-[family-name:var(--font-dancing-script)] text-accent-strong">
                Abhilash Dash
              </span>
            </motion.p>
          </div>

          <h1 className="page-title text-[#f3f5ef]">
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                I build things that
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                className="hero-title-italic block font-sans italic text-accent-strong"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              >
                move business forward.
              </motion.span>
            </span>
          </h1>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.86, ease: [0.16, 1, 0.3, 1] }}
              className="page-copy mx-auto mt-3 max-w-2xl text-[#c5cfc7]"
            >
              Full-stack products, AI agents, and thoughtful automations — engineered to make ambitious ideas useful.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="hero-actions mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic strength={0.28}>
              <Link href="/contact" className="primary-button text-base sm:px-7 sm:text-lg">
                Let’s build something <ArrowUpRight aria-hidden="true" className="size-5" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.28}>
              <Link href="/projects" className="secondary-button text-[#f3f5ef] border-border/80">
                Explore selected work <ArrowDownRight aria-hidden="true" className="size-4" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.25 }}
        className="hero-editorial-note"
      >
        <span className="hero-note-index">INDEPENDENT BY DESIGN · BUILT WITH INTENT</span>
        <p>Good technology should feel <em>effortless.</em> The thinking behind it shouldn’t.</p>
        <span className="hero-note-side">DESIGN · ENGINEERING · AI</span>
      </motion.div>
    </div>
  );
}
