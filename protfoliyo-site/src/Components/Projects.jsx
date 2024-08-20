/* eslint-disable react/prop-types */
import { useState } from "react";
import { Github, Figma, Palette } from 'lucide-react';
import proj1 from "../assets/ProjectsIMG/project test 1.png"
import proj2 from "../assets/ProjectsIMG/project test 2.png"

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <div id="projects" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-full text-start">
        <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">Projects</h2>
        <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
          A collection of my work in software development, graphic design, and UI/UX design. Explore how I turn ideas into impactful digital solutions.
        </p>
      </div>

      <>
        <section className="pt-0 pb-12 lg:pt-8 lg:pb-[90px] dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center max-w-full">
              <div className="w-full">
                <ul className="flex flex-wrap justify-center mb-20 space-x-1 rounded-lg bg-slate-400 backdrop-blur-md bg-opacity-5">
                  <li className="mt-5 mb-5">
                    <button
                      onClick={() => handleProject("all")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "all"
                          ? "bg-gradient-to-r from-orange-500 to-red-800 text-white"
                          : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                      }`}
                    >
                      All Projects
                    </button>
                  </li>

                  <li className="mt-5 mb-5">
                    <button
                      onClick={() => handleProject("Software Development")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "Software Development"
                          ? "bg-gradient-to-r from-orange-500 to-red-800 text-white"
                          : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                      }`}
                    >
                      Software Development
                    </button>
                  </li>

                  <li className="mt-5 mb-5">
                    <button
                      onClick={() => handleProject("UiUx Design")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "UiUx Design"
                          ? "bg-gradient-to-r from-orange-500 to-red-800 text-white"
                          : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                      }`}
                    >
                      UI/UX Design
                    </button>
                  </li>

                  <li className="mt-5 mb-5">
                    <button
                      onClick={() => handleProject("Graphics Design")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "Graphics Design"
                          ? "bg-gradient-to-r from-orange-500 to-red-800 text-white"
                          : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                      }`}
                    >
                      Graphics Design
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container p-4 mx-auto">
              <PortfolioCard
                category="Graphics Design"
                title="Ecommerce"
                year="2023"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity."
                imageSrc= {proj1}
                githubLink="#"
                figmaLink="#"
                paletteLink="#"
                showCard={showCard}
              />
              <PortfolioCard
                category="Software Development"
                title="Ecommerce Software"
                year="2023"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity."
                imageSrc={proj2}
                githubLink="#"
                figmaLink="#"
                paletteLink="#"
                showCard={showCard}
              />
              {/* Add more PortfolioCard components as needed */}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Projects;

const PortfolioCard = ({
  showCard,
  category,
  title,
  year,
  description,
  imageSrc,
  githubLink,
  figmaLink,
  paletteLink
}) => {
  return (
    <div
      className={`w-full  ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center p-6 mb-12 rounded-lg shadow-lg bg-slate-400 backdrop-blur-md bg-opacity-5 md:flex-row md:items-start">
        {/* Text Section */}
        <div className="w-full text-left md:w-1/2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-400">
            {year} - {category}
          </p>
          <p className="mt-4 text-sm text-gray-300">{description}</p>
          <div className="flex items-center mt-6 space-x-4">
            {githubLink && (
              <a
                href={githubLink}
                className="flex items-center px-3 py-2 text-sm text-white transition bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                className="flex items-center px-3 py-2 text-sm text-white transition bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Figma className="w-4 h-4 mr-2" />
                Figma
              </a>
            )}
                        {paletteLink && (
              <a
                href={paletteLink}
                className="flex items-center px-3 py-2 text-sm text-white transition bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Palette className="w-4 h-4 mr-2" />
                Behance
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full mt-6 md:w-1/2 md:mt-0 md:ml-8">
          <img
            src={imageSrc}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
