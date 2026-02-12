import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      desc: "Creating high-performance, interactive UIs using React and modern state management.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Pixel-perfect layouts that adapt seamlessly to every screen size and device.",
    },
    {
      icon: <FaCode />,
      title: "Clean Architecture",
      desc: "Writing maintainable, scalable, and optimized code following best industry practices.",
    },
    {
      icon: <FaDatabase />,
      title: "API Integration",
      desc: "Connecting frontend with complex backends using RESTful services and GraphQL.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500"
    >
      {/* Theme Background Sync (Home Page Glows) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Header - Matched with About Page Hierarchy */}
        <div className="text-center lg:text-left mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 justify-center lg:justify-start mb-4"
          >
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Delivering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300">
              Digital Value.
            </span>
          </motion.h2>
        </div>

        {/* Services Grid - 2x2 Layout for Professional Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20"
            >
              <div className="flex flex-col gap-5">
                {/* Icon Circle - Theme Match */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 text-2xl text-blue-600 dark:text-blue-400 shadow-sm dark:shadow-none group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Subtle Hover Indicator */}
                <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Sync - Matched with Home's Footer feel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="h-px w-20 bg-gray-100 dark:bg-white/10" />
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
            Ready to scale your next big idea?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
