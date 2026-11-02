'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/** Two-layer adaptive cursor with context badge pills for mouse/trackpad devices. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.3 });
  const [finePointer, setFinePointer] = useState(false);
  const [badge, setBadge] = useState<string | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const syncPointer = () => setFinePointer(query.matches);
    syncPointer();
    query.addEventListener('change', syncPointer);

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleLeave = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return;
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerout', handleLeave);
    return () => {
      query.removeEventListener('change', syncPointer);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerout', handleLeave);
    };
  }, [x, y]);

  useEffect(() => {
    if (!finePointer) return;
    const interactiveSelector = 'a, button, input, textarea, select, [role="button"]';
    const badgeSelector = '[data-cursor], .project-row, .editorial-project-card, .ambient-audio-toggle';

    const handlePointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const badgeTarget = event.target.closest(badgeSelector);
      if (badgeTarget) {
        const customLabel = badgeTarget.getAttribute('data-cursor');
        if (customLabel) {
          setBadge(customLabel);
        } else if (badgeTarget.closest('.project-row, .editorial-project-card')) {
          setBadge('VIEW');
        } else if (badgeTarget.closest('.ambient-audio-toggle')) {
          setBadge('AUDIO');
        }
      } else {
        setBadge(null);
      }

      if (event.target.closest(interactiveSelector)) {
        document.documentElement.classList.add('cursor-hovering');
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const fromBadge = event.target.closest(badgeSelector);
      const toBadge =
        event.relatedTarget instanceof Element &&
        event.relatedTarget.closest(badgeSelector);
      if (fromBadge && !toBadge) {
        setBadge(null);
      }

      const fromInteractive = event.target.closest(interactiveSelector);
      const toInteractive =
        event.relatedTarget instanceof Element &&
        event.relatedTarget.closest(interactiveSelector);
      if (fromInteractive && !toInteractive) {
        document.documentElement.classList.remove('cursor-hovering');
      }
    };

    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    return () => {
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.documentElement.classList.remove('cursor-hovering');
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <>
      <motion.div
        className={`custom-cursor-ring ${badge ? 'custom-cursor-badge-active' : ''}`}
        style={{ x: ringX, y: ringY }}
        aria-hidden="true"
      >
        {badge && (
          <span className="custom-cursor-badge-text">
            {badge}
          </span>
        )}
      </motion.div>
      <motion.div
        className="custom-cursor-dot"
        style={{ x, y, opacity: badge ? 0 : 1 }}
        aria-hidden="true"
      />
    </>
  );
}
