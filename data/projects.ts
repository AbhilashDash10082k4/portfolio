/**
 * Canonical portfolio project metadata used by the selected-work section.
 * Related files: `components/Solutions/SolutionsSection.tsx` renders this data;
 * `app/page.tsx` places that section on the homepage; `components/Navbar.tsx`
 * links to its `#projects` anchor.
 *
 * Keep statuses and links factual. Add a repository/demo/case-study URL only
 * after it has been verified; missing URLs are intentionally omitted.
 */
export type ProjectStatus = "In progress" | "Prototype" | "Planned";

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: ProjectStatus;
  thumbnail?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: "agentic-trello",
    title: "Agentic Trello",
    summary:
      "An agentic project-management workspace exploring how board tasks can become actionable engineering work, including repository issues and pull requests.",
    role: "Personal project",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "In progress",
    repositoryUrl: "https://github.com/AbhilashDash10082k4/TrelloClone",
  },
  {
    id: "agentic-whiteboard",
    title: "Agentic Whiteboard",
    summary:
      "A planned collaborative whiteboard concept for turning visual notes and diagrams into structured next steps with AI assistance.",
    role: "Project concept",
    stack: ["Web application", "AI agents", "Collaboration"],
    status: "Planned",
  },
  {
    id: "myownn8n",
    title: "myOwnN8n",
    summary:
      "A planned workflow-automation builder focused on composing, running, and inspecting connected automation steps.",
    role: "Project concept",
    stack: ["Workflow automation", "TypeScript", "Node.js"],
    status: "Planned",
  },
  {
    id: "myownclaudecode",
    title: "myOwnClaudeCode",
    summary:
      "A planned coding-agent environment for exploring repository-aware tasks, tool use, and developer workflows.",
    role: "Project concept",
    stack: ["AI coding agents", "TypeScript", "Developer tools"],
    status: "Planned",
  },
  {
    id: "voice-agent",
    title: "Voice Agent",
    summary:
      "A voice-agent concept for natural-language conversations and task-oriented interactions with connected services.",
    role: "Project concept",
    stack: ["Voice AI", "LLMs", "APIs"],
    status: "Planned",
  },
  {
    id: "n8n-automations",
    title: "n8n Automations",
    summary:
      "Automation concepts connecting business tools to reduce repetitive handoffs and keep routine workflows consistent.",
    role: "Automation offering",
    stack: ["n8n", "APIs", "Webhooks"],
    status: "Planned",
  },
  {
    id: "relevance-ai-automations",
    title: "Relevance AI Automations",
    summary:
      "Agentic workflow concepts using Relevance AI to coordinate tool-using agents around specific business processes.",
    role: "Automation offering",
    stack: ["Relevance AI", "AI agents", "Integrations"],
    status: "Planned",
  },
];
