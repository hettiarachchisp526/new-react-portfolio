
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Background from './Components/Background'
import AboutMe from './Components/AboutMe'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Education from './Components/Education'
import VolunteerEx from './Components/VolunteerEx'


const App = () => {
  return (
    <>

     <Navbar/>
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

    </>
  )
}

export default App