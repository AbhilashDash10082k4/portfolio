"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }) {
    return (
        <ReactLenis
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
            {children}
        </ReactLenis>
    );
}