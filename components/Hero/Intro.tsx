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
      // Scrub the same timeline in either direction; avoid CSS scroll-timeline
      // support differences between Chromium-based browsers.
      gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top 12%",
          end: "bottom 18%",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      })
        .to(image, { opacity: 0.12, y: -42, scale: 0.985, ease: "none" }, 0)
        .to(copy, { opacity: 0.2, y: -22, ease: "none" }, 0);
    }, stage);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    const refreshId = window.requestAnimationFrame(refresh);
    return () => {
      window.cancelAnimationFrame(refreshId);
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  return (
    <div className="hero-editorial">
      <div ref={stageRef} className="hero-stage">
        <p className="hero-eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-bold tracking-wide text-muted shadow-sm backdrop-blur-xl">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong" />
          Independent engineer · Full-stack, AI & automation
        </p>
        <div ref={imageRef} className="hero-portrait-layer">
          <Image
            src="/Contemplative%20Silhouette%20in%20Smoky%20Backlight.png"
            alt="Abhilash Dash silhouetted against a smoky backlight"
            width={1600}
            height={1200}
            priority
            sizes="(max-width: 767px) 100vw, 96vw"
          />
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
