// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 
      bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 transition-colors duration-500"
    >
      {/* Left Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          Muhammad Sajjad
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          React Developer
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I build responsive and high-performance web interfaces using modern
          technologies like React, Tailwind, and JavaScript.
        </p>

        <div className="flex space-x-4">
          <a
            href="/Muhammad_Sajjad_Cv .docx.pdf"
            // download="Muhammad_Sajjad_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg 
            hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border-2 border-blue-600 dark:border-blue-400 
            text-blue-600 dark:text-white-200 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 
            hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-5 text-2xl mt-4">
          <a
            href="https://github.com/betanni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.section>

      {/* Right Section - Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl 
        border-4 border-blue-600 dark:border-blue-400">
          <img
            src="/profile1.png"
            alt="Muhammad Sajjad"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>
    </main>
  );
}
