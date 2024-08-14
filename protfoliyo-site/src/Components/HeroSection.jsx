

const HeroSection = () => {
  return (

<div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        VirtualR build tools
        <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
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
