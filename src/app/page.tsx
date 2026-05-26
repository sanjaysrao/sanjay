import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsCounter />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    </>
  );
}
