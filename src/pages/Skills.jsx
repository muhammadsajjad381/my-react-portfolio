import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Bootstrap", level: 88 },
  { name: "Tailwind CSS", level: 92 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700"
    >
      <h1 className="text-5xl font-extrabold mb-16 text-gray-800 dark:text-white text-center">
        <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 dark:after:from-yellow-400 dark:after:to-orange-400 pb-2">
          My Professional Skills
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl relative">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative p-8 rounded-3xl backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 shadow-xl hover:scale-105 transition-transform duration-500 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-yellow-400 transition-colors">
              {skill.name}
            </h3>

            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-yellow-400 dark:to-orange-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <p className="text-right text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium">
              {skill.level}%
            </p>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 dark:from-yellow-400/10 dark:to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </motion.div>
        ))}

        {/* Decorative Center Divider */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 dark:from-yellow-400 dark:via-orange-400 dark:to-yellow-400 -translate-x-1/2 hidden md:block"></div>
      </div>
    </section>
  );
}
