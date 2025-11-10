import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GithubIcon, LinkedinIcon, FacebookIcon } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800 dark:text-white text-center">
        <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 dark:after:from-yellow-400 dark:after:to-orange-400 pb-1">
          Contact Me
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-5 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all duration-500"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400 transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-yellow-400 dark:to-orange-400 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Right Side: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all duration-500"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>

          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">aliniaxi1234@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-blue-500 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">+92 3032681310</span>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-500 dark:text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">Mianwali, Pakistan</span>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://github.com/betanni"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/muhammad.sajjad.955088"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
            >
              <FacebookIcon size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
