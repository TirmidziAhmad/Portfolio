"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rice Disease Detection",
    description:
      "An app to detect rice diseases using an expert system, built with Next.js and PostgreSQL as the database.",
    link: "https://chill-netflix-clone.vercel.app/",
  },
  {
    title: "Chill Netflix Clone",
    description:
      "A fullstack Netflix clone app built with React and Express, using Zustand for front-end state management.",
    link: "https://chill-netflix-clone.vercel.app/",
  },
  {
    title: "Si Paling Persegi",
    description:
      "An app to determine the area and perimeter of a square, built with HTML, CSS, and JavaScript.",
    link: "https://tirmidziahmad.github.io/SiPalingPersegi/",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 },
};

function Project() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Personal Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={hoverEffect}
            className="bg-gradient-to-br from-[#1e201e] to-[#2a2c2a] rounded-xl border border-[#85858526] p-6 flex flex-col h-full"
          >
            <h4 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h4>
            <p className="text-gray-300 mb-6 flex-grow">
              {project.description}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-600 px-5 py-2.5 text-white hover:shadow-lg transition-all duration-300"
            >
              <span>View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;
