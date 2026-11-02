'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const BRAND = 'ADSince2K4';

/**
 * Editorial Split-Curtain Preloader.
 * Dual shutter panels wipe vertically outward with cinematic cubic-bezier timing.
 */
export function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed inset-0 z-[10000] pointer-events-none"
          role="status"
          aria-label="Loading ADSince2K4 portfolio"
        >
          {/* Top Curtain Shutter */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[50.5%] bg-[#101412] border-b border-[#303b33]/40"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
          />
          {/* Bottom Curtain Shutter */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[50.5%] bg-[#101412] border-t border-[#303b33]/40"
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
          />

          {/* Centered Brand & Progress */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="intro-loader-content">
              <p className="intro-loader-brand" aria-label={BRAND}>
                {BRAND.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 24, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.12 + index * 0.05,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </p>
              <div className="intro-loader-track" aria-hidden="true">
                <span />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
