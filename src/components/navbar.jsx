import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950/90 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-white font-extrabold text-xl tracking-widest">Kezia West</span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-white font-semibold text-base">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          <li>
            <a
              href="/resume.pdf"
              download
              className="group relative bg-blue-700 rounded px-3 py-1 ml-2 transition"
            >
              Resume
              <span className="absolute left-0 top-full w-full h-1 scale-x-0 group-hover:scale-x-100 bg-blue-400 transition-transform origin-left duration-300" />
            </a>
          </li>
        </ul>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-1 w-6 rounded-full bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 rounded-full bg-white my-1 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 rounded-full bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Nav */}
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 flex flex-col items-center gap-6 py-6 text-white font-semibold text-lg shadow-lg transition-all duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="bg-blue-700 hover:bg-blue-800 rounded px-3 py-1 ml-2 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
