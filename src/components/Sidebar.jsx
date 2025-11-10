import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-5 right-5 text-2xl font-bold text-white hover:text-yellow-400"
      >
        ✕
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-1 space-y-3">
        <div className="relative w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden">
          <img
            src="/profile1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-lg font-bold text-white">Muhammad Sajjad</h2>
          <p className="text-yellow-400 text-sm font-medium">React Developer</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 flex flex-col space-y-6 text-lg font-semibold text-white px-10">
        <a
          href="#home"
          className="hover:text-yellow-400 flex items-center space-x-3"
        >
          <FaHome /> <span>Home</span>
        </a>
        <a
          href="#about"
          className="hover:text-yellow-400 flex items-center space-x-3"
        >
          <FaUser /> <span>About</span>
        </a>
        <a
          href="#skills"
          className="hover:text-yellow-400 flex items-center space-x-3"
        >
          <FaCode /> <span>Skills</span>
        </a>
        <a
          href="#services"
          className="hover:text-yellow-400 flex items-center space-x-3"
        >
          <FaServicestack /> <span>Services</span>
        </a>
        <a
          href="#contact"
          className="hover:text-yellow-400 flex items-center space-x-3"
        >
          <FaEnvelope /> <span>Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
