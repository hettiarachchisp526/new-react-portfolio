import Education from "../Components/Education"
import Experience from "../Components/Experience"
import VolunteerEx from "../Components/VolunteerEx"

function ExperiencesPage() {
  return (
    <div className="px-6 pt-20 mx-auto max-w-7xl">
        <Experience/>
        <Education/>
        <VolunteerEx/>
  </div>
  )
}

export default ExperiencesPage