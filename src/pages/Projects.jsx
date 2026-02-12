import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Lamudi.pk Engine",
    desc: "High-scale real estate portal with fast filtering.",
    img: "https://images.unsplash.com/photo-1560514446-440a3ad58417?q=80&w=800",
    tags: ["React", "Logic"],
  },
  {
    title: "Elite Showroom",
    desc: "3D-interactive gallery with smooth transitions.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
    tags: ["GSAP", "UI/UX"],
  },
  {
    title: "Marketplace OLX",
    desc: "Classifieds platform with optimized assets.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    tags: ["Next.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex items-center bg-white dark:bg-[#050505] py-12 px-6 lg:px-20 transition-colors duration-500 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Compact Header */}
        <div className="flex items-end justify-between mb-12 border-b border-gray-100 dark:border-white/5 pb-6">
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600"
            >
              Portfolio
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              Featured <span className="text-blue-600 italic">Works.</span>
            </h2>
          </div>
          <p className="hidden md:block text-[11px] font-bold text-gray-400 uppercase tracking-widest max-w-[150px] text-right">
            Efficiently Built Solutions
          </p>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Image - Aspect Video (Saves Height) */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-600/10">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt={project.title}
                />
                
                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="https://github.com/muhammadsajjad381" className="p-3 bg-white rounded-full text-black hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <FaGithub size={16} />
                  </a>
                  <a href="#" className="p-3 bg-white rounded-full text-black hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              {/* Content - Tight Spacing */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <FaCode className="text-gray-300 dark:text-zinc-700 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Minimal Tags */}
                <div className="flex gap-2 pt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-600/10 px-2 py-0.5 rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-12 text-center">
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-blue-600 transition-all">
            View Archive +
          </button>
        </div>

      </div>
    </section>
  );
}
