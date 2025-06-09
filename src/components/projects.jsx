import React, { useState } from "react";
import IPAGuessCup from "./IPAGuessCup";

const projects = [
  {
    id: 1,
    title: "G-U-E-S-S (Association Game)",
    description:
      "A React guessing game where you try to find the AI's secret word by association.",
    content: (
      <iframe
        src="https://kgwest.github.io/g-u-e-s-s/"
        title="G-U-E-S-S Association Game"
        className="w-full h-[38rem] md:h-[48rem] rounded-2xl border-0 bg-black"
        allow="fullscreen"
      />
    ),
    ariaLabel: "Project 1: G-U-E-S-S. Association guessing game with AI bot.",
  },
  {
    id: 2,
    title: "IPA Cup Study",
    description:
      "Guess which IPA symbol links the words. If you’re right, take a shot at tossing a ball in the cup!",
    content: <IPAGuessCup />,
    ariaLabel: "Project 2: IPA guessing and cup toss mini-game.",
  },
  {
    id: 3,
    title: "Reward Generator",
    description: "A fun mental health app that awards surprise treats.",
    content: (
      <iframe
        src="https://kgwest.github.io/reward_generator/"
        title="Reward Generator"
        className="w-full h-[38rem] md:h-[48rem] rounded-2xl border-0 bg-black"
        allow="fullscreen"
      />
    ),
    ariaLabel:
      "Project 3: Reward Generator. Gamified self-care reward interface.",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [animate, setAnimate] = useState(false);

  const handleProjectChange = (project) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveProject(project);
      setAnimate(false);
    }, 300); // simulates a flicker/rotation transition
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-2 py-24 bg-neutral-950"
      aria-labelledby="projects-heading"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg tracking-widest">
        Projects
      </h2>

      {/* Project Card */}
      <div
        role="region"
        aria-live="polite"
        aria-labelledby="active-project-title"
        className="w-full max-w-3xl bg-neutral-900/95 border-8 border-neutral-800 rounded-3xl shadow-2xl mb-8 px-8 py-10 transition-all flex flex-col items-center"
      >
        <div
          className={`transition-transform duration-300 ease-in-out w-full`}
        >
          <h3
            id="active-project-title"
            className="text-2xl md:text-3xl font-bold mb-3 text-white"
          >
            {activeProject.title}
          </h3>
          <p className="text-base md:text-lg mb-6 text-neutral-300">
            {activeProject.description}
          </p>
          <div className="w-full flex justify-center items-center">
            {/* Give plenty of height for embedded iframes and local components */}
            <div className="w-full" style={{ minHeight: "600px", maxHeight: "900px" }}>
              {activeProject.content}
            </div>
          </div>
        </div>
      </div>

      {/* 💠 Project Switcher */}
      <div
        role="group"
        aria-label="Select a project"
        className="flex gap-6 mt-2"
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectChange(project)}
            aria-label={project.ariaLabel}
            className={`w-12 h-12 text-2xl rounded-full transform transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-110 ${
              activeProject.id === project.id
                ? "bg-blue-700 text-white shadow-xl scale-110"
                : "bg-neutral-700 text-white"
            }`}
          >
            💠
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
