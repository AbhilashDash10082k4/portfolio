# Portfolio file map

Use this index before changing the site. Keep shared behavior in its canonical component and preserve the root Lenis provider.

## App routes and shell

| File | Responsibility | Connected files |
|---|---|---|
| \`app/layout.tsx\` | Root shell, Manrope and cursive display fonts, metadata, theme provider, animated loader/background, cursor, navbar, footer, and Lenis wrapper. | \`app/globals.css\`, \`components/ThemeProvider.tsx\`, \`components/StudioBackground.tsx\`, \`components/CustomCursor.tsx\`, \`components/Navbar.tsx\`, \`components/Footer.tsx\`, \`components/SmoothScroll.jsx\` |
| \`app/page.tsx\` | Homepage composition: hero, project preview, tech stack, services, contact CTA. | \`components/Hero/Hero.tsx\`, \`components/Solutions/SolutionsSection.tsx\`, \`components/Contact.tsx\` |
| \`app/about/page.tsx\` | Personal and professional background, including chess as a hobby. | \`app/globals.css\` |
| \`app/projects/page.tsx\` | Full project list. | \`data/portfolio-projects.ts\`, \`components/Solutions/SolutionsSection.tsx\` |
| \`app/blog/page.tsx\` | Blog index. Only add links to verified, published destinations. | Existing verified links when available |
| \`app/contact/page.tsx\` | Contact page and project enquiry form. | \`components/ContactForm.tsx\` |
| \`app/globals.css\` | Light/dark design tokens, aurora/grid/particle animation, shared controls, cursor and reduced-motion behavior. | All routes and shared components |

## Shared experience

| File | Responsibility | Connected files |
|---|---|---|
| \`components/ThemeProvider.tsx\` | Light-first theme state via next-themes. | \`app/layout.tsx\`, \`components/ThemeToggle.tsx\` |
| \`components/ThemeToggle.tsx\` | Accessible light/dark toggle. | \`components/Navbar.tsx\` |
| \`components/StudioBackground.tsx\` | Three drifting aurora globules, visible fine grid, and sparse particles. | \`app/globals.css\` |
| \`components/CustomCursor.tsx\` | Two-layer pointer effect with hover response for fine-pointer devices. | \`app/layout.tsx\`, \`app/globals.css\` |
| \`components/AmbientAudioToggle.tsx\` | User-initiated Spotify embed featuring Ashke; no copyrighted audio is bundled or autoplayed. | \`components/Navbar.tsx\` |
| \`components/SmoothScroll.jsx\` | Root Lenis smooth-scrolling provider. **Keep ReactLenis mounted; never remove, replace, or make it inert without explicit approval.** | \`app/layout.tsx\`, \`lenis/react\` |
| \`components/Navbar.tsx\` | Cross-route navigation, theme and audio controls, GitHub link, and contact CTA. | All app routes |
| \`components/Footer.tsx\` | Shared footer, email, GitHub, and blog navigation. | \`app/layout.tsx\` |

## Portfolio content

| File | Responsibility | Connected files |
|---|---|---|
| \`data/portfolio-projects.ts\` | Canonical project descriptions, stacks, status, and verified optional URLs. | \`components/Solutions/SolutionsSection.tsx\` |
| \`components/Solutions/SolutionsSection.tsx\` | Reusable project grid; optional \`limit\` prop creates a homepage preview. | Homepage and Projects route |
| \`components/ContactForm.tsx\` | Validated client-side enquiry form that opens a prefilled email draft. It does not send email from a server. | \`app/contact/page.tsx\` |

## Verification

- Run \`pnpm lint\`, \`pnpm exec tsc --noEmit\`, and \`pnpm build\`.
- Verify the mobile menu, theme toggle, reduced-motion behavior, custom cursor on desktop, audio opt-in, contact form, and all route links.
- Do not invent blog URLs, project links, metrics, or claims. The current repository did not expose a published blog URL, so the blog page should use a truthful empty state until a real destination is supplied.


## SEO and AI discovery

| File | Responsibility | Connected files |
|---|---|---|
| `app/robots.ts` | Crawler rules and sitemap discovery for public routes. | `app/sitemap.ts` |
| `app/sitemap.ts` | Canonical public routes for search indexing. | `app/layout.tsx` |
| `public/llms.txt` | Concise site map for AI assistants; informational convention, not a guaranteed ranking signal. | Public routes and project data |
| `public/AI.md` | Short project and site facts for AI agents to reduce repeated repository exploration. | `data/portfolio-projects.ts`, app routes |
