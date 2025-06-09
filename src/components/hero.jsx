import React, { useEffect, useState } from 'react';

const titles = ['Developer.', 'Linguist.', 'Builder.'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // cycle every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4 animate-bounce-slow">Kezia West</h1>
      <p className="text-2xl font-medium transition-opacity duration-500 ease-in-out">
        {titles[index]}
      </p>
    </section>
  );
};

export default Hero;
