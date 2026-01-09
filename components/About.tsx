"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: Database,
        items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    },
    {
        category: "DevOps",
        icon: Terminal,
        items: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
    },
    {
        category: "Tools",
        icon: Code2,
        items: ["VS Code", "Figma", "Postman", "Jest", "Webpack"],
    },
];

export function About() {
    return (
        <Section id="about" className="bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm a passionate developer with a knack for solving complex problems.
                        My journey in tech has been driven by curiosity and a desire to create
                        impactful solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <Card key={skill.category} gradient className="h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                    <skill.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-lg">{skill.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
