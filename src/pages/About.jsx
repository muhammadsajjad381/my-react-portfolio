import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBolt, FaMagic } from "react-icons/fa";
import { FaCode, FaBolt, FaMagic } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#050505] px-6 py-20 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-[-5%] w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-72 h-72 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            About the Dev
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            About the Dev
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.2] tracking-tight text-center lg:text-left mb-10"
        >
          Building for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300 font-bold">
            Next Generation.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-center lg:text-left">
              I’m <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-600/30 underline-offset-4">Muhammad Sajjad</span>. 
              I translate complex technical logic into fluid, high-performance web experiences.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed text-center lg:text-left">
              Based in Pakistan, I specialize in the React ecosystem, creating digital value through 
              clean architecture and pixel-perfect UI.
            </p>
          </motion.div>
          <div className="space-y-3">
            {[
              { icon: <FaCode />, title: "Scalable Logic", desc: "Clean, modular code structures.", color: "blue" },
              { icon: <FaBolt />, title: "Peak Performance", desc: "Sub-second load times & SEO focus.", color: "blue" },
              { icon: <FaMagic />, title: "Modern UI/UX", desc: "Crafting meaningful interactions.", color: "blue" }
            ].map((item, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-white/[0.02] 
              border border-gray-100 dark:border-white/5 rounded-xl backdrop-blur-sm 
              transition-all duration-300 group cursor-pointer
              hover:border-blue-500 dark:hover:border-blue-500" 
            >
              <div className="text-lg p-2.5 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold dark:text-white">{item.title}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex gap-8">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">12+</p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-bold">Months Exp</p>
            </div>
            <div className="w-px h-8 bg-gray-100 dark:bg-white/5"></div>
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">20+</p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-bold">Projects Done</p>
            </div>
          </div>
          
          <a href="#contact" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest dark:text-dark bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-full hover:scale-105 transition-all">
            Let's Collaborate 
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
      </div>
    </section>
  );
}