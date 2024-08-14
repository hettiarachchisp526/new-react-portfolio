import { navItems } from "../constants";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleDropdownClick = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-5 border-b backdrop-blur-lg border-neutral-700/80">
      <div className="container relative px-4 mx-auto lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Subodha Hettiarachchi</span>
          </div>
          <ul className="hidden space-x-12 lg:flex ml-14">
            {navItems.map((item, index) => (
              <li key={index} className="relative hover:text-gray-400">
                <a
                  href={item.href}
                  className="flex items-center cursor-pointer"
                  onClick={() => handleDropdownClick(index)}
                >
                  {item.label}
                  {item.isDropdown && (
                    <>
                      {dropdownOpen === index ? (
                        <ChevronUp className="ml-2" size={16} />
                      ) : (
                        <ChevronDown className="ml-2" size={16} />
                      )}
                    </>
                  )}
                </a>
                {item.isDropdown && dropdownOpen === index && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 w-40 mt-2 bg-black rounded-md shadow-lg"
                  >
                    <ul>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex} className="hover:bg-gray-100">
                          <a href={dropdownItem.href} className="block px-4 py-2">
                            {dropdownItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="items-center justify-center hidden space-x-12 lg:flex">
            <a
              href="#"
              className="px-3 py-2 text-black rounded-md bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-400"
            >
              Contact Me
            </a>
          </div>
          <div className="flex-col justify-end lg:hidden md:flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li key={index} className="w-full">
                  <a
                    href={item.href}
                    className="flex items-center justify-between w-full px-4 py-2 text-center text-white bg-neutral-900"
                    onClick={() => handleDropdownClick(index)}
                  >
                    {item.label}
                    {item.isDropdown && (
                      <>
                        {dropdownOpen === index ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </>
                    )}
                  </a>
                  {item.isDropdown && dropdownOpen === index && (
                    <div
                      ref={dropdownRef}
                      className="w-full bg-gray-700"
                    >
                      <ul>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <li
                            key={dropdownIndex}
                            className="hover:bg-gray-600"
                          >
                            <a href={dropdownItem.href} className="block px-4 py-2">
                              {dropdownItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex w-full space-x-6">
              <a
                href="#"
                className="w-full px-3 py-2 text-center text-black rounded-md bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-400"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
