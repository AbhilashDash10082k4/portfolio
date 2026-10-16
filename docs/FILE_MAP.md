# Portfolio file map

Use this document as the navigation index when changing the site. Prefer updating the canonical data/component rather than duplicating content.

## App entry points

| File | Responsibility | Connected files |
|---|---|---|
| `app/page.tsx` | Composes homepage sections and controls their order. | `components/Hero/Hero.tsx`, `components/Solutions/SolutionsSection.tsx`, `components/About/About.tsx`, `components/live-lab/LiveLabSection.tsx`, `components/Contact.tsx` |
| `app/layout.tsx` | Root HTML shell, fonts, metadata, global styles, navigation and footer. | `app/globals.css`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/SmoothScroll.jsx` |
| `app/globals.css` | Global theme variables, utility animations, reduced-motion and portfolio hero styles. | Hero, navigation, selected work, all page sections |
| `next.config.ts` | Next.js framework configuration. | Build/deployment configuration |

## Content and portfolio projects

| File | Responsibility | Connected files |
|---|---|---|
| `data/portfolio-projects.ts` | Single source of truth for project names, descriptions, stacks, status, and optional URLs. | `components/Solutions/SolutionsSection.tsx` |
| `components/Solutions/SolutionsSection.tsx` | Renders the selected-work grid from canonical project data; owns the `#projects` anchor. | `data/portfolio-projects.ts`, `components/ui/section.tsx`, `app/page.tsx`, `components/Navbar.tsx` |
| `components/Projects.tsx` | Backwards-compatible export; do not add a second project list here. | `components/Solutions/SolutionsSection.tsx` |
| `docs/PORTFOLIO_REDESIGN_PLAN.md` | Phases, design principles, and verification expectations. | This file; all primary app components |

### Adding or updating a project

Edit `data/portfolio-projects.ts`. Keep statuses truthful (`Planned`, `In progress`, or `Prototype`). Set repository/demo/case-study URLs only when the destinations exist. Do not add invented metrics or imply an illustrative concept is a shipped client project.

## Hero and shared navigation

| File | Responsibility | Connected files |
|---|---|---|
| `components/Hero/Hero.tsx` | First-screen composition and lightweight CSS background. | `components/Hero/Intro.tsx`, `components/Hero/ScrollButton.tsx`, `components/ui/section.tsx`, `app/globals.css` |
| `components/Hero/Intro.tsx` | Hero message, portrait, and CTAs to contact and projects. | `public/dp.webp`, `components/Contact.tsx`, `components/Solutions/SolutionsSection.tsx` |
| `components/Hero/ScrollButton.tsx` | Scroll affordance to the next content section. | `components/Hero/Hero.tsx`, section IDs in `app/page.tsx` |
| `components/Navbar.tsx` | Responsive navigation, mobile menu, active-section tracking, contact CTA. | Section IDs in `app/page.tsx`, `components/Contact.tsx`, `components/ui/button.tsx` |
| `components/Footer.tsx` | Site-wide footer and verified profile link. | `app/layout.tsx` |
| `components/Contact.tsx` | Contact CTA and verified contact destination. | `app/page.tsx`, `components/Navbar.tsx` |
| `components/SmoothScroll.jsx` | Scroll wrapper. If native browser scrolling is retained, keep this wrapper inert and avoid adding a client-side animation loop. | `app/layout.tsx`, `app/globals.css` |

## About and service content

| File | Responsibility | Connected files |
|---|---|---|
| `components/About/About.tsx` | About section entry point and anchor. | `components/About/Content.tsx`, `app/page.tsx`, `components/Navbar.tsx` |
| `components/About/Content.tsx` | Main About narrative and composition. | About subcomponents under `components/About/` |
| `components/About/BusinessCapabilities/BusinessCapabilities.tsx` | Business capability section composition. | `CapabilityCard.tsx` |
| `components/About/BusinessCapabilities/CapabilityCard.tsx` | Reusable capability card. | `BusinessCapabilities.tsx` |
| `components/About/Skills/EngineeringCapabilities.tsx` | Engineering skills/capability layout. | `CapabilityBlock.tsx`, `Skill.tsx`, `TechIcon.tsx` |
| `components/About/Skills/CapabilityBlock.tsx` | Grouped capability presentation. | `EngineeringCapabilities.tsx` |
| `components/About/Skills/Skill.tsx` | Individual skill display. | `EngineeringCapabilities.tsx` |
| `components/About/Skills/TechIcon.tsx` | Technology icon mapping/rendering. | Skill and capability components |
| Other files under `components/About/` | Supporting copy, metrics, steps, and technology presentation. | Imported by `Content.tsx` or sibling About components |

Before presenting a metric as a business result, verify that it came from real measured work. Label conceptual examples explicitly.

## Interactive lab and UI primitives

| File | Responsibility | Connected files |
|---|---|---|
| `components/live-lab/LiveLabSection.tsx` | Client-side illustrative demo switcher and visual simulations. | `DemoSwitcher.tsx`, `DemoFrame.tsx`, `ArchitectureBreakdown.tsx`, `components/ui/section.tsx` |
| `components/live-lab/DemoSwitcher.tsx` | Switches the active lab demo. | `LiveLabSection.tsx` |
| `components/live-lab/DemoFrame.tsx` | Frame/loading shell for demo content. | `LiveLabSection.tsx` |
| `components/live-lab/ArchitectureBreakdown.tsx` | Lists architecture elements for selected demo. | `LiveLabSection.tsx` |
| `components/ui/section.tsx` | Shared semantic section wrapper with forwarded ref and section ID. | Hero, About/solutions/contact and Live Lab |
| `components/ui/button.tsx` | Shared button variants. | Navbar and other button consumers |
| `components/ui/card.tsx` | Shared card primitive. | Components that import the card |
| `components/ui/background-ripple-effect.tsx` | Optional interactive ripple-grid effect; not required by the simplified hero. | Use only where its interaction cost is justified |
| `components/ui/spotlight.tsx` | SVG spotlight effect; not required by the simplified hero. | Optional decorative sections |
| Other files under `components/ui/` | Reusable visual effects, badges, grid, text, and button primitives. | Importing components; search imports before changing/removing |

The Live Lab visuals are illustrative UI concepts, not a live connected backend. If a real integration is added later, update the copy and connect it to actual behavior before describing it as production-ready.

## Verification checklist

- Run the repository's package-manager-consistent install, lint, type-check (if configured), and production build locally or in CI.
- Open the Vercel preview and check the hero, all seven project cards, navbar anchors, contact destination, mobile menu, and footer at desktop and mobile widths.
- Verify keyboard focus, color contrast, reduced-motion behavior, and that no dead links or placeholder claims remain.
- Measure Lighthouse/Core Web Vitals before and after under comparable conditions. Do not infer a performance score from source inspection alone.
