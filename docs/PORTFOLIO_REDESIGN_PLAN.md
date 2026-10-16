# Portfolio Redesign Plan

## Purpose
This document is the source of truth for the portfolio refresh: scope, phase boundaries, verification expectations, and file ownership. Keep it updated when implementation decisions change.

## Design direction
- Present the portfolio as a premium full-stack engineering, AI-agent, and business-automation practice.
- Use a restrained near-black/charcoal and off-white palette with one accent color.
- Prioritize clear positioning, real work, readable typography, responsive layouts, and purposeful motion.
- Do not invent client results, performance metrics, repository links, or live demos. Use explicit Planned, In progress, Prototype, or Coming soon statuses where appropriate.

## Phase 1 — Projects and navigation (`feat/portfolio-projects`)
- Establish one canonical project data source and one selected-work presentation.
- Include these project concepts with truthful statuses: Agentic Trello, Agentic Whiteboard, myOwnN8n, myOwnClaudeCode, Voice Agent, n8n Automations, and Relevance AI Automations.
- Project entries should support title, problem summary, role, stack, status, thumbnail, repository URL, demo URL, and case-study link. Omit unavailable links rather than inventing them.
- Ensure section navigation and contact links work on mobile and desktop.

## Phase 2 — Premium visual system (`design/premium-portfolio`)
- Refine typography, spacing, hierarchy, responsive grids, project cards, and section transitions.
- Use a coherent accent and restrained animation rather than stacking decorative effects.
- Keep keyboard focus, contrast, and reduced-motion behavior in scope.

## Phase 3 — Rendering and performance (`perf/rendering-optimization`)
- Measure before and after changes; prioritize real-user impact and Core Web Vitals.
- Review the hero ripple grid (currently potentially hundreds of DOM cells), large SVG blur filters, global Lenis behavior, continuously animated Live Lab effects, navbar scroll listeners, unnecessary client components, and font loading.
- Prefer IntersectionObserver for visibility-driven work, pause offscreen animations, respect prefers-reduced-motion, and avoid replacing native scrolling without a demonstrated benefit.
- Use responsive image sizing and stable aspect ratios for project imagery.

## Phase 4 — Verification and documentation (`chore/portfolio-verification`)
- Document each important file's purpose, key behavior, dependencies, and related files in a nearby header comment or a concise documentation index.
- Keep comments useful and accurate; do not add repetitive boilerplate to every trivial file.
- Verify lint, type-check, production build, responsive behavior, keyboard navigation, reduced motion, and basic accessibility. Record any checks that cannot run in the available environment.
- Compare Lighthouse and Core Web Vitals before and after when tooling and deployment access are available.

## Initial file ownership map
- `app/layout.tsx` — root document shell, fonts, metadata, global providers/styles; related to global CSS and page-level components.
- `app/page.tsx` — homepage section composition and ordering; related to Hero, selected work, services, Live Lab, About, and Contact sections.
- `components/Hero/Hero.tsx` — hero message and visual composition; related to ripple and spotlight effects.
- `components/Hero/Intro.tsx` — supporting hero introduction; related to Hero.
- `components/Solutions/SolutionsSection.tsx` — current solutions/work presentation; evaluate as the canonical selected-work section.
- `components/Projects.tsx` — project listing; check whether it duplicates or conflicts with the homepage's canonical work section.
- `components/Navbar.tsx` — site navigation and active-section behavior; related to section IDs and smooth scrolling.
- `components/SmoothScroll.jsx` — global scroll behavior; related to root layout and reduced-motion preferences.
- `components/live-lab/LiveLabSection.tsx` — animated live-lab visual; related to visibility lifecycle and reduced motion.
- `components/ui/background-ripple-effect.tsx`, `components/ui/spotlight.tsx`, `components/ui/ShootingStars.tsx`, `components/ui/StarsBackground.tsx` — decorative effects; review DOM/SVG cost and animation lifecycle before tuning.

## Acceptance criteria
- Project information is honest and maintainable from one canonical source.
- The primary journey is clear: positioning → work → services/approach → contact.
- Layout works at narrow mobile, tablet, and desktop widths.
- Motion is purposeful and disabled or reduced when the user requests reduced motion.
- No unverified URLs, fictional outcomes, or invented benchmark numbers are published.
- Build and relevant checks pass, or failures and environmental limitations are recorded.
