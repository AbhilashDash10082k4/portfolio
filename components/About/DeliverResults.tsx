import React from "react";
import Steps from "./Steps";
export const DeliverResults = () => {
  return (
    <div className="w-full py-8">
      <div className="space-y-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white tracking-tight font-outfit">
          How I <span className="text-cyan-400">Deliver Results</span>
        </h2>
        <p className="text-neutral-400 font-light text-lg max-w-2xl font-outfit mx-auto">
          A structured, engineering-first approach to building high-impact business systems.
        </p>
      </div>
      <Steps/>
    </div>
  );
};