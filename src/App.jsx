import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;