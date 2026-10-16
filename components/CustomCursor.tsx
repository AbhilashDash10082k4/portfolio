"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Two-layer cursor for mouse/trackpad devices. Touch input remains native. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 26, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 300, damping: 26, mass: 0.35 });
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const syncPointer = () => setFinePointer(query.matches);
    syncPointer();
    query.addEventListener("change", syncPointer);

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handleLeave);
    return () => {
      query.removeEventListener("change", syncPointer);
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [x, y]);

  useEffect(() => {
    if (!finePointer) return;
    const selector = 'a, button, input, textarea, select, [role="button"]';
    const handlePointerOver = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest(selector)) {
        document.documentElement.classList.add("cursor-hovering");
      }
    };
    const handlePointerOut = (event: PointerEvent) => {
      const fromInteractive = event.target instanceof Element && event.target.closest(selector);
      const toInteractive = event.relatedTarget instanceof Element && event.relatedTarget.closest(selector);
      if (fromInteractive && !toInteractive) {
        document.documentElement.classList.remove("cursor-hovering");
      }
    };
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.classList.remove("cursor-hovering");
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <>
      <motion.div className="custom-cursor-ring" style={{ x: ringX, y: ringY }} aria-hidden="true" />
      <motion.div className="custom-cursor-dot" style={{ x, y }} aria-hidden="true" />
    </>
  );
}
