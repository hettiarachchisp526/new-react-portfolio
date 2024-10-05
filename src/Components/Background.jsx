import bgimg from "../assets/Homebg.png";

const Background = () => {
  return (
    // Start Background Animation Body
    <div className="area">
      <div className="absolute inset-0">
        <img
          src={bgimg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    // End Background Animation Body
  );
};

export default Background;
