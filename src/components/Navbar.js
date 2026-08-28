import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0, 0, 0, 0.85)"
          : "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(36, 198, 220, 0.6)",
        boxShadow: scrolled ? "0 4px 30px rgba(36, 198, 220, 0.4), 0 2px 0 rgba(36, 198, 220, 0.8)" : "0 2px 0 rgba(36, 198, 220, 0.5)",
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">

        {/* Logo */}
        <a
          href="#about"
          className="text-xl font-bold tracking-wide"
          style={{
            background: "linear-gradient(to right, #24c6dc, #514a9d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Poornima Batham
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(to right, #24c6dc, #514a9d)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-3"
          style={{ borderTop: "1px solid rgba(36, 198, 220, 0.15)" }}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 text-sm py-2 hover:text-cyan-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
