"use client";
import { useState } from "react";
import { pins } from "@/lib/site";

// Hero: o "encapsulamento" de um chip. Cada pino revela uma informação sobre mim.
export default function Pinout() {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-md border-2 border-ink bg-paper p-5 shadow-[6px_6px_0_0_rgb(var(--ink)/0.85)]">
      <ul role="tablist" aria-label="Sobre mim" className="space-y-1.5">
        {pins.map((p, i) => (
          <li key={p.name} role="presentation" className="pin-on" style={{ animationDelay: `${i * 90}ms` }}>
            <button
              role="tab"
              aria-selected={active === i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-3 rounded-sm px-2 py-1.5 text-left font-mono text-sm ${active === i ? "bg-ink text-paper" : "hover:bg-board"}`}
            >
              <span className={`h-1.5 w-6 shrink-0 ${active === i ? "bg-gold" : "bg-ink/40"}`} />
              <span className="w-24 shrink-0">{p.name}</span>
              <span className="truncate">{p.value}</span>
            </button>
          </li>
        ))}
      </ul>
      <p role="tabpanel" className="mt-4 border-t border-ink/20 pt-3 text-sm text-mute" aria-live="polite">
        {pins[active].desc}
      </p>
    </div>
  );
}
