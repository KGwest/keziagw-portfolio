import React from "react";

// If you place the GIF in public/ use "/backyard_night sky.gif"
// Otherwise adjust the path to your asset location.
const STAR_GIF = "/backyard_night sky.gif";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-[600px] flex flex-col items-center justify-center px-6 py-20"
      style={{
        background: `url('${STAR_GIF}') center center / cover no-repeat`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
          About Me
        </h2>

        <p className="mb-5 text-lg text-justify leading-relaxed drop-shadow">
          Hi, I'm Kezia—a linguistics senior at UTA and a tech-driven builder with a passion for bridging communication gaps. My work blends immersive learning, language tech, and inclusive design. From developing AI language tools to rolling out ERP systems for schools and nonprofits, my focus is making language more accessible and human for everyone.
        </p>
        <p className="text-lg text-justify leading-relaxed drop-shadow">
          I’m bilingual (English/Spanish), have experience with Chinese and Korean, and thrive on projects that sit at the intersection of language, technology, and education. Whether I’m designing AI-powered web apps, translating for my community, or researching the quirks of human language, I’m all about building tools that create connection and expand opportunities.
        </p>
      </div>
    </section>
  );
}

export default About;
