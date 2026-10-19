"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const BRAND = "ADSince2K4";

/** Brief, one-time startup overlay. Page content remains server-rendered beneath it. */
export function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          role="status"
          aria-label="Loading ADSince2K4 portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="intro-loader-content">
            <p className="intro-loader-label">Independent engineering studio</p>
            <p className="intro-loader-brand" aria-label={BRAND}>
              {BRAND.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 24, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.12 + index * 0.055, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter}
                </motion.span>
              ))}
            </p>
            <div className="intro-loader-track" aria-hidden="true"><span /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
