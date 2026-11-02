"use client";

import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";

/**
 * Atmospheric background: subtle auroras, reduced technical grid,
 * twinkling celestial starfield, and periodic accent shooting stars.
 */
export function StudioBackground() {
  return (
    <div className="studio-background" aria-hidden="true">
      <StarsBackground
        starDensity={0.00009}
        allStarsTwinkle
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.1}
      />
      <ShootingStars
        starColor="#9ddc7d"
        trailColor="#b9ef58"
        minSpeed={12}
        maxSpeed={28}
        minDelay={2000}
        maxDelay={5000}
      />
      <div className="studio-aurora studio-aurora-one" />
      <div className="studio-aurora studio-aurora-two" />
      <div className="studio-aurora studio-aurora-three" />
      <div className="studio-grid" />
      <div className="studio-particles">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} className="studio-particle" />
        ))}
      </div>
    </div>
  );
}
