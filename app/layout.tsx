import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Desenvolvedor`,
  description:
    "Portfólio de Otávio Ventura: software, automação e tecnologia. Ferramentas, tecnologias e projetos.",
  openGraph: {
    title: `${SITE.name} — Desenvolvedor`,
    description: "Portfólio de Otávio Ventura: software, automação e tecnologia.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
