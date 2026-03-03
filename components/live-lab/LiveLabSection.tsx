"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DemoSwitcher } from "./DemoSwitcher";
import { DemoFrame } from "./DemoFrame";
import { ArchitectureBreakdown } from "./ArchitectureBreakdown";
import { Section } from "@/components/ui/section";
import { 
    MessageSquare, 
    Workflow, 
    ShieldCheck, 
    Terminal, 
    Database, 
    Cpu, 
    Network,
    Zap
} from "lucide-react";

const DEMOS = [
    { 
        id: "chatbot", 
        label: "AI Sales Assistant", 
        icon: <MessageSquare className="w-4 h-4" />,
        architecture: [
            { title: "NLP Engine", details: "GPT-4o with custom system prompting for brand voice consistency.", icon: <Cpu className="w-4 h-4" /> },
            { title: "Memory Store", details: "Pinecone vector DB for long-term customer context retrieval.", icon: <Database className="w-4 h-4" /> },
            { title: "Security", details: "Real-time PII filtering and prompt injection protection.", icon: <ShieldCheck className="w-4 h-4" /> },
            { title: "API Layer", details: "Next.js Route Handlers for low-latency streaming responses.", icon: <Terminal className="w-4 h-4" /> },
        ]
    },
    { 
        id: "automation", 
        label: "Lead Pipeline", 
        icon: <Workflow className="w-4 h-4" />,
        architecture: [
            { title: "Event Bus", details: "Redis Pub/Sub for handling high-volume incoming webhooks.", icon: <Zap className="w-4 h-4" /> },
            { title: "Logic Engine", details: "Custom Node.js state machine for complex branching logic.", icon: <Network className="w-4 h-4" /> },
            { title: "Data Sink", details: "PostgreSQL with row-level security for multi-tenant data.", icon: <Database className="w-4 h-4" /> },
            { title: "Orchestration", details: "Docker containers on AWS ECS for horizontal scaling.", icon: <Cpu className="w-4 h-4" /> },
        ]
    },
];

export const LiveLabSection = () => {
    const [activeDemoId, setActiveDemoId] = useState(DEMOS[0].id);
    const [isLoading, setIsLoading] = useState(false);

    const activeDemo = DEMOS.find(d => d.id === activeDemoId)!;

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [activeDemoId]);

    const handleDemoChange = (id: string) => {
        setIsLoading(true);
        setActiveDemoId(id);
    };

    return (
        <Section id="live-lab" className="py-24 bg-[#030617]">
            <div className="container mx-auto px-4 space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        The Interactive <span className="text-blue-500 italic">Live Lab</span>
                    </h2>
                    <p className="text-white/40">
                        Explore the engine behind my solutions. Real-time simulations of production-grade systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left side: Switcher and breakdown */}
                    <div className="lg:col-span-4 space-y-6">
                        <DemoSwitcher 
                            demos={DEMOS} 
                            activeId={activeDemoId} 
                            onChange={handleDemoChange} 
                        />
                        
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                {activeDemo.icon}
                                {activeDemo.label}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                {activeDemoId === "chatbot" 
                                    ? "This agent handles the entire sales cycle from initial contact to meeting booking, using RAG to access specific product knowledge."
                                    : "An end-to-end automation that pulls leads from 5+ sources, enriches them with Clearbit, and routes them based on ICP score."}
                            </p>
                        </div>

                        <ArchitectureBreakdown components={activeDemo.architecture} />
                    </div>

                    {/* Right side: Demo Frame */}
                    <div className="lg:col-span-8">
                        <DemoFrame isLoading={isLoading}>
                            <AnimatePresence mode="wait">
                                {activeDemoId === "chatbot" ? (
                                    <ChatbotMock key="chatbot" />
                                ) : (
                                    <AutomationMock key="automation" />
                                )}
                            </AnimatePresence>
                        </DemoFrame>
                    </div>
                </div>
            </div>
        </Section>
    );
};

// --- Mock UI Components ---

const ChatbotMock = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="h-full flex flex-col gap-4 text-white"
    >
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto no-scrollbar pb-4 text-sm">
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                Hello! I&apos;m your AI assistant. How can I help you optimize your business systems today?
            </div>
            <div className="self-end bg-blue-600/20 border border-blue-500/30 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                I&apos;m interested in automating my client onboarding.
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                Great! I can help with that. Are you currently using a specific CRM, or looking for a custom solution?
            </div>
            <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce [animation-delay:0.4s]" />
            </div>
        </div>
        <div className="mt-auto flex gap-2">
            <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50"
                disabled
            />
            <button className="bg-blue-600 p-3 rounded-xl">
                <Zap className="w-4 h-4 fill-white" />
            </button>
        </div>
    </motion.div>
);

const AutomationMock = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="h-full flex flex-col items-center justify-center gap-12 text-white"
    >
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* SVG Flow Animation */}
            <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
                
                {/* Lines */}
                <motion.path 
                    d="M 50 150 L 150 150" 
                    stroke="#ffffff20" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <motion.path 
                    d="M 250 150 L 350 150" 
                    stroke="#ffffff20" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                {/* Nodes */}
                <circle cx="50" cy="150" r="15" fill="#ffffff10" stroke="#ffffff20" />
                <rect x="150" y="120" width="100" height="60" rx="10" fill="url(#grad)" fillOpacity="0.2" stroke="url(#grad)" strokeWidth="1" />
                <circle cx="350" cy="150" r="15" fill="#ffffff10" stroke="#ffffff20" />

                {/* Icons (Simplified) */}
                <text x="50" y="155" fontSize="10" textAnchor="middle" fill="#3b82f6">API</text>
                <text x="200" y="155" fontSize="12" textAnchor="middle" fill="#fff" fontWeight="bold">PROCESSOR</text>
                <text x="350" y="155" fontSize="10" textAnchor="middle" fill="#8b5cf6">CRM</text>
            </svg>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                            x: [100, 300],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "linear"
                        }}
                        style={{ top: '50%' }}
                    />
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Processed</div>
                <div className="text-2xl font-bold font-mono">1,248</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Success Rate</div>
                <div className="text-2xl font-bold font-mono">99.9%</div>
            </div>
        </div>
    </motion.div>
);
