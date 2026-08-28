"use client";

import { useEffect, useState } from "react";

type TerminalLineProps = {
  prompt: string;
  text: string;
};

export default function TerminalLine({ prompt, text }: TerminalLineProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setShown(text);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="font-mono text-sm text-teal">
      <span className="text-faint">{prompt} </span>
      {shown}
      <span className={`inline-block w-[7px] h-[14px] bg-teal/70 ml-0.5 align-middle ${done ? "animate-blink" : ""}`} />
    </p>
  );
}
