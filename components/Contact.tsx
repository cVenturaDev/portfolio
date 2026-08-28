import { FiMail } from "react-icons/fi";
import { SITE } from "@/lib/data";
import CopyEmailButton from "./CopyEmailButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contato" className="px-6 sm:px-8 py-24 border-t border-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="$ ./contato.sh" title="Entre em contato" />
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-lg border border-border bg-surface p-8 max-w-xl">
            <p className="text-sm text-muted mb-5">
              O jeito mais direto de falar comigo é por e-mail.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 text-xs font-medium text-base transition-transform duration-200 hover:-translate-y-0.5"
              >
                <FiMail className="w-4 h-4" aria-hidden />
                {SITE.email}
              </a>
              <CopyEmailButton email={SITE.email} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
