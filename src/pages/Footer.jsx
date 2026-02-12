import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer className="w-full bg-[#020202] py-8 px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Single Line Info */}
        <div className="flex items-center gap-4 text-zinc-600 font-mono text-[14px] uppercase tracking-[0.2em]">
          <span>©AllReserved2026</span>
          <span className="hidden md:block opacity-20">|</span>
          <a href="mailto:aliniaxi1234@gmail.com" className="hover:text-blue-500 transition-colors lowercase tracking-normal">aliniaxi1234@gmail.com</a>
        </div>

        {/* Right Side: Simple Socials */}
        <div className="flex items-center gap-6">
          {[
            { icon: <Github size={20} />, url: "https://github.com/muhammadsajjad381" },
            { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/" },
            { icon: <Mail size={20} />, url: "mailto:aliniaxi1234@gmail.com" }
          ].map((soc, i) => (
            <a key={i} href={soc.url} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-all">
              {soc.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Smart Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 z-50 group"
          >
            <ChevronUp size={20} />
            <span className="absolute bottom-full mb-3 right-0 bg-zinc-900 text-[9px] px-3 py-1 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-black">
              Top pe jany k liye click krein
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
