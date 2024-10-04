import Education from "../Components/Education"
import Experience from "../Components/Experience"
import VolunteerEx from "../Components/VolunteerEx"
import FooterSection from "../Components/FotterSection"

function ExperiencesPage() {
  return (
    <div>
    <div className="px-6 mx-auto max-w-7xl">
        <Experience/>
        <Education/>
        <VolunteerEx/>
  </div>
  <FooterSection/>
  </div>
  )
}

export default ExperiencesPage