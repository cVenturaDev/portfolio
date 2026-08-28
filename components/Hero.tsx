import { SITE } from "@/lib/data";
import TerminalLine from "./TerminalLine";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-8 pt-24 pb-16 relative"
    >
      <div className="max-w-content mx-auto w-full">
        <TerminalLine prompt="~/portfolio $" text="whoami" />

        <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-ink">
          {SITE.name}
        </h1>

        <p className="mt-4 max-w-xl text-base sm:text-lg text-muted">
          Escrevo código para automatizar o que puder e entender o que sobrar.
        </p>

        <p className="mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed text-muted/90">
          Sou um aspirante a desenvolvedor com interesse em desenvolvimento de software,
          automação e tecnologia.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-medium text-base transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(242,184,76,0.5)]"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-amber/60 hover:text-amber"
          >
            Entre em contato
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-faint hidden sm:block"
      >
        scroll ↓
      </div>
    </section>
  );
}
