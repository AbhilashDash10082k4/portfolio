"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

type AmbientNodes = {
  context: AudioContext;
  master: GainNode;
};

export function AmbientAudioToggle({ className = "" }: { className?: string }) {
  const [enabled, setEnabled] = React.useState(false);
  const audio = React.useRef<AmbientNodes | null>(null);

  React.useEffect(() => {
    return () => {
      const current = audio.current;
      if (current && current.context.state !== "closed") void current.context.close();
    };
  }, []);

  const toggleAudio = async () => {
    if (typeof window === "undefined" || !("AudioContext" in window)) return;

    if (!audio.current) {
      const context = new window.AudioContext();
      const master = context.createGain();
      master.gain.value = 0;
      master.connect(context.destination);

      const tones = [
        { frequency: 110, type: "sine" as OscillatorType, gain: 0.38 },
        { frequency: 164.81, type: "sine" as OscillatorType, gain: 0.22 },
        { frequency: 220, type: "triangle" as OscillatorType, gain: 0.07 },
      ];

      tones.forEach((tone) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = tone.type;
        oscillator.frequency.value = tone.frequency;
        gain.gain.value = tone.gain;
        oscillator.connect(gain);
        gain.connect(master);
        oscillator.start();
      });

      audio.current = { context, master };
    }

    const current = audio.current;
    await current.context.resume();
    const now = current.context.currentTime;
    current.master.gain.cancelScheduledValues(now);
    current.master.gain.setTargetAtTime(enabled ? 0 : 0.012, now, enabled ? 0.18 : 1.8);
    setEnabled((previous) => !previous);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={() => void toggleAudio()}
      aria-pressed={enabled}
      aria-label={enabled ? "Turn ambient sound off" : "Turn ambient sound on"}
      title={enabled ? "Ambient sound on — click to turn off" : "Ambient sound off — click to turn on"}
    >
      {enabled ? <Volume2 aria-hidden="true" className="size-4" /> : <VolumeX aria-hidden="true" className="size-4" />}
    </button>
  );
}
