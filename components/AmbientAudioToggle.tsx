"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Background audio player for Ashke.
 * Autoplays on page load at low volume (with fallback for browser interaction policies).
 * Provides one-click stop and resume control in the navigation.
 */
export function AmbientAudioToggle({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const audio = new Audio("/Ashke.mp3");
    audio.loop = true;
    audio.volume = 0.2; // Low background volume
    audioRef.current = audio;

    const playAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was prevented by browser policy; start on first interaction
          const onFirstInteraction = () => {
            audio
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
            window.removeEventListener("pointerdown", onFirstInteraction);
            window.removeEventListener("keydown", onFirstInteraction);
          };
          window.addEventListener("pointerdown", onFirstInteraction, { once: true });
          window.addEventListener("keydown", onFirstInteraction, { once: true });
        });
    };

    playAudio();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <button
      type="button"
      className={`${className} ambient-audio-toggle`}
      data-cursor={isPlaying ? "MUTE" : "PLAY"}
      onClick={toggleAudio}
      aria-label={isPlaying ? "Stop Ashke audio" : "Resume Ashke audio"}
      title={isPlaying ? "Stop Ashke (Karan Aujla)" : "Play Ashke (Karan Aujla)"}
    >
      {isPlaying ? (
        <Volume2 aria-hidden="true" className="size-4 text-accent-strong" />
      ) : (
        <VolumeX aria-hidden="true" className="size-4 text-muted" />
      )}
    </button>
  );
}
