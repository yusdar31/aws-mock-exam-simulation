import { useEffect, useRef, useState } from "react";

const key = "exam-quiz-sound";

export function useQuizSound(
  round: string,
  remaining: number | null,
  active: boolean,
) {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(key) === "on";
    } catch {
      return false;
    }
  });
  const audio = useRef<AudioContext | null>(null);
  const played = useRef({ round, seconds: new Set<number>() });
  const previous = useRef<{
    round: string;
    remaining: number | null;
    active: boolean;
  }>({
    round,
    remaining,
    active,
  });
  const unlock = () => {
    try {
      if (!audio.current || audio.current.state === "closed")
        audio.current = new AudioContext();
      void audio.current.resume().catch(() => {});
    } catch {
      /* Audio is optional; the visible timer always remains available. */
    }
  };
  useEffect(() => {
    if (!enabled) return;
    document.addEventListener("pointerdown", unlock);
    document.addEventListener("keydown", unlock);
    return () => {
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, [enabled]);
  useEffect(
    () => () => {
      void audio.current?.close().catch(() => {});
    },
    [],
  );
  useEffect(() => {
    const prior = previous.current;
    previous.current = { round, remaining, active };
    if (played.current.round !== round)
      played.current = { round, seconds: new Set<number>() };
    const countdown =
      active && remaining !== null && remaining > 0 && remaining <= 5;
    const expired =
      prior.active &&
      remaining === 0 &&
      prior.remaining !== null &&
      prior.remaining > 0;
    if (
      !enabled ||
      prior.round !== round ||
      prior.remaining === remaining ||
      remaining === null ||
      played.current.seconds.has(remaining) ||
      (!countdown && !expired)
    )
      return;
    const context = audio.current;
    if (!context || context.state !== "running") return;
    played.current.seconds.add(remaining);
    // One tick per final second, followed by a distinct three-note expiry cue.
    (countdown ? [880] : [660, 550, 440]).forEach((frequency, i) => {
      const start = context.currentTime + i * 0.18;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.16);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
      oscillator.start(start);
      oscillator.stop(start + 0.18);
    });
  }, [round, remaining, active, enabled]);
  return {
    enabled,
    toggle: () => {
      if (!enabled) unlock();
      setEnabled(!enabled);
      try {
        localStorage.setItem(key, enabled ? "off" : "on");
      } catch {
        /* Optional preference. */
      }
    },
  };
}
