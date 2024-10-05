import { useState, useEffect, useRef } from "react";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Scroll to top when navigating to a new page
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Close mobile drawer if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle mobile menu close after clicking a link
  const handleLinkClick = () => {
    setMobileDrawerOpen(false);
  };

  // Determine the active link based on the current pathname
  const isActive = (href) => {
    return pathname === href ? "text-orange-500" : "text-white";
  };

  return (
    <nav className="sticky top-0 z-50 py-5 border-b backdrop-blur-lg border-neutral-700/80">
      <div className="container relative px-4 mx-auto lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight text-white/30">Subodha</span>
          </div>
          <ul className="hidden space-x-12 lg:flex ml-14">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  to={item.href}
                  className={`flex items-center cursor-pointer focus:outline-none ${isActive(item.href)} hover:text-orange-500`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center justify-center hidden space-x-12 lg:flex">
            <Link
              to="/contact"
              className="px-3 py-2 font-medium text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:shadow-lg hover:shadow-yellow-300/25"
              onClick={handleLinkClick}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Responsive */}
          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="w-full">
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between w-full px-4 py-4 text-center bg-neutral-900 focus:outline-none ${isActive(item.href)} hover:text-orange-500 hover:bg-[#3f3f46]`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex w-full py-5 space-x-6">
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="px-3 py-2 font-medium text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:shadow-lg hover:shadow-yellow-300/25 focus:outline-none"
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
