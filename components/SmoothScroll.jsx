/**
 * Root scrolling wrapper.
 * Related files: app/layout.tsx wraps the site with this component; navigation
 * uses native anchors and CSS scroll-behavior from app/globals.css.
 * Native browser scrolling avoids a global animation loop and respects OS
 * reduced-motion settings without introducing a client-side provider.
 */
export default function SmoothScrolling({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
