import { about } from "@/lib/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-prose space-y-4 text-lg text-mute">
          {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="space-y-4 border-l border-ink/20 pl-6">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-sm text-signal">{f.label}</dt>
              <dd className="font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
