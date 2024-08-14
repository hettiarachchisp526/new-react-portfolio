/* eslint-disable react/no-unescaped-entities */


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
        <a
          href="#"
          className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Start for free
        </a>
        <a href="#" className="px-4 py-3 mx-3 border rounded-md">
          Documentation
        </a>
      </div>    
</div>
  )
}

export default HeroSection
