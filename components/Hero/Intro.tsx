"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Intro() {
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(image, { opacity: 0.16, y: -34, scale: 0.985, ease: "none" }, 0)
        .to(copy, { opacity: 0.18, y: -20, ease: "none" }, 0);
    }, stage);

    return () => context.revert();
  }, []);

  return (
    <div className="hero-editorial">
      <div ref={stageRef} className="hero-stage">
        <p className="hero-eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-bold tracking-wide text-muted shadow-sm backdrop-blur-xl">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong shadow-[0_0_12px_rgba(43,122,109,0.35)]" />
          Independent engineer · Full-stack, AI & automation
        </p>
        <div ref={imageRef} className="hero-portrait-layer">
          <Image src="/dp.webp" alt="Portrait of Abhilash Dash" width={1200} height={1000} priority sizes="(max-width: 767px) 94vw, (max-width: 1200px) 82vw, 1100px" />
        </div>
        <div ref={copyRef} className="hero-copy-layer">
          <p className="hero-name mb-2">Hi, I’m <span className="hero-name-script">Abhilash Dash</span></p>
          <h1 className="page-title">
            I build things that
            <span className="hero-title-italic mt-1 block">move business forward.</span>
          </h1>
          <p className="page-copy mx-auto mt-3 max-w-2xl">
            Full-stack products, AI agents, and thoughtful automations — engineered to make ambitious ideas useful.
          </p>
          <div className="hero-actions mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="primary-button text-base sm:px-7 sm:text-lg">
              Let’s build something <ArrowUpRight aria-hidden="true" className="size-5" />
            </Link>
            <Link href="/projects" className="secondary-button">
              Explore selected work <ArrowDownRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-editorial-note">
        <span className="hero-note-index">INDEPENDENT BY DESIGN · BUILT WITH INTENT</span>
        <p>Good technology should feel <em>effortless.</em> The thinking behind it shouldn’t.</p>
        <span className="hero-note-side">DESIGN · ENGINEERING · AI</span>
      </div>
    </div>
  );
}
