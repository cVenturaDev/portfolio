import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Tools />
      <Technologies />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
