
import ExAimcreation from './ExAimcreation'
import ExCeyentra from './ExCeyentra'
import ExParabyte from './ExParabyte'
import ExSynergenicx from './ExSynergenicx'

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from "../variants";


const Experience = () => {
  return (
    <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}
    
    className="flex flex-col items-center max-w-full ">

         <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">Experience</h2>

         <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
         A snapshot of my journey, marked by passion, creativity, and impactful projects.
        </p>
    </motion.div>

    

        {/* experiance section - synergenicx------------------------------------------------------- */}
        <ExSynergenicx/>

        {/* experiance section - Parabyte------------------------------------------------------- */}

         <ExParabyte/>
    

        {/* experiance section - Ceyentra tech------------------------------------------------------- */}
         
         <ExCeyentra/>

        {/* experiance section - Aim creation------------------------------------------------------- */}
        <ExAimcreation/>


  
    </div>
  )
}

export default Experience
