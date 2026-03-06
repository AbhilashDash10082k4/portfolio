// "use client";
// import React, { useRef, useState } from "react";
import { Content } from "./Content";

export const About = () => {
  // const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      // ref={containerRef}
      id="about"
      className="w-full relative bg-[#04071D] overflow-hidden z-10"
    >
      <Content/>
    </div>
  );
};

