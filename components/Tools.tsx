import { SiGit, SiGithub, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { TOOLS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, IconType> = {
  vscode: VscVscode,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
};

export default function Tools() {
  return (
    <section id="ferramentas" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="$ ls ~/ferramentas" title="Ferramentas" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool, i) => {
            const Icon = ICONS[tool.id];
            return (
              <Reveal key={tool.id} delay={i * 60}>
                <div className="group h-full rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-surface-hover">
                  <Icon className="w-7 h-7 text-muted transition-colors duration-300 group-hover:text-amber" aria-hidden />
                  <h3 className="mt-4 text-sm font-medium text-ink">{tool.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{tool.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
