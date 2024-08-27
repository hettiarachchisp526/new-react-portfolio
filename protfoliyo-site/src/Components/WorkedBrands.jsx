 import prodigy from "../assets/Brands/prodigy.png"

const WorkedBrands = () => {
  return (
    <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col items-center max-w-full ">

         <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">I worked on Projects For</h2>

    </div>
    
    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={prodigy} alt=""/>
    </div>

    <div>
        <img className="h-auto max-w-full rounded-lg" src={prodigy} alt=""/>
    </div>

    <div>
        <img className="h-auto max-w-full rounded-lg" src={prodigy} alt=""/>
    </div>

    <div>
        <img className="h-auto max-w-full rounded-lg" src={prodigy} alt=""/>
    </div>

    <div>
        <img className="h-auto max-w-full rounded-lg" src={prodigy} alt=""/>
    </div>    



    </div>


    
    </div>
  )
}

export default WorkedBrands