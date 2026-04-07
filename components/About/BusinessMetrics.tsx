"use client";

import React, { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "motion/react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const Counter = ({
  value,
  suffix = "",
  prefix = "",
  label,
  delay = 0,
}: CounterProps) => {
  const ref = useRef(null);
  // Separate inView tracker purely for the spring counting logic
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 70,
    damping: 22,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => spring.set(value), delay);
      return () => clearTimeout(timer);
    } else {
      // jump() resets instantly — no reverse counting animation
      spring.jump(0);
    }
  }, [inView, spring, value, delay]);

  return (
    // Use whileInView for the visual entrance — Framer handles this internally,
    // no React state → no re-renders → no jitter during scroll
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: "easeOut" }}
      className="flex flex-col items-center justify-center space-y-2 px-4 py-6 md:py-0"
    >
      <div className="flex items-baseline text-4xl md:text-5xl font-bold font-outfit tracking-tighter text-white">
        <span className="text-cyan-400">{prefix}</span>
        <motion.span>{display}</motion.span>
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium font-outfit text-center">
        {label}
      </p>
    </motion.div>
  );
};

export const BusinessMetrics = () => {
  const metrics = [
    { value: 40, suffix: "%", label: "Conversion Increase", prefix: "+", delay: 0 },
    { value: 20, suffix: "+", label: "Manual Hours Saved/Wk", delay: 100 },
    { value: 50, suffix: "+", label: "Enterprise Tools Integrated", delay: 200 },
    { value: 70, suffix: "%", label: "Faster Operational Workflows", prefix: "+", delay: 300 },
  ];

  return (
    <div className="w-full py-16 border-y border-white/5 bg-white/2 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <Counter
              key={idx}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
              delay={metric.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
