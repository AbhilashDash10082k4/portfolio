"use client";

import * as React from "react";
import { Disc3, ExternalLink, X } from "lucide-react";

/**
 * One-click Spotify soundtrack entry point. Spotify owns track playback and
 * account restrictions; browsers may still block audible autoplay. No music
 * files are copied into this repository.
 */
export function AmbientAudioToggle({ className = "" }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        className={className}
        onClick={() => {
          if (open) {
            setOpen(false);
            setPaused(true);
          } else {
            setOpen(true);
            setPaused(false);
          }
        }}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Close Ashke music player" : "Start Ashke soundtrack"}
        title={open ? "Close music player" : "Start Ashke by Karan Aujla"}
      >
        {open ? <X aria-hidden="true" className="size-4" /> : <Disc3 aria-hidden="true" className="size-4" />}
      </button>
      {open && (
        <div role="dialog" aria-label="Ashke music player" className="absolute right-0 top-[calc(100%+0.75rem)] z-[80] w-[min(88vw,22rem)] rounded-2xl border border-border bg-surface/95 p-3 shadow-2xl backdrop-blur-2xl">
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <div>
              <p className="text-sm font-extrabold">Ashke</p>
              <p className="text-xs text-muted">Karan Aujla · MXRCI</p>
            </div>
            <a href="https://open.spotify.com/embed/playlist/6uoQcJ0Tv9qMVF7t83jQYt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-accent-strong hover:underline">
              Spotify <ExternalLink aria-hidden="true" className="size-3" />
            </a>
          </div>
          <iframe
            title="Spotify playlist featuring Ashke by Karan Aujla and MXRCI"
            src="https://open.spotify.com/embed/playlist/6uoQcJ0Tv9qMVF7t83jQYt?utm_source=generator&theme=0&autoplay=1"
            width="100%"
            height="152"
            style={{ border: 0, borderRadius: 12 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <p className="mt-2 px-1 text-[11px] leading-5 text-muted">
            Playback continues while browsing this site. Spotify login, track availability, and browser autoplay rules may affect playback.
          </p>
        </div>
      )}
    </span>
  );
}
