/**
 * Decorative, non-interactive aurora, fine grid, and particles.
 * Motion is CSS-only so the effect stays lightweight and does not affect input.
 */
export function StudioBackground() {
  return (
    <div className="studio-background" aria-hidden="true">
      <div className="studio-aurora studio-aurora-one" />
      <div className="studio-aurora studio-aurora-two" />
      <div className="studio-aurora studio-aurora-three" />
      <div className="studio-grid" />
      <div className="studio-particles">
        {Array.from({ length: 12 }, (_, index) => <span key={index} className="studio-particle" />)}
      </div>
    </div>
  );
}
