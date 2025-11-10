import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
    return (
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 
                   bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-700"
      >
        {/* Left Side - Text */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center mt-10 md:mt-0"
        >
         <div className="w-56 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--color-primary)] shrink-0">
  <img
    src="/profile3.png"
    alt="Muhammad Sajjad"
    className="w-full h-full object-cover"
  />
</div>

        </motion.div>
  
        {/* Right Side - Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6 md:pr-10  mb-8"
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)]  text-center ">About Me</h2>
          <p className=" leading-relaxed text-justify text-1xl">
            I’m Muhammad Sajjad, a passionate Frontend Developer specializing in React.js. 
            I love turning creative ideas into beautiful, responsive, and user-friendly web experiences. 
            My focus is on writing clean and efficient code, implementing smooth animations, 
            and ensuring that every design I build looks stunning across all devices. 
            I continuously explore modern web technologies like Tailwind CSS, JavaScript, and Framer Motion 
            to deliver high-performance and visually appealing applications.
          </p>
          
        </motion.div>
  
       
       
      </section>
    );
  }
  
