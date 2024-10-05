import HeroSection from "../Components/HeroSection"
import Background from "../Components/Background"
import AboutMe from "../Components/AboutMe"
import Services from "../Components/Services"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Education from "../Components/Education"
import VolunteerEx from "../Components/VolunteerEx"
import FooterSection from "../Components/FotterSection"

function HomePage() {
  return (


     <div>
        <Background/>
        <div className="px-6 pt-20 mx-auto max-w-7xl">
        
        <HeroSection/>
        <AboutMe/>
        <Services/>
        <Projects/>
        <Experience/>
        <Education/>
        <VolunteerEx/>

     </div>
     <FooterSection/>
 </div>
 
  )
}

export default HomePage