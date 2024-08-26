/* eslint-disable react/prop-types */
import { useState } from "react";
import { Github, Figma, } from 'lucide-react';
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
        <section className="pt-0  lg:pt-8 lg:pb-[90px] dark:bg-dark">
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

            <div className="container mx-auto">
              <PortfolioCard
                category="Graphics Design"
                title="Ecommerce"
                year="2023"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity."
                imageSrc= {proj1}
                githubLink="#"
                figmaLink="#"
                BehanceLink="#"
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
                BehanceLink="#"
                showCard={showCard}
              />
              <PortfolioCard
                category="UiUx Design"
                title="Ecommerce Software"
                year="2023"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity."
                imageSrc={proj2}
                githubLink="#"
                figmaLink="#"
                BehanceLink="#"
                showCard={showCard}
              />
              {/* Add more PortfolioCard components as needed */}
            </div>
          </div>
        </section>
      </>
      <div className="text-center ">
                    <a href="#" className="font-medium text-center text-orange-500 hover:text-orange-700">See more
                        <span className="ml-2">&#8594;</span></a>
                </div>
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
  // paletteLink,
  BehanceLink
}) => {
  return (
    <div
      className={`w-full  ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center p-6 mb-12 rounded-lg shadow-lg bg-slate-400 backdrop-blur-md bg-opacity-5 md:flex-row md:items-start">
        {/* Text Section */}
        <div className="w-full h-auto text-left md:w-1/2">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-400">
            {year} - {category}
          </p>
          <p className="mt-4 text-sm text-gray-300 h-[]">{description}</p>
          </div>
          <div className="flex flex-wrap items-center mt-6 space-x-2">
  {githubLink && (
  <a
    href={githubLink}
    className="flex items-center justify-center p-2 text-xs text-white transition bg-gray-800 rounded-lg hover:bg-gray-700 sm:m-1 lg:p-3"
  >
    <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-4" />
    <span className="hidden md:block lg:ml-1">GitHub</span>
  </a>
)}

  {figmaLink && (
    <a
      href={figmaLink}
      className="flex items-center justify-center p-2 text-xs text-white transition bg-gray-800 rounded-lg hover:bg-gray-700 sm:m-1 lg:p-3 "
    >
      <Figma className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-4" />
      <span className="hidden md:block lg:ml-1">Figma</span>
    </a>
  )}
  {BehanceLink && (
    <a
      href={BehanceLink}
      className="flex items-center justify-center p-2 text-xs text-white transition bg-gray-800 rounded-lg hover:bg-gray-700 sm:m-1 lg:p-3"
    >
                  <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                </svg>
      <span className="hidden md:block lg:ml-1">Behance</span>
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
