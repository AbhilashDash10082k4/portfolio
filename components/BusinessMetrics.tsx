"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const Counter = ({ value, suffix = "", prefix = "", label }: CounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-2 px-4 py-6 md:py-0">
      <div className="flex items-baseline text-4xl md:text-5xl font-bold font-outfit tracking-tighter text-white">
        <span className="text-cyan-400">{prefix}</span>
        <motion.span>{display}</motion.span>
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium font-outfit text-center">
        {label}
      </p>
    </div>
  );
};

export const BusinessMetrics = () => {
  const metrics = [
    {
      value: 40,
      suffix: "%",
      label: "Conversion Increase",
      prefix: "+"
    },
    {
      value: 20,
      suffix: "+",
      label: "Manual Hours Saved/Wk"
    },
    {
      value: 50,
      suffix: "+",
      label: "Enterprise Tools Integrated"
    },
    {
      value: 70,
      suffix: "%",
      label: "Faster Operational Workflows",
      prefix: "+"
    }
  ];

  return (
    <div className="w-full py-16 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <Counter 
              key={idx}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
