import React, { useState } from "react";
import IPAGuessCup from './IPAGuessCup';

const projects = [
  {
    id: 1,
    title: "G-U-E-S-S (Association Game)",
    description: "A React guessing game where you try to find the AI's secret word by association.",
    content: (
      <iframe
        src="https://kgwest.github.io/g-u-e-s-s/"
        title="G-U-E-S-S Association Game"
        className="w-full h-32 sm:h-72 md:h-96 rounded-lg border-0 bg-black"
        allow="fullscreen"
      />
    ),
    ariaLabel: "Project 1: G-U-E-S-S. Association guessing game with AI bot.",
  },
  {
    id: 2,
    title: "IPA Guess & Cup Toss",
    description: "Guess which IPA symbol links the words. Score for a chance to toss a ball in a cup!",
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
        className="w-full h-32 sm:h-72 md:h-96 rounded-lg border-0 bg-black"
        allow="fullscreen"
      />
    ),
    ariaLabel: "Project 3: Reward Generator. Gamified self-care reward interface.",
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
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16"
      aria-labelledby="projects-heading"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      {/* 📺 TV Wrapper */}
      <div
        role="region"
        aria-live="polite"
        aria-labelledby="active-project-title"
        className="w-[90vw] max-w-3xl bg-gray-900 dark:bg-gray-300 border-8 border-gray-800 dark:border-white rounded-2xl shadow-2xl p-4 mb-8 transition-all"
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            animate ? "rotate-y-180" : ""
          }`}
        >
          <h3
            id="active-project-title"
            className="text-2xl font-bold mb-2 text-white dark:text-black"
          >
            {activeProject.title}
          </h3>
          <p className="text-sm mb-4 text-gray-300 dark:text-gray-700">
            {activeProject.description}
          </p>
          <div className="text-xl font-semibold text-white dark:text-black h-32 flex items-center justify-center bg-black dark:bg-white rounded-lg">
            {activeProject.content}
          </div>
        </div>
      </div>

      {/* 💠 Diamonds for switching */}
      <div role="group" aria-label="Select a project" className="flex gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectChange(project)}
            aria-label={project.ariaLabel}
            className={`w-10 h-10 text-xl rounded-full transform transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-110 ${
              activeProject.id === project.id
                ? "bg-blue-800 text-white"
                : "bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
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
