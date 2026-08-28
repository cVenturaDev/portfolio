"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard indisponível — o e-mail continua visível e selecionável na tela.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-xs font-medium text-ink transition-colors duration-200 hover:border-amber/50 hover:text-amber"
      aria-live="polite"
    >
      {copied ? <FiCheck className="w-4 h-4" aria-hidden /> : <FiCopy className="w-4 h-4" aria-hidden />}
      {copied ? "E-mail copiado" : "Copiar e-mail"}
    </button>
  );
}
