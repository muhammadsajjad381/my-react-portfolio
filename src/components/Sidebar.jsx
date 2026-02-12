import React from "react";
import { FaHome, FaUser, FaCode, FaServicestack, FaEnvelope, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <FaHome />, label: "Home", href: "#home" },
    { icon: <FaUser />, label: "About", href: "#about" },
    { icon: <FaCode />, label: "Skills", href: "#skills" },
    { icon: <FaServicestack />, label: "Services", href: "#services" },
    { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Background Overlay for mobile click to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#050505] border-r border-zinc-800/50 z-[100] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        
        {/* Close Button - Larger tap target */}
        <button 
          onClick={toggleSidebar} 
          className="absolute top-6 right-6 p-3 text-zinc-500 hover:text-cyan-400 transition-colors"
        >
          <FaTimes size={24} />
        </button>

        {/* Identity */}
        <div className="mt-20 px-8">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-pulse" />
            <img src="/profile1.png" alt="Sajjad" className="w-full h-full object-cover rounded-full border border-zinc-800" />
          </div>
          <h2 className="text-md font-black text-white uppercase tracking-tighter">M. Sajjad</h2>
          <p className="text-cyan-500/60 font-mono text-[8px] uppercase tracking-widest mt-1">Status: Online</p>
        </div>

        {/* Nav Links */}
        <nav className="mt-12 px-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={toggleSidebar}
              className="flex items-center gap-5 px-6 py-4 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900/40 transition-all active:bg-zinc-900/60"
            >
              <span className="text-zinc-600 group-hover:text-cyan-500">{item.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer Build info */}
        <div className="absolute bottom-10 left-10 opacity-30">
          <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-[0.5em]">Auth. Terminal v2.0</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
