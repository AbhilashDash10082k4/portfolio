import Image from "next/image";

const groups = [
  {
    title: "Frontend",
    description: "Interfaces that stay clear, responsive, and maintainable.",
    tools: [
      { name: "TypeScript", icon: "/icons8-typescript-96.svg" },
      { name: "JavaScript", icon: "/icons8-javascript-96.svg" },
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/icons8-next.js-96.svg" },
      { name: "Tailwind CSS", icon: "/icons8-tailwind-css-96.svg" },
    ],
  },
  {
    title: "Backend & data",
    description: "Application logic, APIs, relational data, and authentication.",
    tools: [
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "PostgreSQL", icon: "/PostgresSQL.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "Supabase", icon: "/icons8-supabase-96.svg" },
      { name: "Redis", icon: "/Redis.svg" },
      { name: "MongoDB", icon: "/mongodb-green.svg" },
      { name: "Express", icon: "/icons8-express-js-96.svg" },
    ],
  },
  {
    title: "AI & automation",
    description: "Connecting models, tools, and services to useful workflows.",
    tools: [
      { name: "LLM integrations", icon: "/openai.svg" },
      { name: "AI agents", icon: "/openai.svg" },
      { name: "n8n", icon: "/n8n-color.svg" },
      { name: "Workflow automation", icon: "/webhook.svg" },
      { name: "Relevance AI", icon: "/relevance-ai-logo.svg" },
    ],
  },
  {
    title: "Engineering tools",
    description: "The supporting tools I use to build, test, and ship.",
    tools: [
      { name: "Git", icon: "/icons8-git-96.svg" },
      { name: "GitHub Actions", icon: "/github.svg" },
      { name: "Docker", icon: "/icons8-docker-96.svg" },
      { name: "Rust", icon: "/rust-logo.svg" },
      { name: "AWS", icon: "/aws.svg" },
      { name: "Postman", icon: "/postman.svg" },
      { name: "Vercel", icon: "/vercel.svg" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="tech-stack-section page-container py-14 md:py-20" aria-labelledby="tech-stack-heading">
      <div className="tech-stack-heading max-w-2xl">
        <p className="page-eyebrow">Tools I work with</p>
        <h2 id="tech-stack-heading" className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
          The stack behind the <span className="text-accent-strong">solutions.</span>
        </h2>
        <p className="page-copy mt-5">
          I choose tools around the problem, not the other way around. This is the set of technologies and approaches I currently work with and keep expanding.
        </p>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="surface-card p-5 sm:p-6">
            <h3 className="text-lg font-extrabold tracking-tight">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
            <ul aria-label={group.title + " technologies"} className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <li key={tool.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted/80 px-3 py-2 text-xs font-bold text-foreground">
                  <Image src={tool.icon} alt="" aria-hidden="true" width={22} height={22} className="size-[22px] shrink-0 object-contain" />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
