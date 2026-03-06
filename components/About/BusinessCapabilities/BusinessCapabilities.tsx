import { CapabilityCard } from "@/components/About/BusinessCapabilities/CapabilityCard";
import { Rocket, Zap, Bot, MessageSquare } from "lucide-react";
import React from "react";

export const BusinessCapabilities = () => {
  const capabilities = [
    {
      title: "Conversion-Focused Web Development",
      description: "SEO-optimized landing pages and fullstack platforms designed to increase conversions and user engagement through performance-first engineering.",
      impact: "Maximize visitor-to-lead conversion rates",
      tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
      icon: <Rocket className="w-6 h-6" />,
      color: "blue",
      delay: 0.1
    },
    {
      title: "Business Automation Systems",
      description: "Custom internal workflows that eliminate manual bottlenecks, synchronizing data across your entire enterprise tool stack automatically.",
      impact: "Scale operations without increasing headcount",
      tech: ["Node.js", "Redis", "API", "Workflows"],
      icon: <Zap className="w-6 h-6" />,
      color: "purple",
      delay: 0.2
    },
    {
      title: "AI Agents for Operations & Sales",
      description: "Autonomous AI agents that handle complex data processing, lead qualification, and internal company knowledge base interactions.",
      impact: "24/7 autonomous data processing & sales",
      tech: ["OpenAI", "LangChain", "Python", "VectorDB"],
      icon: <Bot className="w-6 h-6" />,
      color: "emerald",
      delay: 0.3
    },
    {
      title: "Intelligent AI Chatbot Integrations",
      description: "Custom-trained AI assistants embedded into your ecosystem for lightning-fast customer support and automated qualification.",
      impact: "Reduce support costs by up to 60%",
      tech: ["React", "NLP", "Streaming", "RAG"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "cyan",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap) => (
          <CapabilityCard key={cap.title} {...cap} />
        ))}
      </div>
    </div>
  );
};
