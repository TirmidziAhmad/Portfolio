import React from "react";

const project = [
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

function Project() {
  return (
    <>
      <h2 className="text-lg md:text-6xl mb-3 text-center">Personal Project</h2>
      <div className="flex flex-wrap gap-5">
        {project.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e201e] rounded-lg border border-[#85858526] p-5 w-full md:w-[30%]"
          >
            <h4 className="text-xl capitalize mb-2">{item.title}</h4>
            <p className="mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-transparent border border-[#85858526] p-2 hover:bg-[#333]"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
