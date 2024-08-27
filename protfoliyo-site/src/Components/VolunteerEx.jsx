import VolFossEx from "./VolFossEx"
import VolIeee from "./VolIeee"
import VolSlsac from "./VolSlsac"


const VolunteerEx = () => {
  return (
    <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col items-center max-w-full ">

         <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">Volunteer Experience</h2>

         <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
         Making a difference through volunteer work that reflects my passion for community service, teamwork, and personal growth.
        </p>
    </div>

        {/* experiance section - foss------------------------------------------------------- */}

        <VolFossEx/>
    

        {/* experiance section - ieee------------------------------------------------------- */}
         
       <VolIeee/>

        {/* experiance section - slsac------------------------------------------------------- */}
        
        <VolSlsac/>


    
    </div>
  )
}

export default VolunteerEx