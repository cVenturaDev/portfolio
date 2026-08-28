import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="// sobre.md" title="Sobre mim" />
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-muted">
            Sou um aspirante a desenvolvedor e amante da tecnologia. Tenho interesse
            principalmente em desenvolvimento de software, automação de tarefas e
            tecnologia em geral. Python é uma das principais linguagens que utilizo
            atualmente, enquanto continuo expandindo meus conhecimentos em outras
            tecnologias e áreas do desenvolvimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
