import React, { useState } from "react";
import { motion } from "framer-motion";

const techStack = {
  core: {
    label: "Core Architecture",
    color: "#3b82f6", // Blue
    items: [
      { id: "c1", name: "HTML5", level: "Structure" },
      { id: "c2", name: "CSS3", level: "Design" },
      { id: "c3", name: "JavaScript", level: "Logic" }
    ]
  },
  frameworks: {
    label: "Modern Frameworks",
    color: "#06b6d4", // Cyan
    items: [
      { id: "f1", name: "React", level: "Library" },
      { id: "f2", name: "Tailwind", level: "Utility" },
      { id: "f3", name: "Framer", level: "Motion" }
    ]
  },
  workflow: {
    label: "Professional Workflow",
    color: "#8b5cf6", // Purple
    items: [
      { id: "w1", name: "Git/GitHub", level: "Version" },
      { id: "w2", name: "Vite", level: "Bundler" },
      { id: "w3", name: "Deployment", level: "Production" }
    ]
  }
};

export default function Skills() {
  // Ab hum category ke bajaye specific card ki ID track karenge
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="skills" className="min-h-screen bg-[#020202] py-20 px-6 flex flex-col items-center justify-center">
      
      {/* Header */}
      <div className="max-w-5xl w-full mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Technical <span className="text-zinc-800">Intelligence.</span>
        </h2>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {Object.entries(techStack).map(([categoryKey, data]) => (
          <div key={categoryKey} className="relative">
            
            {/* Category Label & Dynamic Laker */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600">
                {data.label}
              </span>
              
              {/* Laker: Yeh sirf tab color change karegi jab is category ka koi card hover hoga */}
              <motion.div 
                animate={{ 
                  backgroundColor: data.items.some(item => item.id === hoveredId) ? data.color : "#18181b",
                  scaleX: data.items.some(item => item.id === hoveredId) ? 1 : 0.8
                }}
                className="h-[1px] flex-1 origin-left transition-all duration-500"
              />
            </div>

            {/* Individual Cards */}
            <div className="flex flex-col gap-5">
              {data.items.map((skill) => (
                <motion.div
                  key={skill.id}
                  onMouseEnter={() => setHoveredId(skill.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ x: 10 }}
                  className="relative group p-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    {/* Dynamic Dot: Only colors up for this specific card */}
                    <motion.div 
                      animate={{ 
                        backgroundColor: hoveredId === skill.id ? data.color : "#27272a",
                        boxShadow: hoveredId === skill.id ? `0 0 12px ${data.color}` : "none"
                      }}
                      className="w-2 h-2 rounded-full transition-all duration-300" 
                    />
                    
                    <div className="flex flex-col">
                      <span className={`font-bold text-lg transition-colors duration-300 ${hoveredId === skill.id ? "text-white" : "text-zinc-500"}`}>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Individual Glow Backdrop */}
                  <motion.div 
                    animate={{ opacity: hoveredId === skill.id ? 0.05 : 0 }}
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{ backgroundColor: data.color }}
                  />
                  
                  {/* Individual Border Highlight */}
                  <motion.div 
                    animate={{ 
                      opacity: hoveredId === skill.id ? 1 : 0,
                    }}
                    className="absolute inset-0 border rounded-2xl pointer-events-none transition-all duration-500"
                    style={{ borderColor: data.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-zinc-800 text-[10px] font-mono tracking-[0.5em]">
        SYSTEM READY // STACK VISUALIZER
      </div>
    </section>
  );
}
