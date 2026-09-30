import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import BackgroundSlot from "@/components/BackgroundSlot";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Otávio Ventura | Estudante de ADS",
  description: "Portfólio de Otávio Ventura: desenvolvimento de software, programação e hardware.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){}` }} />
      </head>
      <body>
        <BackgroundSlot />
        {children}
      </body>
    </html>
  );
}
