"use client";

import { useEffect, useState } from "react";

const FULL = "Hi, I'm LeAnne.";
const SPEED_MS = 70;

export default function TypedHeading() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      const t = setTimeout(() => {
        setCount(FULL.length);
        setDone(true);
      }, 0);
      return () => clearTimeout(t);
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= FULL.length) {
        clearInterval(id);
        setDone(true);
      }
    }, SPEED_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="text-3xl text-text nr-glow sm:text-4xl">
      <span className="sr-only">{FULL}</span>
      <span aria-hidden="true">
        <span className="text-accent">&gt;</span> {FULL.slice(0, count)}
        <span className={`nr-cursor${done ? "" : " nr-cursor--solid"}`} />
      </span>
    </h1>
  );
}
