'use client';

// IMPORTANT: Keep ReactLenis mounted at the root. Smooth scrolling is intentional;
// do not replace this with an inert/native-scroll wrapper without explicit approval.

import { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function LenisScrollTriggerBridge() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  return null;
}

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateLenis = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        lerp: 0.05, // Lower = smoother (0.05-0.1 recommended)
        duration: 1.2, // Animation duration
        smoothTouch: true, // Enable smooth scroll on mobile
        smooth: true,
        wheelMultiplier: 1, // Mouse wheel sensitivity
        touchMultiplier: 1, // Touch sensitivity
        infinite: false, // Disable infinite scroll
        autoResize: true, // Auto resize on window resize
        syncTouch: false, // Better for performance on mobile
      }}
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}

