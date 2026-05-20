import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    // { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Project", id: "projects" },
    
  ];

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md hover:shadow-2xl transition-shadow duration-300 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="text-2xl font-bold text-black">
          Poornima Batham
        </a>

        <button
          className="md:hidden  text-black text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0  text-black">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-2 hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
