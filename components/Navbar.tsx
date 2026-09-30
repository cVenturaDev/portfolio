"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [["Sobre", "#sobre"], ["Projetos", "#projetos"], ["Habilidades", "#habilidades"], ["Contato", "#contato"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-ink/15 bg-board/90 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#topo" className="font-bold tracking-tight">Otávio Ventura</a>
        <div className="flex items-center gap-4">
          <ul className="hidden gap-5 text-sm md:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="text-mute hover:text-signal">{label}</a></li>
            ))}
          </ul>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"} className="rounded-sm border border-ink/30 p-1.5 text-mute md:hidden">
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="menu-mobile" className="border-t border-ink/15 px-5 py-2 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-2 text-mute hover:text-signal">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
