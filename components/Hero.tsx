"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Hero() {
    return (
        <Section id="hero" className="flex items-center justify-center min-h-screen pt-32">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
                        Building the Future with
                        <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
                            Code & AI
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        I`&apos;`m a Software Engineer specializing in building exceptional digital experiences.
                        Currently focused on accessible, human-centered products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
