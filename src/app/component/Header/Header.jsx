"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react"; // optional icon
import { IoIosClose } from "react-icons/io"; // Close icon for mobile menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 fixed top-0 left-0 right-0 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
        >
          Meet Bhakhar
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-white">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-pink-500 transition duration-300"
            >
              <span className="hover-underline">{item}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 bg-gray-900 bg-opacity-80 w-full h-full transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-gray-800 w-3/4 h-full shadow-xl relative">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <IoIosClose size={30} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-10">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-xl font-semibold hover:text-pink-500 transition duration-300"
                onClick={toggleMenu} // Close menu when link is clicked
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Hover underline animation */}
      <style jsx>{`
        .hover-underline::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #ec4899;
          transition: width 0.3s ease;
          position: absolute;
          bottom: -2px;
          left: 0;
        }

        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
