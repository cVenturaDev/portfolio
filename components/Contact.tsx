import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import Section from "./Section";

export default function Contact() {
  const { email, github, linkedin } = site.contact;
  const items = [
    { label: "E-mail", href: `mailto:${email}`, Icon: Mail },
    { label: "GitHub", href: github, Icon: Github },
    { label: "LinkedIn", href: linkedin, Icon: Linkedin },
  ];
  return (
    <Section id="contato" title="Contato">
      <p className="mb-6 max-w-prose text-mute">Quer conversar sobre estágio, projeto ou tecnologia? Escreva para mim por qualquer canal abaixo.</p>
      <div className="flex flex-wrap gap-3">
        {items.map(({ label, href, Icon }) => (
          <a key={label} href={href} className="flex items-center gap-2 rounded-sm border-2 border-ink bg-paper px-4 py-2 font-medium hover:bg-ink hover:text-paper">
            <Icon size={18} aria-hidden /> {label}
          </a>
        ))}
      </div>
    </Section>
  );
}
