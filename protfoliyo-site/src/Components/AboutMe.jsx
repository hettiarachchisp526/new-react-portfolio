/* eslint-disable react/no-unescaped-entities */
   import Meimg from "../assets/myimage.png"

const AboutMe = () => {
  return (
    
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div className="max-w-lg">
                <h2 className="text-3xl font-semibold text-gray-300 sm:text-4xl">About Me</h2>
                <p className="mt-4 text-lg text-gray-400">With over 4 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. 
                    My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience</p>
                <div className="mt-8">
                    <a href="#" className="font-medium text-orange-500 hover:text-orange-700">Learn more about Me
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
