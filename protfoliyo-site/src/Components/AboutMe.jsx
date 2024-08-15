/* eslint-disable react/no-unescaped-entities */
// import {Me} from "../assets/myimage.png"

const AboutMe = () => {
  return (
    
<div className="relative">
  <div className="sticky top-0 flex items-center justify-center h-screen">
    <img src="https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg" className="object-cover w-full h-full" />
    <div className="absolute left-0 right-0 flex flex-col items-start justify-center w-2/4 gap-4 p-10 m-auto backdrop-blur-xl">
      <h2 className="text-2xl font-bold">First Section</h2>
      <p className="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div>

</div>
    
  )
}

export default AboutMe
