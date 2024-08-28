/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from "react";
import Meimg from "../assets/myimage.png";

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
        <div className="max-w-lg">
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">About Me</h2>
          <p className="max-w-4xl p-2 mt-4 text-sm text-center bg-gray-600 border-none rounded-lg select-none sm:rounded-md lg:rounded-lg sm:max-w-full text-neutral-400 sm:text-base lg:text-start md:text-start hover:shadow-md backdrop-blur-md bg-opacity-10 lg:p-5">
            As a 4th-year Software Engineering undergraduate with over 4 years of experience in digital product design, I'm dedicated to crafting engaging and functional solutions that resonate with users.
            {(!isMobile || showFullText) && (
              <>
                {" "}
                My expertise in UI/UX engineering, project management, and web development enables me to take a holistic approach to every project. By emphasizing user research and usability, I ensure that each design not only looks visually appealing but also provides an exceptional user experience. Whether I'm working on web development or managing a project, my goal is to create digital products that are both innovative and intuitive.
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
        {/* ambition card */}
         

{/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg className="mb-3 text-gray-500 w-7 h-7 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:underline">
        See our guideline
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div> */}




        <div className="mt-12 md:mt-0">
          <img src={Meimg} alt="About Me" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
