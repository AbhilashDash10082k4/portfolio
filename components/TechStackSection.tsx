const groups = [
  {
    title: "Frontend",
    description: "Interfaces that stay clear, responsive, and maintainable.",
    tools: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    description: "Application logic, APIs, relational data, and authentication.",
    tools: ["Node.js", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: "AI & automation",
    description: "Connecting models, tools, and services to useful workflows.",
    tools: ["LLM integrations", "AI agents", "n8n", "Workflow automation"],
  },
  {
    title: "Engineering tools",
    description: "The supporting tools I use to build, test, and ship.",
    tools: ["Git", "GitHub Actions", "Docker", "Rust"],
  },
];

export function TechStackSection() {
  return (
    <section className="page-container py-14 md:py-20" aria-labelledby="tech-stack-heading">
      <div className="max-w-2xl">
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
                <li key={tool} className="rounded-full border border-border bg-surface-muted/80 px-3 py-1.5 text-xs font-bold text-foreground">
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
