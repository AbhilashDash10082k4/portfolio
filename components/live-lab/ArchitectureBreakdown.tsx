"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Layers } from "lucide-react";

interface ComponentInfo {
    title: string;
    details: string;
    icon: React.ReactNode;
}

interface ArchitectureBreakdownProps {
    components: ComponentInfo[];
    className?: string;
}

export const ArchitectureBreakdown = ({
    components,
    className,
}: ArchitectureBreakdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("bg-white/5 border border-white/10 rounded-2xl overflow-hidden", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors duration-200"
            >
                <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-white">System Architecture Breakdown</span>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-white/40 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/10 bg-black/20">
                            {components.map((component, idx) => (
                                <div key={idx} className="p-4 space-y-2 rounded-xl border border-white/5 bg-white/5 group hover:border-blue-500/20 transition-colors">
                                    <div className="flex items-center gap-2 text-blue-400 group-hover:scale-110 transition-transform">
                                        {component.icon}
                                        <h4 className="text-xs font-bold uppercase tracking-wider">{component.title}</h4>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed">
                                        {component.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
