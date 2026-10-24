"use client";

import Link from "next/link";
import { memo, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Bot, Workflow, AudioLines, MessagesSquare, PanelsTopLeft } from "lucide-react";
import { Section } from "@/components/ui/section";

const services = [
  { number: "01", title: "AI Agents", italic: "Systems that take initiative.", description: "Purpose-built agents that reason over context, use tools, and move real work forward with clear boundaries.", tags: ["Tool use", "Knowledge", "Orchestration"], icon: Bot, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=82", visual: "service-visual-ai" },
  { number: "02", title: "AI Automations", italic: "Less busywork. Better flow.", description: "Connected workflows that move information between the tools your team already relies on.", tags: ["Integrations", "Workflow design", "APIs"], icon: Workflow, image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1400&q=82", visual: "service-visual-automation" },
  { number: "03", title: "Voice Agents", italic: "Conversations with a purpose.", description: "Natural voice experiences for support, qualification, scheduling, and other repeatable conversations.", tags: ["Speech", "Realtime", "Telephony"], icon: AudioLines, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=82", visual: "service-visual-voice" },
  { number: "04", title: "AI Chatbots", italic: "Useful answers, grounded in context.", description: "Conversational interfaces connected to your content, products, and business processes.", tags: ["RAG", "Support", "Knowledge"], icon: MessagesSquare, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=82", visual: "service-visual-chat" },
  { number: "05", title: "Website Design & Development", italic: "Digital experiences, built to last.", description: "Distinctive websites and full-stack products that balance visual clarity with maintainable engineering.", tags: ["Next.js", "Product UI", "Full-stack"], icon: PanelsTopLeft, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=82", visual: "service-visual-web" },
];

type Service = (typeof services)[number];

const ServicePanel = memo(function ServicePanel({
  service,
  index,
  active,
  onActivate,
}: {
  service: Service;
  index: number;
  active: boolean;
  onActivate: (index: number) => void;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      className={"services-panel " + (active ? "is-active " : "") + service.visual}
      animate={{ flexGrow: active ? 3.1 : 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 28, mass: 1.05 }}
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      onClick={() => onActivate(index)}
      tabIndex={0}
      aria-expanded={active}
      aria-label={service.title}
      style={{ backgroundImage: active ? "linear-gradient(180deg, rgba(7,12,10,.06), rgba(7,12,10,.82)), url('" + service.image + "')" : undefined }}
    >
      <span className="services-panel-top">{service.number} <span>/ SERVICE</span></span>
      <div className="services-panel-center">
        <Icon aria-hidden="true" className="services-panel-icon" strokeWidth={1.4} />
        <h3>{service.title}</h3>
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              className="services-panel-details"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="services-panel-italic">{service.italic}</p>
              <p>{service.description}</p>
              <Link href={"/contact?service=" + encodeURIComponent(service.title)} className="services-panel-link">Discuss this service <ArrowUpRight aria-hidden="true" size={16} /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="services-panel-bottom">{service.title.toUpperCase()}</span>
    </motion.article>
  );
});

export function ServicesStory() {
  const [activeIndex, setActiveIndex] = useState(0);\n  const activateService = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <Section id="services" className="services-story-section relative py-24 md:py-36">
      <div className="page-container">
        <div className="services-story-heading">
          <p className="page-eyebrow mb-5">What I bring to the table</p>
          <h2 className="services-display-title">Thoughtful by design.<br /><em>Useful by default.</em></h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">A small set of capabilities, designed around the work that actually needs doing.</p>
        </div>

        {/* Desktop/tablet: expanding horizontal service panels inspired by the reference video. */}
        <div className="services-panel-strip" aria-label="Explore services">
          {services.map((service, index) => (
            <ServicePanel
              key={service.number}
              service={service}
              index={index}
              active={index === activeIndex}
              onActivate={activateService}
            />
          ))}
        </div>

        {/* Mobile: preserve the original stacked tile/card experience; no hover dependency. */}
        <div className="services-story-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-story-row" key={service.number}>
                <div className="service-story-copy">
                  <span className="service-story-number">{service.number} <span> / SERVICE</span></span>
                  <Icon className="service-story-icon" aria-hidden="true" strokeWidth={1.4} />
                  <h3>{service.title}</h3>
                  <p className="service-story-italic">{service.italic}</p>
                  <p className="service-story-description">{service.description}</p>
                  <ul className="service-story-tags">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <Link href={"/contact?service=" + encodeURIComponent(service.title)} className="service-story-link">Discuss this service <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
                </div>
                <div className={"service-story-visual " + service.visual} role="img" aria-label={"Placeholder visual for " + service.title} style={{ backgroundImage: "linear-gradient(135deg, rgba(11,19,14,.08), rgba(11,19,14,.4)), url('" + service.image + "')" }}>
                  <span className="service-visual-index">{service.number}</span>
                  <span className="service-visual-caption">{service.title.toUpperCase()}</span>
                  <span className="service-visual-orbit" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
