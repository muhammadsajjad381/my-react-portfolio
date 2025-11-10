// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      icon: <FaReact className="text-5xl text-[#61DBFB]" />,
      title: "Frontend Development",
      desc: "I create responsive, dynamic, and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-blue-500" />,
      title: "Responsive Design",
      desc: "Ensuring your website looks and performs perfectly on all devices — from desktops to smartphones.",
    },
    {
      icon: <FaCode className="text-5xl text-yellow-400" />,
      title: "Clean Code",
      desc: "I focus on writing clean, maintainable, and optimized code that ensures performance and scalability.",
    },
    {
      icon: <FaDatabase className="text-5xl text-green-500" />,
      title: "API Integration",
      desc: "Seamless integration with RESTful APIs and backend systems to bring dynamic data to life on your website.",
    }
    
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16
      bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-700"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--color-primary)]"
      >
        My <span className="text-[var(--color-accent)]">Services</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.05,
              skewY: 4,
              boxShadow:
                "0px 10px 25px rgba(0, 0, 0, 0.2), 0px 0px 30px rgba(59,130,246,0.4)",
            }}
            className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg 
            hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 group"
          >
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] dark:text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
