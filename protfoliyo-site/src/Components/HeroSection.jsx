/* eslint-disable react/no-unescaped-entities */
import { Download, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className={`sticky top-0 flex flex-col items-center h-auto mt-12 mb-12 lg:mt-32 lg:mb-60 transition-transform duration-500  ${isSticky ? 'transform scale-95 translate-y-2 opacity-90' : 'opacity-100'}`}>
        <h1 className="text-4xl font-semibold tracking-wide text-center sm:text-6xl lg:text-7xl">
          Hi, I'm Subodha Hettiarachchi
        </h1>
        
        <div className="flex justify-center">
          <div className="flex justify-center px-5 py-10">
            <span className="flex flex-wrap items-center justify-center text-orange-500 lg:font-medium bg-gradient-to-r bg-clip-text lg:text-3xl sm:font-medium sm:text-sm">
              <span>UI/UX Engineer</span><span className="px-3">|</span><span>Software Engineer</span><span className="px-3">|</span><span>Creative Designer</span>
            </span>
          </div>
        </div>

        <p className="max-w-4xl text-base text-center text-neutral-400 sm:text-xl">
          I'm a passionate Software Engineering undergraduate with a strong focus on UI/UX design and front-end development.
          Welcome to my portfolio, where I showcase my journey and projects in software engineering and design.
        </p>

        <div className="flex justify-center gap-2 my-10">
          <a 
          download="Subodha_Hettiarachchi_CV.pdf"
          href="https://drive.google.com/file/d/1DlQcYhrOIF1G7QIuiKLDX9ehbO_sjhiG/view?usp=sharing"
          className="relative inline-block p-px md:font-semibold sm:font-medium leading-6 text-white no-underline bg-[#1c1917] shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,63,4,0.6)_0%,rgba(255,165,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center px-5 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
              <span>Download My CV</span>
              <Download className="w-6 h-6" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </a>

          <button className="relative inline-block p-px md:font-semibold sm:font-medium leading-6 text-white no-underline bg-[#1c1917] shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,63,4,0.6)_0%,rgba(255,165,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center px-5 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
              <a   href="https://www.linkedin.com/in/subodha-p-hettiarachchi/" ><Linkedin className="w-6 h-6" /></a>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
