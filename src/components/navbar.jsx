import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.getElementById("body");

    if (darkMode) {
      html.classList.add("dark");
      body.classList.remove("light");
      body.classList.add("dark");
      body.classList.replace("bg-white", "bg-black");
      body.classList.replace("text-black", "text-white");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
      body.classList.add("light");
      body.classList.replace("bg-black", "bg-white");
      body.classList.replace("text-white", "text-black");
    }
  }, [darkMode]);

  return (
    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-50 bg-transparent px-4">
      <h1 className="text-2xl font-semibold tracking-wide">Kezia West</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full text-xl"
        aria-label="Toggle Theme"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Navbar;
