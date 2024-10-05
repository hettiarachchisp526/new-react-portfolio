/* eslint-disable react/no-unescaped-entities */
import uiux from "../assets/ServicesIcons/uiux icon.png"
import frontend from "../assets/ServicesIcons/frontend icon.png"
import graphics from "../assets/ServicesIcons/graphich icon.png"

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from "../variants";


const Services = () => {
  return (
    <div id="features" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">

<motion.div 
variants={fadeIn("up", 0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}
className="flex flex-col items-center max-w-full ">

 <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">Services</h2>

    <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
    I bring ideas to life with clean and user-friendly UI/UX design, dynamic front-end development, and striking graphic design. Let's build something amazing together!


    </p>

</motion.div>

<div className="grid flex-row justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">

    <div className="relative p-2 overflow-hidden transition-all duration-500 bg-gray-400 border-none rounded-lg select-none hover:shadow-md hover:shadow-orange-400 backdrop-blur-md bg-opacity-10">
        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
        <img src={uiux} alt="Description of the image" className="w-12 h-12" /> 
            <div className="space-y-2">
                <h3 id="uiux" className="font-bold ">UI/UX Design</h3>
                <p className="text-sm text-gray-400 text-muted-foreground">Crafting intuitive and visually appealing interfaces that enhance user experience and engagement.</p>
            </div>
        </div>
    </div>

    <div
        className="relative p-2 overflow-hidden transition-all duration-500 bg-gray-400 border-none rounded-lg select-none hover:shadow-md hover:shadow-orange-400 backdrop-blur-md bg-opacity-10">
        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
        <img src={frontend} alt="Description of the image" className="w-12 h-12" /> 
            <div className="space-y-2">
                <h3 id="uiux" className="font-bold ">Front-End Development</h3>
                <p className="text-sm text-gray-400 text-muted-foreground">Bringing designs to life with clean, efficient, and responsive code that works seamlessly across devices.</p>
            </div>
        </div>
    </div>

    <div className="relative p-2 overflow-hidden transition-all duration-500 bg-gray-400 border-none rounded-lg select-none hover:shadow-md hover:shadow-orange-400 backdrop-blur-md bg-opacity-10">
        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
        <img src={graphics} alt="Description of the image" className="w-12 h-12" />
            <div className="space-y-2">
                <h3 id="uiux" className="font-bold ">Graphic Design</h3>
                <p className="text-sm text-gray-400 text-muted-foreground">Creating impactful visuals that communicate your brand's message and captivate your audience.</p>
            </div>
        </div>
    </div>



</div>


    </div>
  )
}

export default Services
