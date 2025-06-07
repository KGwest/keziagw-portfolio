import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="w-full p-4 flex justify-between items-center fixed top-0 bg-white dark:bg-gray-800 shadow z-50">
      <h1 className="text-xl font-bold">Kezia West</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-8 h-8 rounded-full border-2 border-gray-700 dark:border-white flex items-center justify-center"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
