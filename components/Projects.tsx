import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="divide-y divide-ink/20 border-y border-ink/20">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="group grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="flex items-center gap-1.5 text-lg font-semibold group-hover:text-signal">
                {p.title} <ArrowUpRight size={18} aria-hidden />
              </h3>
              <p className="mt-1 max-w-prose text-mute">{p.desc}</p>
            </div>
            <ul className="flex flex-wrap gap-2 font-mono text-xs">
              {p.stack.map((s) => <li key={s} className="rounded-sm border border-ink/40 px-2 py-0.5">{s}</li>)}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
