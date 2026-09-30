"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }
  return (
    <button onClick={toggle} aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"} className="rounded-sm border border-ink/30 p-1.5 text-mute hover:text-signal">
      {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
