"use client";
import { motion } from "motion/react";

import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { BusinessCapabilities as RawBusinessCapabilities } from "./BusinessCapabilities/BusinessCapabilities"; 
import { BusinessMetrics as RawBusinessMetrics } from "./BusinessMetrics"; 
import { DeliverResults as RawDeliverResults} from "./DeliverResults"; 
import React from "react";

export const BusinessCapabilities = React.memo(RawBusinessCapabilities);
export const BusinessMetrics = React.memo(RawBusinessMetrics);
export const DeliverResults = React.memo(RawDeliverResults);


export const BackgroundEffects = React.memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <StarsBackground />
    <ShootingStars />
  </div>
));

BackgroundEffects.displayName = "BackgroundEffects";
export function Tech() {
    return (
       <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h3 className="text-white text-2xl uppercase tracking-[0.5em] font-bold font-outfit mb-3">
                  Engineering Capabilities
                </h3>
                <div className="h-px w-24 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mx-auto" />
                <p className="text-cyan-400 font-light text-sm mt-4 uppercase tracking-[0.2em] font-outfit">
                  The technical foundation behind every solution I build
                </p>
        </motion.div> 
    )
}