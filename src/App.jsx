
import { Routes, Route } from "react-router-dom";

import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ExperiencesPage from "./Pages/ExperiencesPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";

import Navbar from './Components/Navbar';
// import FotterSection from './Components/FotterSection'
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>

     <Navbar/>
    
     <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    


     {/* <FotterSection/> */}
    </>
  )
}

export default App