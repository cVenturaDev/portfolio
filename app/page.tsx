import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Pinout from "@/components/Pinout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="topo" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="mb-3 font-mono text-sm text-signal">{site.role}</p>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">{site.name}</h1>
            <p className="mt-6 max-w-prose text-lg text-mute">{site.intro}</p>
            <a href="#projetos" className="mt-8 inline-block rounded-sm bg-signal px-5 py-2.5 font-semibold text-onsignal hover:bg-ink hover:text-board">Ver projetos</a>
          </div>
          <Pinout />
        </section>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-ink/15 py-6 text-center text-sm text-mute">© {new Date().getFullYear()} {site.name}</footer>
    </>
  );
}
