import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black relative">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />

      <Footer />
    </div>
  );
}
