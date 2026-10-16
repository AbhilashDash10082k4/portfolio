/**
 * Canonical portfolio project content.
 *
 * Purpose:
 * - Keep project names, descriptions, stacks, and truthful statuses in one place.
 * - Avoid invented demo links, metrics, or claims about shipped work.
 *
 * Related files:
 * - components/Solutions/SolutionsSection.tsx renders these records.
 * - app/page.tsx places the projects section on the homepage.
 *
 * When a project ships, update its status and add only verified repository,
 * demo, and case-study URLs. Missing URLs are intentionally represented as null.
 */

export type PortfolioProjectStatus =
  | "In progress"
  | "Prototype"
  | "Planned";

export type PortfolioProject = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: PortfolioProjectStatus;
  repositoryUrl: string | null;
  demoUrl: string | null;
  caseStudyUrl: string | null;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "agentic-trello",
    title: "Agentic Trello",
    summary:
      "An AI-assisted project management workspace exploring how agents can turn board tasks into repository issues and pull requests.",
    role: "Full-stack development",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "In progress",
    repositoryUrl: "https://github.com/AbhilashDash10082k4/TrelloClone",
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "agentic-whiteboard",
    title: "Agentic Whiteboard",
    summary:
      "A collaborative whiteboard concept for turning visual ideas and planning sessions into actionable work.",
    role: "Product development",
    stack: ["Web", "AI agents"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "my-own-n8n",
    title: "myOwnN8n",
    summary:
      "An exploration of a self-owned visual workflow builder for connecting APIs, tools, and automated tasks.",
    role: "Product development",
    stack: ["TypeScript", "Workflow automation"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "my-own-claude-code",
    title: "myOwnClaudeCode",
    summary:
      "An AI coding-agent concept focused on helping developers plan, inspect, and change codebases.",
    role: "AI tooling",
    stack: ["TypeScript", "LLMs", "Developer tooling"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "voice-agent",
    title: "Voice Agent",
    summary:
      "A voice-agent concept for handling conversational workflows and routine business interactions.",
    role: "AI systems",
    stack: ["Voice AI", "LLMs", "APIs"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "n8n-automations",
    title: "n8n Automations",
    summary:
      "A collection of workflow automation experiments for reducing repetitive operational work.",
    role: "Automation engineering",
    stack: ["n8n", "APIs", "Webhooks"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
  {
    slug: "relevance-ai-automations",
    title: "Relevance AI Automations",
    summary:
      "Experiments with AI-powered workflows for coordinating tools and automating repeatable business tasks.",
    role: "AI automation",
    stack: ["Relevance AI", "AI agents", "APIs"],
    status: "Planned",
    repositoryUrl: null,
    demoUrl: null,
    caseStudyUrl: null,
  },
];
