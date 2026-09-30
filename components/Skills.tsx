import { Code2, Globe, Wrench, Cpu } from "lucide-react";
import { skillGroups } from "@/lib/site";
import Section from "./Section";

const icons = [Code2, Globe, Wrench, Cpu];

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[i];
          return (
            <div key={g.title}>
              <h3 className="mb-2 flex items-center gap-2 font-semibold"><Icon size={18} className="text-signal" aria-hidden />{g.title}</h3>
              <p className="text-mute">{g.items.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
