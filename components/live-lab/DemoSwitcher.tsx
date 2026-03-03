"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DemoSwitcherProps {
    demos: { id: string; label: string; icon?: React.ReactNode }[];
    activeId: string;
    onChange: (id: string) => void;
    className?: string;
}

export const DemoSwitcher = ({
    demos,
    activeId,
    onChange,
    className,
}: DemoSwitcherProps) => {
    return (
        <div className={cn("flex flex-wrap gap-2 p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10", className)}>
            {demos.map((demo) => {
                const isActive = activeId === demo.id;
                return (
                    <button
                        key={demo.id}
                        onClick={() => onChange(demo.id)}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2",
                            isActive ? "text-white" : "text-white/40 hover:text-white/60"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {demo.icon && <span className="relative z-10">{demo.icon}</span>}
                        <span className="relative z-10">{demo.label}</span>
                    </button>
                );
            })}
        </div>
    );
};
