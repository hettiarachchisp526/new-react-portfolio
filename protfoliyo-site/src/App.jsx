
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Background from './Components/Background'

const App = () => {
  return (
    <>

     <Navbar/>
     <Background/>
     <div className="px-6 pt-20 mx-auto max-w-7xl">
         <HeroSection/>
     </div>

    </>
  )
}

export default App