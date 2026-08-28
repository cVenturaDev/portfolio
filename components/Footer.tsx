import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-10 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-faint">© 2026 {SITE.name}</p>

        <div className="flex items-center gap-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted hover:text-amber transition-colors"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted hover:text-amber transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="text-muted hover:text-amber transition-colors"
          >
            <SiInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
