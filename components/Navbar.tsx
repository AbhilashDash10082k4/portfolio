"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = React.useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        lastScrollY.current = latest;
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
        >
            <nav className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl bg-black/50 backdrop-blur-md border-white/10">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Portfolio
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                        <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                    <Button size="sm" variant="primary">
                        Resume
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden bg-black/90"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-center py-2 text-muted-foreground hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex justify-center gap-6 py-4 border-t border-white/10">
                        <Link href="https://github.com" target="_blank">
                            <Github className="w-6 h-6 text-muted-foreground" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <Linkedin className="w-6 h-6 text-muted-foreground" />
                        </Link>
                        <Link href="mailto:hello@example.com">
                            <Mail className="w-6 h-6 text-muted-foreground" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
