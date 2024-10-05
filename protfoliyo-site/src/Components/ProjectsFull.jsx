/* eslint-disable react/prop-types */
import { useState } from "react";
import { Github, Figma, } from 'lucide-react';
import Portfolio from "../assets/ProjectyIMGs/Portfolio.png"
import Prodigy from "../assets/ProjectyIMGs/Prodigy.png"
import Flayers from "../assets/ProjectyIMGs/Flayers.png"
import Autoflash from "../assets/ProjectyIMGs/Autoflash.png"
import IeeeDay from "../assets/ProjectyIMGs/Characters.png"
import Flight from "../assets/ProjectyIMGs/Flight.png"
import Govisaviya from "../assets/ProjectyIMGs/Govi.png"
import Hackovate from "../assets/ProjectyIMGs/hacktonight.png"
import ICTIR from "../assets/ProjectyIMGs/Ictir.png"
import Inventory from "../assets/ProjectyIMGs/Inventory.png"
import Mascot from "../assets/ProjectyIMGs/Mascot.png"
import Logo from "../assets/ProjectyIMGs/minimal.png"
import Skillup from "../assets/ProjectyIMGs/Skillup.png"
import SmartHome from "../assets/ProjectyIMGs/Smarthome.png"
import Vector from "../assets/ProjectyIMGs/Vector.png"
import VR from "../assets/ProjectyIMGs/Vr.png"
import XYgen from "../assets/ProjectyIMGs/Xygen.png"


const ProjectsFull = () => {  
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
                  category="Software Development"
                  title="My Portfolio Site"
                  year="2024"
                  description="I designed and developed a personal portfolio to showcase my skills, services, and experiences. Using Vite, React, and TailwindCSS, I created a fast, responsive, and visually appealing site that reflects my expertise in modern web development."
                  description2="The minimalist design and intuitive UI ensure seamless navigation, making it easy for visitors to explore my professional journey and the projects I've completed. This project demonstrates my ability to blend creativity with technical skill, resulting in a polished and effective online presence."
                  imageSrc= {Portfolio}
                  githubLink="https://github.com/hettiarachchisp526/new-react-portfolio.git"
                  // figmaLink="#"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Graphics Design"
                  title="Flyer Designs"
                  year="2023"
                  description="Under my brand, Dominate Graphics, I designed custom flyers tailored to meet client needs. Utilizing a range of tools including Photoshop, Illustrator, Canva, and Lightroom, I delivered visually compelling designs that effectively communicated brand messages and captured target audiences. Each project was approached with a focus on creativity, precision, and alignment with the client's vision, ensuring standout results in the competitive world of graphic design."
                  imageSrc={Flayers}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/209451005/Flyer-Designs"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="Prodigy Website"
                  year="2024"
                  description="For the Prodigy initiative, I crafted a website design that embodies its mission to drive positive transformation across key areas like Youth Development, Entrepreneurship, and Sustainable Development. Using Figma, I developed a user-friendly and visually engaging interface that reflects Prodigy's commitment to empowering the youth and fostering community growth. The design is both modern and intuitive, ensuring that visitors can easily navigate and connect with Prodigy's core objectives and resources."
                  imageSrc={Prodigy}
                  // githubLink="#"
                  figmaLink="https://www.figma.com/proto/A0nnOGYnlY65Dh2PL1ZC7Q/Prodigy?node-id=26-12217&node-type=canvas&t=hHxAFlSRW1Z6ziBk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A12217&show-proto-sidebar=1"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                  <PortfolioCard
                  category="Software Development"
                  title="Services Center Management System"
                  year="2023"
                  description="As part of a group assignment at university, I contributed to developing a comprehensive Services Center Management System using .NET Core, C#, and MySQL. The system integrates key functionalities such as bill generation, appointment scheduling, inventory management, and employee management, providing an all-in-one solution for managing service center operations.
                               This project highlights my teamwork and collaboration skills, as well as my ability to develop scalable, efficient software that enhances business processes."
                  imageSrc={Autoflash}
                  githubLink="https://github.com/hettiarachchisp526/AUTO-FLASH-Service-Center-ADBMS-.git"
                  // figmaLink="#"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Graphics Design"
                  title="Character Design"
                  year="2022"
                  description="I designed a character for the IEEE Day 2022 event, organized by the NSBM IEEE Student Branch. Using Adobe Photoshop and Illustrator, I crafted a visually appealing and event-themed character to represent the spirit of innovation and technology.
                             This project reflects my creativity and proficiency in graphic design tools, as well as my ability to contribute to event branding through impactful visuals."
                  imageSrc={IeeeDay}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/159648667/Character-Design"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Software Development"
                  title="Flight Management System"
                  year="2022"
                  description="As part of a 2nd-year university project, I developed a Flight Management System using HTML, CSS, JavaScript, Bootstrap, and Java. The system incorporates essential functionalities such as ticket booking, flight scheduling, timetable management, and flight details tracking, providing a comprehensive solution for flight operations.
                              This project showcases my ability to develop functional and user-friendly web applications, integrating front-end technologies with Java for streamlined flight management processes."
                  imageSrc={Flight}
                  githubLink="https://github.com/hettiarachchisp526/DEA-Project.git"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/159612331/Phoenix-Airline-web-application"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="Mobile App UI/UX Case Study"
                  year="2023"
                  description="I designed a mobile app UI/UX case study focused on empowering Sri Lankan farmers. Using Figma, Illustrator, Draw.io, and Google Forms, I created over 40 screens to facilitate a seamless user experience. The app enables farmers to sell their by-products, receive consultancy services, and access news related to agriculture."
                  description2=""
                  imageSrc= {Govisaviya}
                  // githubLink="#"
                  figmaLink="https://www.figma.com/proto/hvVXDLwzClDKIOS5Cx0L3L/GoviSaviya-Mobile-Application?node-id=2-765&node-type=frame&t=LKE6L6GMDqYa63LD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A765"
                  BehanceLink="https://www.behance.net/gallery/175091547/Govi-Saviya-Agriculture-UIUX-Case-Study-Mobile-App"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="Event Website UI Design"
                  year="2023"
                  description="I designed the UI for an event website using Figma, specifically for the Hackathon Challenge organized by the NSBM FOSS Community in conjunction with Hacktoberfest. The website provides a platform for sharing guidelines, event timelines, and participant registration."
                  description2="This project demonstrates my ability to create user-friendly, visually engaging interfaces for event management, ensuring a smooth experience for participants and organizers."
                  imageSrc= {Hackovate}
                  // githubLink="#"
                  figmaLink="https://www.figma.com/proto/sQeMCqU38DkHgx8QGN6GQ2/HACKOVATE?node-id=1-2&node-type=frame&t=4V2RUzhUwOUjwQES-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                  BehanceLink="https://www.behance.net/gallery/187675331/Event-Website-UI-Design"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="Conference Website UI Design"
                  year="2022"
                  description="I designed the UI for a conference website using Figma for an event organized by NSBM IEEE in 2022. The website includes all the necessary information about the conference, including speaker profiles, event dates, timelines, and participant registration."
                  description2="This project highlights my ability to design intuitive and professional event websites, ensuring that users can easily access important conference details and register smoothly."
                  imageSrc= {ICTIR}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/187694013/Conference-Website-UI-Design"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Software Development"
                  title="Inventory Management System"
                  year="2024"
                  description="As part of my 4th-year DEA project, I developed an Inventory Management System using React for the front end, Spring Boot for the back end, and Figma for the UI design. The system includes comprehensive features such as user management, item requests, returns, bookings, and supplier purchase functionalities, providing an all-in-one solution for managing inventory efficiently."
                  description2="This project showcases my expertise in full-stack development, combining UI/UX design with robust functionality to streamline inventory processes and enhance user experience."
                  imageSrc= {Inventory}
                  githubLink="https://github.com/Amanthakeshan2000/Inventory_Management_System.git"
                  figmaLink="https://www.figma.com/design/JxocYYJpTyfqZcR7IQEV2Y/Inventory-Management-System?node-id=0-1&t=mDHlYkGlsOyeujEM-1"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Graphics Design"
                  title="Mascot Logos"
                  year="2020"
                  description="I designed a series of mascot logos using Adobe Illustrator, aimed at creating a portfolio for my Fiverr account and fulfilling the needs of local clients. Each logo was tailored to reflect the unique branding requirements of the clients, combining creativity and precision in character design."
                  description2="This project demonstrates my ability to create engaging and visually distinctive mascot logos that align with the branding strategies of diverse clients."
                  imageSrc= {Mascot}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/158883775/Logo-designs-Vector-arts"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Graphics Design"
                  title="Minimalist Logo Design"
                  year="2020"
                  description="I designed minimalist logos using Adobe Illustrator for my Fiverr account and client orders from my own business, Dominate Graphics. These logos focus on simplicity and elegance, aligning with modern branding trends to meet the needs of diverse clients."
                  description2="This project showcases my ability to create clean, impactful logo designs that effectively communicate a brand’s identity with minimal elements."
                  imageSrc= {Logo}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/158883775/Logo-designs-Vector-arts"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Software Development"
                  title="Skill Improvement Mobile App"
                  year="2023"
                  description="As part of a 3rd-year university project, I developed a Skill Improvement Mobile App using Flutter and Firebase. The app allows students to enhance their skills by enrolling in online courses, earning certificates, and participating in a ranking system. Talented students can also earn badges as a recognition of their achievements."
                  description2="This project highlights my proficiency in mobile app development, showcasing my ability to create feature-rich, user-friendly applications that promote learning and skill development."
                  imageSrc= {Skillup}
                  githubLink="https://github.com/hettiarachchisp526/skillup-flutter-app-nsbm.git"
                  figmaLink="https://www.figma.com/proto/xRRSReVge8hDBWW3nZO435/SkilUP?node-id=991-7071&node-type=frame&t=oQKeKqCq2yWcNtPu-1&scaling=scale-down&content-scaling=fixed&page-id=629%3A1915&starting-point-node-id=991%3A4381"
                  BehanceLink="https://www.behance.net/gallery/181154459/UIUX-Case-Study-Skill-Improvement-App"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="SMARTSYNC Mobile App"
                  year="2023"
                  description="I designed and developed the SMARTSYNC mobile app, a smart home device control application. The app enables users to control various smart home devices and monitor power usage. The intuitive UI/UX design ensures easy navigation and efficient device management."
                  description2="This project demonstrates my ability to combine functional app development with user-centered design, offering a seamless experience for managing smart home technology."
                  imageSrc= {SmartHome}
                  // githubLink="#"
                  figmaLink="https://www.figma.com/design/tqUofdmNqbEpWR4bOaiSIg/SMARTSYNC-UI-Project-(Copy)?node-id=0-1&t=0JnNr4xZVsXXpCQh-1"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="Graphics Design"
                  title="Vector Portrait Art"
                  year="2022"
                  description="I created custom vector portrait art using Adobe Illustrator, designed specifically for client needs through Dominate Graphics. The artwork was tailored to capture the unique features and essence of each client, providing them with personalized and visually striking portraits."
                  description2="This project highlights my ability to translate personal imagery into high-quality vector art, ensuring that the final product aligns with the client’s vision and branding."
                  imageSrc= {Vector}
                  // githubLink="#"
                  // figmaLink="#"
                  // BehanceLink="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="VR UI Design"
                  year="2023"
                  description="I designed a user interface for a VR-based application using Figma as part of a Designathon competition. The UI allows students to engage in virtual learning environments, simulating real-life lab experiences for studying and conducting practicals. The platform also includes functionality for selecting the top 10 teams in the competition."
                  description2="This project showcases my ability to design immersive and interactive UI solutions that leverage VR technology to enhance the educational experience."
                  imageSrc= {VR}
                  // githubLink="#"
                  // figmaLink="#"
                  BehanceLink="https://www.behance.net/gallery/183204305/E-LEARNING-APP-VR-UI-DESIGN"
                  showCard={showCard}
                />
                <PortfolioCard
                  category="UiUx Design"
                  title="Store Web UI Design"
                  year="2024"
                  description="I designed the UI/UX for an electronic store website using Figma. The design incorporates all essential functionalities, including product listings, shopping cart, checkout process, user authentication, and product filtering options, ensuring a seamless shopping experience for users."
                  description2="This project demonstrates my ability to create functional and visually appealing e-commerce interfaces that prioritize user experience and ease of navigation."
                  imageSrc= {XYgen}
                  // githubLink="#"
                  figmaLink="https://www.figma.com/design/Yw0eADkuGSaJ4CoV4B7CoD/XYGen.ai---UI%2FUX-Engineer-Assignment?node-id=0-1&t=q9bhJJRkZyHDMU0t-1"
                  // BehanceLink="#"
                  showCard={showCard}
                />




                {/* Add more PortfolioCard components as needed */}
              </div>
            </div>
          </section>
        </>
        {/* <div className="text-center ">
                      <a href="#" className="font-medium text-center text-orange-500 hover:text-orange-700">See more
                          <span className="ml-2">&#8594;</span></a>
                  </div> */}
      </div>
    );
  };
  
  export default ProjectsFull;
  
  const PortfolioCard = ({
    showCard,
    category,
    title,
    year,
    description,
    description2,
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
            <p className="mt-4 text-sm text-gray-300 h-[]">{description2}</p>
            </div>
            <div className="flex flex-wrap items-center mt-6 space-x-2">
    {githubLink && (
    <a
      href={githubLink}
      className="flex items-center justify-center p-2 text-xs text-white transition bg-black border border-white rounded-lg hover:bg-gray-800 sm:m-1 lg:p-3 border-opacity-45"
    >
      <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-4" />
      <span className="hidden md:block lg:ml-1">GitHub</span>
    </a>
  )}
  
    {figmaLink && (
      <a
        href={figmaLink}
        className="flex items-center justify-center p-2 text-xs text-white transition bg-black border border-white rounded-lg hover:bg-gray-800 sm:m-1 lg:p-3 border-opacity-45"
      >
        <Figma className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-4" />
        <span className="hidden md:block lg:ml-1">Figma</span>
      </a>
    )}
    {BehanceLink && (
      <a
        href={BehanceLink}
        className="flex items-center justify-center p-2 text-xs text-white transition bg-black border border-white rounded-lg hover:bg-gray-800 sm:m-1 lg:p-3 border-opacity-45"
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