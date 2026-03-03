"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


interface SolutionCardProps {
    title: string;
    description: string;
    techStack: string[];
    metrics?: { label: string; value: string }[];
    cta?: { label: string; href: string; variant?: "primary" | "outline" };
    isLarge?: boolean;
    className?: string;
}

export const SolutionCard = ({
    title,
    description,
    techStack,
    metrics,
    cta,
    isLarge = false,
    className,
}: SolutionCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "relative group overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30",
                isLarge ? "md:col-span-2 md:row-span-2 min-h-[400px]" : "md:col-span-2 row-span-1 min-h-[220px]",
                className
            )}
        >
            {/* Background Gradient Shift */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-600/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className={cn("font-bold text-white tracking-tight", isLarge ? "text-2xl" : "text-lg")}>
                        {title}
                    </h3>
                    {!isLarge && (
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-cyan-400" />
                        </div>
                    )}
                </div>
                
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                    {techStack.map((tech) => (
                        <Badge 
                            key={tech} 
                            variant="outline" 
                            className="bg-white/5 border-white/10 text-[10px] py-0 px-2 text-white/50 group-hover:text-white/80 transition-colors"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="relative z-10 space-y-6">
                {metrics && metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                                    {metric.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                                    {metric.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {isLarge && cta && (
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-full sm:w-auto"
                        >
                            {cta.label}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto"
                        >
                            Launch Demo
                        </Button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

