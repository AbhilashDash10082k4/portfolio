import { Monitor, Workflow, Brain, ShieldCheck, Clock, Webhook, LinkIcon, Binary, Database, BookOpen, BarChart, RefreshCw } from "lucide-react";
import { CapabilityBlock } from "./CapabilityBlock";

const regions = [
  {
    title: 'High-Converting Web Platforms',
    description:
      'Performance-first, SEO-optimized web platforms designed to convert visitors and scale efficiently.',
    mainIcon: <Monitor className="w-5 h-5" />,
    tech: [
      { name: 'Next.js', icon: '/icons8-next.js-48.svg' },
      { name: 'React', icon: '/react.svg' },
      { name: 'Tailwind', icon: '/icons8-tailwind-css-48.svg' },
      { name: 'PostgreSQL', icon: '/icons8-postgresql-48.svg' },
      { name: 'Prisma', icon: '/prisma.svg' },
      { name: 'MongoDB', icon: '/mongodb-green.svg' },
      // { name: 'Redis', icon: '/Redis.svg' },
      // { name: 'Kafka', icon: '/kafka.svg' },
      // { name: 'Rust', icon: '/rust-logo.svg' },
      { name: 'Node.js', icon: '/nodejs.svg' },
      { name: 'Supabase', icon: '/icons8-supabase-48.svg' },
    ],
    enables: [
      'Faster load times',
      'Better SEO ranking',
      'Higher lead conversion',
    ],
    color: 'blue' as const,
    delay: 0.3,
  },
  {
    title: 'Workflow Automation Systems',
    description:
      'Automated workflows that eliminate manual tasks and integrate business tools seamlessly.',
    mainIcon: <Workflow className="w-5 h-5" />,
    tech: [
      { name: 'Webhook', icon: '/webhook.svg' },
      { name: 'Cron Jobs', icon: <Clock className="w-5 h-5" /> },
      { name: 'APIs', icon: <Webhook className="w-5 h-5" /> },
      // { name: 'Supabase', icon: '/icons8-supabase-48.svg' },
      { name: 'n8n', icon: '/n8n-color.svg' },
      { name: 'OpenAI', icon: '/openai.svg' },
    ],
    enables: [
      'Zero manual data entry',
      'Real-time tool syncing',
      'Reduced operational overhead',
    ],
    color: 'purple' as const,
    delay: 0.3,
  },
  {
    title: 'AI-Powered Business Tools',
    description:
      'Custom AI systems that assist sales, support, and operations using intelligent automation.',
    mainIcon: <Brain className="w-5 h-5" />,
    tech: [
      { name: 'OpenAI', icon: '/openai.svg' },
      { name: 'LangChain', icon: <LinkIcon className="w-5 h-5" /> },
      { name: 'LangGraph', icon: <Binary className="w-5 h-5" /> },
      { name: 'Vector DBs', icon: <Database className="w-5 h-5" /> },
      { name: 'RAG', icon: <BookOpen className="w-5 h-5" /> },
    ],
    enables: [
      '24/7 Intelligent support',
      'Automated lead profiling',
      'Instant knowledge retrieval',
      'Predictive Analytics',
      'Natural Language UX',
    ],
    color: 'emerald' as const,
    delay: 0.3,
  },
  {
    title: 'Production Infrastructure',
    description:
      'Reliable deployment pipelines and scalable infrastructure built for performance and uptime.',
    mainIcon: <ShieldCheck className="w-5 h-5" />,
    tech: [
      { name: 'Docker', icon: '/icons8-docker-48.svg' },
      { name: 'Kubernetes', icon: '/icons8-kubernetes-48.svg' },
      { name: 'AWS', icon: '/aws.svg' },
      { name: 'CI/CD', icon: <RefreshCw className="w-5 h-5"/>},
      { name: 'Vercel', icon: '/vercel.svg' },
      { name: 'Monitoring', icon: <BarChart className="w-5 h-5" /> },
    ],
    enables: [
      '100% Infrastructure uptime',
      'Rapid feature deployment',
      'Automated scaling & recovery',
      'Cost Optimization',
      'Security Hardening',
    ],
    color: 'cyan' as const,
    delay: 0.3,
  },
];
/*Server*/
export const EngineeringCapabilities = () => {

  return (
    <div className="flex flex-col w-full mt-12 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {regions.map((region) => (
          <CapabilityBlock key={region.title} {...region} />
        ))}
      </div>

      {/* Icon Attributions */}
      <div className="mt-8 text-[10px] text-neutral-600 font-light flex flex-wrap gap-x-4 gap-y-2 justify-center opacity-50 hover:opacity-100 transition-opacity">
        <span
          dangerouslySetInnerHTML={{
            __html:
              '<a target="_blank" href="https://icons8.com/icon/grZaE9tjqDyr/supabase">Supabase</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html:
              'Webhook Icon by <a class="link_pro" href="https://freeicons.io/vector-and-svg-logos-icons-20/webhooks-icon-9217">Raj Dev</a> on <a href="https://freeicons.io">freeicons.io</a>',
          }}
        />
      </div>
    </div>
  );
};
