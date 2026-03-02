import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Skills",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <div className="flex items-center gap-2 cursor-pointer group">
          <h1 className="text-lg font-black text-white tracking-tighter uppercase">
            Sajjad<span className="text-cyan-500">.Dev</span>
          </h1>
        </div>
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-cyan-500 transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 text-white text-2xl active:scale-90 transition-transform"
        >
          <FaBars />
        </button>
      </nav>
    </header>
  );
}