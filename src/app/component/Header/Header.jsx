"use client";
import React from "react";
import { Menu } from "lucide-react"; // optional icon

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          Meet Bhakhar
        </a>

        <nav className="hidden md:flex space-x-8 text-base font-medium">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 relative hover:text-purple-600 transition duration-300"
            >
              <span className="hover-underline">{item}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button className="md:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>

      <style jsx>{`
        .hover-underline::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #9333ea;
          transition: width 0.3s;
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
