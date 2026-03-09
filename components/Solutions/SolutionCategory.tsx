"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SolutionCategoryProps {
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    color?: "blue" | "purple" | "emerald" | "amber";
}

export const SolutionCategory = ({
    title,
    description,
    children,
    className,
    color = "blue",
}: SolutionCategoryProps) => {
    return (
        <section className={cn("space-y-6", className)}>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className={cn("w-2 h-8 rounded-full bg-gradient-to-b", 
                        color === "blue" && "from-blue-500 to-blue-700",
                        color === "purple" && "from-purple-500 to-purple-700",
                        color === "emerald" && "from-emerald-500 to-emerald-700",
                        color === "amber" && "from-amber-500 to-amber-700"
                    )} />
                    {title}
                </h2>
                <p className="text-white/40 text-sm max-w-xl">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {children}
            </div>
        </section>
    );
};
