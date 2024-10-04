import tabimg from "../assets/tab.png"

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from "../variants";

const Education = () => {
    return (
      <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        
        className="flex flex-col items-center max-w-full">
          <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">
            Education
          </h2>
  
          {/* <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
           A snapshot of my journey, marked by passion, creativity, and impactful projects.
          </p> */}
        </motion.div>
  
        <div className="flex flex-col max-w-full lg:flex-row">
          {/* Content Section */}
          <div className="lg:w-2/3">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2021 - Mar 2025
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  BSC (Hons) Software Engineering
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  NSBM Green University, Sri Lanka.  (CGPA: 3.35)
                </p>
                {/* <a href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
              more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg></a> */}
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Dec 2017 - Dec 2019
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  GCE Advanced Level (Maths)
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  B/Dharmadutha College, Badulla. (Index: 665545)
                </p>
              </li>
            </ol>
  
            {/* <p className="mt-5">This timeline component is part of a larger, open-source library of Tailwind CSS components. Learn more
          by going to the official <a className="text-blue-600 hover:underline"
              href="#" target="_blank">Flowbite Documentation</a>.
          </p> */}
          </div>
  
          {/* Image Section, visible only on large screens */}
          <div className="hidden lg:block lg:w-2/3 lg:pl-8">
            <img
              src={tabimg}
              alt="Education Illustration"
              className="object-cover h-60 rounded-lg shadow-md  w-[480px]"
            />
          </div>
        </div>
  
     
      </div>
    );
  };
  
  export default Education;
  