import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MotionSection from "./components/MotionSection";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">
        <MotionSection id="about" className="min-h-screen">
          <About />
        </MotionSection>
        <MotionSection id="projects" className="min-h-screen">
          <Projects />
        </MotionSection>
        <MotionSection id="contact">
          <Contact />
        </MotionSection>
      </main>
      <footer className="w-full text-center py-6 bg-neutral-950 text-white text-sm">
        © {new Date().getFullYear()} Kezia West
      </footer>
    </div>
  );
}

export default App;
