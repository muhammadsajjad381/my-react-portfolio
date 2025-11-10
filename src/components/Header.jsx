import React, { useEffect, useState, useContext } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // ✅ Change header background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Disable background scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* 🧭 Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16">
          {/* Logo / Name */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sajjad.Dev
          </h1>




          {/* 🖥️ Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-900 dark:text-white">
            
            {["Home", "About", "Services", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-yellow-400 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
             <button
            onClick={toggleTheme}
            className="hidden md:block text-2xl cursor-pointer transition-transform hover:scale-110 text-gray-900 dark:text-yellow-400"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          </ul>

          {/* 📱 Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-900 dark:text-yellow-400 transition-transform hover:scale-110"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="text-2xl text-gray-900 dark:text-yellow-400 focus:outline-none"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* 📱 Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 dark:bg-gray-800 text-white transform transition-transform duration-500 ease-in-out md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl focus:outline-none hover:text-yellow-400"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* 🧑 Profile Section */}
        <div className="flex flex-col items-start mt-14 px-6 space-y-3">
          <div className="flex items-center space-x-4">
            <img
              src="/profile1.png"
              alt="Muhammad Sajjad"
              className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-lg"
            />
            <div>
              <h2 className="text-xl font-bold">Sajjad.Dev</h2>
              <p className="text-yellow-300 text-sm">React Developer</p>
            </div>
          </div>
        </div>

        {/* 🔗 Navigation Links */}
        <ul className="flex flex-col items-center justify-center mt-10 space-y-6 text-lg font-medium">
          {["Home", "About", "Skills", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="relative group hover:text-yellow-300 transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 🌐 Social Icons */}
        <div className="absolute bottom-2 w-full flex justify-center  space-x-6 text-2xl text-yellow-300">
          <a href="#" className="hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </>
  );
}
