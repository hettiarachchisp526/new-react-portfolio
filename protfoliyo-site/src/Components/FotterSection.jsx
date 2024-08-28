// FooterSection.js

import footerimg from '../assets/footerimage.png';
import WorkedBrands from './WorkedBrands'; // Importing the WorkedBrands component

const FooterSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={footerimg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Worked Brands Section */}
      <WorkedBrands />

      {/* Footer Content Here */}
      <div className="relative z-10 py-8 text-center text-white backdrop-blur-sm bg-black/20 opacity-40">
        <p>&copy; 2024 Design and Development by Subodha Hettiarachchi</p>
      </div>
    </div>
  );
};

export default FooterSection;
