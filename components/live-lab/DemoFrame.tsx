"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Monitor, Tablet, Smartphone, Loader2 } from "lucide-react";

interface DemoFrameProps {
    children: React.ReactNode;
    isLoading?: boolean;
    className?: string;
}

export const DemoFrame = ({
    children,
    isLoading = false,
    className,
}: DemoFrameProps) => {
    const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

    const viewWidths = {
        desktop: "w-full",
        tablet: "max-w-[768px] mx-auto",
        mobile: "max-w-[375px] mx-auto",
    };

    return (
        <div className={cn("relative space-y-4", className)}>
            {/* Toolbar */}
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                </div>
                
                <div className="flex bg-white/5 p-1 rounded-lg gap-1 border border-white/5">
                    {(["desktop", "tablet", "mobile"] as const).map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setViewMode(mode)}
                            className={cn(
                                "p-1.5 rounded transition-colors duration-200",
                                viewMode === mode ? "bg-blue-600/20 text-blue-400" : "text-white/20 hover:text-white/40"
                            )}
                        >
                            {mode === "desktop" && <Monitor className="w-4 h-4" />}
                            {mode === "tablet" && <Tablet className="w-4 h-4" />}
                            {mode === "mobile" && <Smartphone className="w-4 h-4" />}
                        </button>
                    ))}
                </div>

                <div className="text-[10px] text-white/20 font-mono tracking-tighter">
                    HTTPS://LIVE-LAB.DEMO
                </div>
            </div>

            {/* Content Area */}
            <div className="relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden min-h-[500px] shadow-2xl transition-all duration-500 ease-in-out">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
                        >
                            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <div className={cn(
                    "h-full p-4 transition-all duration-500",
                    viewWidths[viewMode]
                )}>
                    {children}
                </div>
            </div>
        </div>
    );
};
