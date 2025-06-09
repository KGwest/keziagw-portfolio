import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Lalalia (NLP Song App)',
    description: 'Detects singing input and plays instrumental versions.',
    content: '🎤 [Lalalia Preview Screen]',
    ariaLabel: 'Project 1: Lalalia. An app that plays music based on voice input.',
  },
  {
    id: 2,
    title: 'PhonoTrack (Speech Classifier)',
    description: 'Naive Bayes vs Neural Net for messy language sets.',
    content: '🧠 [PhonoTrack ML Demo]',
    ariaLabel: 'Project 2: PhonoTrack. Speech classifier with machine learning.',
  },
  {
    id: 3,
    title: 'Reward Generator',
    description: 'A fun mental health app that awards surprise treats.',
    content: '🎁 [Mental Health Reward Tool]',
    ariaLabel: 'Project 3: Reward Generator. Gamified self-care reward interface.',
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
      <h2
        id="projects-heading"
        className="text-4xl font-bold mb-8 text-black dark:text-white"
      >
        Projects
      </h2>

      {/* 📺 TV Wrapper */}
      <div
        role="region"
        aria-live="polite"
        aria-labelledby="active-project-title"
        className="w-[90vw] max-w-3xl bg-gray-900 dark:bg-gray-300 border-8 border-gray-800 dark:border-white rounded-2xl shadow-2xl p-4 mb-8 transition-all"
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            animate ? 'rotate-y-180' : ''
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
      <div
        role="group"
        aria-label="Select a project"
        className="flex gap-4"
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectChange(project)}
            aria-label={project.ariaLabel}
            className={`w-10 h-10 text-xl rounded-full transform transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-110 ${
              activeProject.id === project.id
                ? 'bg-blue-800 text-white'
                : 'bg-gray-300 dark:bg-gray-600 text-black dark:text-white'
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
