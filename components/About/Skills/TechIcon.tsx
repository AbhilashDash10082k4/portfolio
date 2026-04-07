"use client";
import { cn } from "@/lib/utils"; 
import Image from "next/image";
import React from "react";

export type IconLike =
  | string
  | React.ReactElement<{ className?: string }>
  | React.ComponentType<{ className?: string }>;

export const TechIcon =React.memo(function TechIcon({
  icon,
  name,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  className?: string;
}) {
  if (typeof icon === "string") {
    // Check for icons that are too dark for the current theme
    const isDarkIcon = ["next.js", "prisma", "openai"].some(term => 
      name.toLowerCase().includes(term)
    );

    return (
      <Image
        src={icon}
        alt={name}
        width={5}
        height={5}
        className={cn(
          "object-contain",
          "will-change-transform",
          isDarkIcon && "invert brightness-0 grayscale",
          className
        )}
      />
    );
  };
  return icon;
})