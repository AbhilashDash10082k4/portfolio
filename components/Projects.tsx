"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "AI-Powered Analytics",
        description:
            "A comprehensive dashboard for visualizing complex data sets using machine learning algorithms to predict trends.",
        tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Task Management App",
        description:
            "Collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that showcase my skills in building scalable,
                        user-centric applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} gradient className="flex flex-col h-full group">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                                <Button variant="outline" size="sm" className="flex-1">
                                    <Link href={project.github} target="_blank">
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Link>
                                </Button>
                                <Button variant="primary" size="sm" className="flex-1">
                                    <Link href={project.demo} target="_blank">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
