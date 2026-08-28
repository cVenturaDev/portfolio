import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import { SOCIAL_LINKS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LINKS: { id: string; label: string; url: string; Icon: IconType }[] = [
  { id: "github", label: "GitHub", url: SOCIAL_LINKS.github, Icon: SiGithub },
  { id: "linkedin", label: "LinkedIn", url: SOCIAL_LINKS.linkedin, Icon: FaLinkedin },
  { id: "instagram", label: "Instagram", url: SOCIAL_LINKS.instagram, Icon: SiInstagram },
  { id: "youtube", label: "YouTube", url: SOCIAL_LINKS.youtube, Icon: FaYoutube },
];

export default function Social() {
  return (
    <section id="onde-me-encontrar" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="$ cat redes.json" title="Onde me encontrar" />
        </Reveal>

        <div className="flex flex-wrap gap-4">
          {LINKS.map(({ id, label, url, Icon }, i) => (
            <Reveal key={id} delay={i * 60}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/40 hover:bg-surface-hover"
              >
                <Icon className="w-5 h-5 text-muted transition-colors duration-200 group-hover:text-amber" aria-hidden />
                <span className="text-sm text-ink">{label}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
