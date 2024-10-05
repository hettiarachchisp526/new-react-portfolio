// WorkedBrands.js

import prodigy from "../assets/Brands/prodigy.png";
import jjmoon from "../assets/Brands/jjmoon.png";
import livenation from "../assets/Brands/live nation.png";

const WorkedBrands = () => {
  return (
    <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-full">
        <h2 className="max-w-full text-3xl font-semibold text-center text-white mb-11 sm:text-4xl">
          I worked on Projects For
        </h2>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-4 flex-nowrap">
        <div>
          <img
            className="h-[60px] w-[120px] sm:h-[80px] sm:w-[140px] md:h-[90px] md:w-[160px] lg:h-[110px] lg:w-[180px] rounded-lg "
            src={prodigy}
            alt="Prodigy"
          />
        </div>
        <div>
          <img
            className="h-[60px] w-[120px] sm:h-[80px] sm:w-[140px] md:h-[90px] md:w-[160px] lg:h-[110px] lg:w-[180px] rounded-lg "
            src={jjmoon}
            alt="JJ Moon"
          />
        </div>
        <div>
          <img
            className="h-[60px] w-[120px] sm:h-[80px] sm:w-[140px] md:h-[90px] md:w-[160px] lg:h-[110px] lg:w-[180px] rounded-lg "
            src={livenation}
            alt="Live Nation"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkedBrands;
