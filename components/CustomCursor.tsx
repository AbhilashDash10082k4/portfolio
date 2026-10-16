"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Two-layer custom pointer for mouse/trackpad users only.
 * Touch devices and reduced-motion users keep their normal pointer behavior.
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.45 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <>
      <motion.div className="custom-cursor-ring" style={{ x: ringX, y: ringY }} aria-hidden="true" />
      <motion.div className="custom-cursor-dot" style={{ x, y }} aria-hidden="true" />
    </>
  );
}
