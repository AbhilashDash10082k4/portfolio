"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out for collaborations
                        or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <Card className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:hello@example.com" className="font-medium hover:text-blue-400 transition-colors">
                                        hello@example.com
                                    </a>
                                </div>
                            </Card>
                            <Card className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">GitHub</p>
                                    <Link href="https://github.com" target="_blank" className="font-medium hover:text-blue-400 transition-colors">
                                        github.com/username
                                    </Link>
                                </div>
                            </Card>
                            <Card className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <Link href="https://linkedin.com" target="_blank" className="font-medium hover:text-blue-400 transition-colors">
                                        linkedin.com/in/username
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="How can I help you?"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                                    />
                                </div>
                                <Button className="w-full">
                                    Send Message
                                    <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
