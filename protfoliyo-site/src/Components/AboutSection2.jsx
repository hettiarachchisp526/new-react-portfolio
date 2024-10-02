import Startup from "../assets/startup.png"
function AboutSection2() {
    return (
      <div className="container px-4 pb-16 mx-auto sm:px-6 lg:px-8">
        <div className="items-center w-full">
          <div className="w-full max-w-full mx-auto">
            <div className="w-full p-6 bg-gray-600 border-none rounded-lg shadow backdrop-blur-md bg-opacity-10">
              {/* Replace SVG with an image */}
              <img 
                className="w-8 h-8 mb-3" 
                src={Startup}
                alt="Claim Help Icon" 
              />
              
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Passionate UI/UX Designer and Software Developer | Ambitious Visionary at SynergenicX</h5>
              </a>
              <p className="mb-3 font-normal text-neutral-400">
              With a deep passion for creating intuitive digital experiences and a commitment to mastering the art of UI/UX design, I strive to blend creativity with technical expertise. My ambition is to elevate SynergenicX into a leading innovator in the digital landscape, where cutting-edge design and software development meet to create meaningful solutions.
                 <br></br>
              Driven by my career goal to become an expert UI/UX Engineer, I am dedicated to continuous growth, always exploring new possibilities in both design and technology. Through collaboration and innovation, I aim to shape the future of user experience and product development.
              </p>

            </div> 
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection2;
  