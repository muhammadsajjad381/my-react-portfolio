import React, { useState } from "react";
import { motion } from "framer-motion";

const techStack = {
  frontend: {
    label: "Frontend Systems",
    color: "#06b6d4", // Cyan
    items: [
      { id: "f1", name: "React.js", level: "Library" },
      { id: "f2", name: "Tailwind CSS", level: "Utility" },
      { id: "f3", name: "JavaScript/ES6+", level: "Logic" }
    ]
  },
  backend: {
    label: "Backend Architecture",
    color: "#10b981", // Emerald Green (Node/Express vibe)
    items: [
      { id: "b1", name: "Node.js", level: "Runtime" },
      { id: "b2", name: "Express.js", level: "Framework" },
      { id: "b3", name: "RESTful APIs", level: "Routing" }
    ]
  },
  database: {
    label: "Database Engineering",
    color: "#f59e0b", // Amber/Gold (Database vibe)
    items: [
      { id: "d1", name: "MongoDB", level: "NoSQL DB" },
      { id: "d2", name: "Mongoose ODM", level: "Modeling" },
      { id: "d3", name: "JWT Auth", level: "Security" }
    ]
  },
  workflow: {
    label: "Professional Workflow",
    color: "#8b5cf6", // Purple
    items: [
      { id: "w1", name: "Git/GitHub", level: "Version" },
      { id: "w2", name: "Vite / Next.js", level: "Bundler" },
      { id: "w3", name: "Deployment", level: "Vercel/Prod" }
    ]
  }
};

export default function Skills() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="skills" className="min-h-screen bg-[#020202] py-20 px-6 flex flex-col items-center justify-center">
      
      {/* Header */}
      <div className="max-w-7xl w-full mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Technical <span className="text-zinc-800">Intelligence.</span>
        </h2>
      </div>

      {/* Grid updated to grid-cols-4 for perfect MERN balance */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {Object.entries(techStack).map(([categoryKey, data]) => (
          <div key={categoryKey} className="relative">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 white-space-nowrap">
                {data.label}
              </span>
              <motion.div 
                animate={{ 
                  backgroundColor: data.items.some(item => item.id === hoveredId) ? data.color : "#18181b",
                  scaleX: data.items.some(item => item.id === hoveredId) ? 1 : 0.8
                }}
                className="h-[1px] flex-1 origin-left transition-all duration-500"
              />
            </div>
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
                  <motion.div 
                    animate={{ opacity: hoveredId === skill.id ? 0.05 : 0 }}
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{ backgroundColor: data.color }}
                  />
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
        SYSTEM READY // MERN FULL-STACK VISUALIZER
      </div>
    </section>
  );
}