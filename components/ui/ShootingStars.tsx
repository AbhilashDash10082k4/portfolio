"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}: ShootingStarsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starRef = useRef<ShootingStar | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    const createStar = () => {
      const { innerWidth, innerHeight } = window;
      const angle = 45; // Top-left to bottom-right
      const scale = 1;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      
      // Randomly spawn from top edge or left edge
      const spawnOnTop = Math.random() < 0.5;
      let x, y;
      if (spawnOnTop) {
        x = Math.random() * innerWidth;
        y = 0;
      } else {
        x = 0;
        y = Math.random() * innerHeight;
      }

      starRef.current = { id: Date.now(), x, y, angle, scale, speed, distance: 0 };

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(createStar, randomDelay);
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const star = starRef.current;
      if (star) {
        // Simple update: move from top-left to bottom-right
        const rad = (star.angle * Math.PI) / 180;
        star.x += star.speed * Math.cos(rad);
        star.y += star.speed * Math.sin(rad);
        star.distance += star.speed;
        star.scale = 1 + star.distance / 100;

        if (
          star.x < -100 ||
          star.x > canvas.width + 100 ||
          star.y < -100 ||
          star.y > canvas.height + 100
        ) {
          starRef.current = null;
        } else {
          // Drawing the star with trail
          ctx.save();
          // Adjust translation to rotate around center of the "star"
          ctx.translate(star.x + (starWidth * star.scale) / 2, star.y + starHeight / 2);
          ctx.rotate(rad);
          ctx.translate(-(star.x + (starWidth * star.scale) / 2), -(star.y + starHeight / 2));
          
          const gradient = ctx.createLinearGradient(star.x, 0, star.x + starWidth * star.scale, 0);
          gradient.addColorStop(0, trailColor + "00"); // Transparent start for trail
          gradient.addColorStop(1, starColor); // Star color at head
          
          ctx.fillStyle = gradient;
          ctx.fillRect(star.x, star.y, starWidth * star.scale, starHeight);
          ctx.restore();
        }
      }
      
      animationFrame = requestAnimationFrame(updateAndDraw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize dimensions
    handleResize();
    window.addEventListener("resize", handleResize);
    
    createStar();
    updateAndDraw();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starColor, trailColor, starWidth, starHeight]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full absolute inset-0 z-0 pointer-events-none", className)}
    />
  );
};
