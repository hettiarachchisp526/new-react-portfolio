/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from "react";
import Meimg from "../assets/myimage.png";

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from "../variants";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the current screen is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust as per your breakpoint
    };

    // Check on initial render and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div
        

        className="max-w-lg">
          <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} 
          className="mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">About Me</motion.h2>
          <p className="max-w-4xl p-2 mt-4 text-sm text-center bg-gray-600 border-none rounded-lg select-none sm:rounded-md lg:rounded-lg sm:max-w-full text-neutral-400 sm:text-base lg:text-start md:text-start hover:shadow-md backdrop-blur-md bg-opacity-10 lg:p-5">
            As a 4th-year Software Engineering undergraduate with over 4 years of experience in digital product design, I'm dedicated to crafting engaging and functional solutions that resonate with users.
            {(!isMobile || showFullText) && (
              <>
                {" "}
                <br/><br/>My expertise in UI/UX engineering, project management, and web development enables me to take a holistic approach to every project. By emphasizing user research and usability, I ensure that each design not only looks visually appealing but also provides an exceptional user experience. Whether I'm working on web development or managing a project, my goal is to create digital products that are both innovative and intuitive.
              </>
            )}
          </p>
          {isMobile && (
            <div className="mt-8 text-center">
              <button
                onClick={toggleText}
                className="font-medium text-center text-orange-500 hover:text-orange-700"
              >
                {showFullText ? "Show less" : "Learn more about Me"}
                <span className="ml-2">&#8594;</span>
              </button>
            </div>
          )}
        </div>




        <div className="mt-12 md:mt-0">
          <img src={Meimg} alt="About Me" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
