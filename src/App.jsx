import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen font-sans">
      <Navbar />
      <main className="pt-20">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
