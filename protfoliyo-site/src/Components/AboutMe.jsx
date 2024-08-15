/* eslint-disable react/no-unescaped-entities */
   import Meimg from "../assets/myimage.png"

const AboutMe = () => {
  return (
    
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div className="max-w-lg">
                <h2 className="mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">About Me</h2>
                <p className="max-w-4xl mt-4 text-base text-center sm:max-w-full text-neutral-400 sm:text-base">With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. 
                    My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience.</p>
                <div className="mt-8 text-center">
                    <a href="#" className="font-medium text-center text-orange-500 hover:text-orange-700">Learn more about Me
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src={Meimg} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
    
  )
}

export default AboutMe
