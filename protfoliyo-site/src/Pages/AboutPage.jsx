import AboutMe from "../Components/AboutMe"
import AboutSection2 from "../Components/AboutSection2"
import Fotter2 from "../Components/Fotter2"


function AboutPage() {
  return (
    <div>
    <div className="px-6 mx-auto max-w-7xl">
        <AboutMe/>
        <AboutSection2/>

    </div>
    <Fotter2/>
    </div>
  )
}

export default AboutPage