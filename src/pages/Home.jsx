import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 
      bg-[#fdfdfd] dark:bg-gray-950 text-gray-900 dark:text-white pt-32 md:pt-24 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 z-10 text-center md:text-left space-y-6 mt-12 md:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Available for New Projects
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Frontend <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300">
            React Developer
          </span>
        </h1>

        <p className="max-w-lg text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mx-auto md:mx-0 font-medium">
          I'm{" "}
          <span className="text-gray-900 dark:text-white font-bold">
            Muhammad Sajjad
          </span>
          . A specialized React Developer building high-end, scalable web
          architectures.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <a
            href="/Muhammad_Sajjad_ReactDev.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Muhammad_Sajjad_ReactDev.pdf" 
            className="group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get My CV{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start items-center space-x-6 pt-6">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/muhammadsajjad381",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/",
            },
            { icon: <FaEnvelope />, link: "mailto:aliniaxi1234@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="text-2xl text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.section>

      {/* --- Section: Image (With Mobile Tag Fix) --- */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative flex justify-center items-center z-10"
      >
        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
          {/* Animated Rings */}
          <div className="absolute inset-0 border-4 border-dashed border-blue-600/20 dark:border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite]" />

          {/* Image Container */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-[8px] md:border-[12px] border-white dark:border-gray-900 shadow-2xl">
            <img
              src="/profile1.png"
              alt="Muhammad Sajjad"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          {/* Responsive */}
          <div className="absolute inset-0 animate-[spin_15s_linear_infinite] z-20 pointer-events-none">
            <motion.div
              className="absolute -right-2 top-10 md:-right-6 md:top-24 w-12 h-12 md:w-16 md:h-16 
               bg-white dark:bg-gray-800 rounded-full shadow-2xl border-2 border-blue-500 
               flex flex-col items-center justify-center text-center 
               pointer-events-auto animate-[spin_15s_linear_infinite_reverse]"
            >
              <span className="text-sm md:text-xl">🚀</span>
              <p className="text-[7px] md:text-[10px] font-black dark:text-white leading-tight uppercase">
                1+ YEAR <br /> EXP.
              </p>
            </motion.div>
            {[
              {
                name: "HTML",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                delay: "-18s",
              },
              {
                name: "Tailwind",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                delay: "-40s",
              },
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                delay: "-60s",
              },
              {
                name: "Framer Motion",
                icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png",
                delay: "-78s",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute inset-0 animate-[spin_90s_linear_infinite] z-20 pointer-events-none"
                style={{ animationDelay: item.delay }}
              >
                <div
                  className="absolute -right-2 top-10 md:-right-6 md:top-24 w-12 h-12 md:w-16 md:h-16 
                            bg-white dark:bg-gray-800 rounded-full shadow-2xl border-2 border-blue-500/30 
                            flex items-center justify-center p-2.5
                            pointer-events-auto animate-[spin_90s_linear_infinite_reverse]"
                  style={{ animationDelay: item.delay }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}