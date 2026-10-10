import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="root">
      <Background />
      <Dock />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
