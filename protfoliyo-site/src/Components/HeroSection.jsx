/* eslint-disable react/no-unescaped-entities */
import { Download } from "lucide-react";


const HeroSection = () => {
  return (

<div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl font-semibold tracking-wide text-center sm:text-6xl lg:text-7xl">
      Hi, I'm Subodha Hettiarachchi
        {/* <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
          {" "}
          Subodha Hettiarachchi
        </span> */}
      </h1>
      
      <div className="flex justify-center">
         <div className="flex justify-center px-5 py-10">
         <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text lg:text-3xl">
          {" "}
          UI/UX Engineer
        </span> 
         </div>
      </div>  

      <p className="max-w-4xl text-base text-center text-neutral-500 sm:text-xl">
      I'm a passionate Software Engineering undergraduate with a strong focus on UI/UX design and front-end development.  
      Welcome to my portfolio, where I showcase my journey and projects in software engineering and design.
      </p>


      <div className="flex justify-center my-10">
        
          <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-[#1c1917] shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,63,4,0.6)_0%,rgba(255,165,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
            <span>Download My CV</span>
            <Download className="w-6 h-6" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
        
        
      </div>    
       
       



</div>
  )
}

export default HeroSection
