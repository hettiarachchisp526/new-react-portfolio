import { navItems } from "../constants"

const Navbar = () => {
  return (

    <nav className=".sticky.top-0.z-50.py-3.backdrop-blur-lg.border-b.border-neutral-700/80">
        <div className="container relative px-4 mx-auto text-sm">
            <div className="flex items-center justify-center">
                <div className="flex items-center flex-shrink-0">
                  <span className="text-xl tracking-tight">Subodha Hettiarachchi</span>
                </div>
                <ul className="hidden space-x-12 lg:flex ml-14">
                {navItems.map((item, index) => (
                  <li  key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                </ul>
                <div className="items-center justify-center hidden space-x-12 lg:flex">
                  <a href="#"
                  className="px-3 py-2 rounded-md bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-400"
                  >
                    Contact Me
                  </a>
                </div>
            </div>
        </div>
    </nav>
    
  ) 
}

export default Navbar