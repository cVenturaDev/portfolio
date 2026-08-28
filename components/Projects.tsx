import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projetos" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="$ ls ~/projetos" title="Projetos" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 70}>
              <article className="h-full rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber/40">
                <div
                  className="h-36 border-b border-dashed border-border flex items-center justify-center bg-base/60"
                  aria-hidden
                >
                  <span className="font-mono text-[11px] text-faint">
                    {project.placeholder ? "preview em breve" : "preview"}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-medium text-ink">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

                  {project.technologies.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border px-2.5 py-1 text-[11px] font-mono text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex items-center gap-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-amber transition-colors"
                      >
                        <SiGithub className="w-4 h-4" aria-hidden /> Código
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-faint">
                        <SiGithub className="w-4 h-4" aria-hidden /> Código em breve
                      </span>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-amber transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" aria-hidden /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
