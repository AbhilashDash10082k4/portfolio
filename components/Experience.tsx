"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";


const experience = [
    {
        role: "Senior Software Engineer",
        company: "Tech Corp",
        period: "2023 - Present",
        description:
            "Leading the frontend team in rebuilding the core product using Next.js and React Server Components. Improved performance by 40%.",
    },
    {
        role: "Full Stack Developer",
        company: "StartUp Inc",
        period: "2021 - 2023",
        description:
            "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and automated testing strategies.",
    },
    {
        role: "Junior Developer",
        company: "Web Solutions",
        period: "2019 - 2021",
        description:
            "Collaborated with designers to implement responsive UI components. Assisted in backend API development using Node.js.",
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I&apos;ve had the privilege to work with.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="relative pl-8 md:pl-10 border-l-2 border-blue-500/30 rounded-l-none hover:border-blue-500 transition-colors">
                                <div className="absolute left-[-9px] top-8 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                        <p className="text-blue-400 font-medium">{job.company}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground">{job.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
