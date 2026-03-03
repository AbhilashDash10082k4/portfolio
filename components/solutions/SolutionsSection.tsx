"use client";

import React from "react";
import { SolutionCategory } from "./SolutionCategory";
import { SolutionCard } from "./SolutionCard";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export const SolutionsSection = () => {
    return (
        <Section id="solutions" className="pt-12 pb-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />

            <div className="container mx-auto px-4 space-y-24">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl space-y-4"
                >
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-500">
                        Expertise & Capability
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Digital solutions for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">scalable business growth</span>
                    </h3>
                    <p className="text-white/40 text-lg leading-relaxed">
                        I build high-performance systems that automate complexity and drive revenue. 
                        Not just code—strategic business infrastructure.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {/* Category: Conversion Websites */}
                    <SolutionCategory 
                        title="Conversion-Centric Interfaces"
                        description="High-performance web systems designed to turn traffic into measurable revenue."
                        color="blue"
                    >
                        <SolutionCard 
                            isLarge
                            title="Enterprise SaaS Landing System"
                            description="A complete conversion framework built for high-scale B2B products. Includes A/B testing, dynamic content injection, and optimized lead flows."
                            techStack={["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"]}
                            metrics={[
                                { label: "Conversion Rate", value: "+32%" },
                                { label: "Load Time", value: "<0.8s" }
                            ]}
                            cta={{ label: "View Architecture", href: "#" }}
                        />
                        <SolutionCard 
                            title="Interactive Portfolio"
                            description="Dynamic showcase for high-ticket service providers."
                            techStack={["GSAP", "Three.js"]}
                            className="col-span-2 row-span-1"
                        />
                        <SolutionCard 
                            title="Sales Funnel Engine"
                            description="Built-in analytics and user behavior tracking."
                            techStack={["PostgreSQL", "Analytics SDK"]}
                            className="col-span-2 row-span-1"
                        />
                    </SolutionCategory>

                    {/* Category: Business Automation */}
                    <SolutionCategory 
                        title="Business Process Automation"
                        description="Eliminating manual bottlenecks with robust, event-driven internal systems."
                        color="purple"
                    >
                        <SolutionCard 
                            title="Onboarding Pipeline"
                            description="Fully automated client onboarding and project provisioning."
                            techStack={["Node.js", "Redis", "Zapier"]}
                            className="col-span-2 row-span-1"
                        />
                        <SolutionCard 
                            title="Inventory Sync engine"
                            description="Real-time multi-channel stock synchronization."
                            techStack={["Shopify API", "Webhooks"]}
                            className="col-span-2 row-span-1"
                        />
                        <SolutionCard 
                            isLarge
                            title="Operational Workspace"
                            description="Custom ERP/CRM internal management tool that unified 3 legacy systems into a single source of truth."
                            techStack={["React", "TanStack Query", "Drizzle ORM"]}
                            metrics={[
                                { label: "Manual Hours Saved", value: "24h/wk" },
                                { label: "User Satisfaction", value: "98%" }
                            ]}
                            cta={{ label: "View Workflow", href: "#" }}
                        />
                    </SolutionCategory>

                    {/* Category: AI Agents & Chatbots */}
                    <SolutionCategory 
                        title="Intelligent AI Agents"
                        description="Autonomous systems that process data, make decisions, and interact with users."
                        color="emerald"
                    >
                        <SolutionCard 
                            isLarge
                            title="AI Sales Assistant"
                            description="Context-aware AI that qualifies leads, handles objections, and schedules meetings 24/7 with zero human oversight."
                            techStack={["OpenAI", "LangChain", "Vector stores"]}
                            metrics={[
                                { label: "Lead Qualification", value: "+45%" },
                                { label: "Response Time", value: "Inst." }
                            ]}
                            cta={{ label: "Test Simulation", href: "#" }}
                        />
                        <SolutionCard 
                            title="Data Analyst Agent"
                            description="Talk to your database using natural language."
                            techStack={["LlamaIndex", "SQLAlchemy"]}
                            className="col-span-2 row-span-1"
                        />
                        <SolutionCard 
                            title="Knowledge Base Bot"
                            description="Internal RAG bot for company documentation."
                            techStack={["Pinecone", "Next.js"]}
                            className="col-span-2 row-span-1"
                        />
                    </SolutionCategory>
                </div>
            </div>
        </Section>
    );
};
