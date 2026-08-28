import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiHtml5,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import {FaJava, FaCss3Alt} from "react-icons/fa";
import type { IconType } from "react-icons";
import { TECH_CATEGORIES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  "Next.js": SiNextdotjs,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Linux: SiLinux,
};

export default function Technologies() {
  return (
    <section id="tecnologias" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="// tecnologias.ts" title="Tecnologias" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {TECH_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={i * 70}>
              <div className="h-full rounded-lg border border-border bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-teal mb-4">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => {
                    const Icon = ICONS[item];
                    return (
                      <li key={item}>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-base px-3 py-1.5 text-xs text-ink transition-colors duration-200 hover:border-amber/40">
                          {Icon ? <Icon className="w-3.5 h-3.5 text-muted" aria-hidden /> : null}
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
