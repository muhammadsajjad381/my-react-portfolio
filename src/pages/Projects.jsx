// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "lamudi",
    title: "Lamudi.pk (Clone)",
    short: "Real-estate listings UI — search, filter & listing cards.",
    img: "/projects/lamudi.png",
    alt: "Lamudi project screenshot",
     // Tags update کر دی ہیں، آپ اپنی مرضی کے مطابق کر سکتے ہیں
  },
  {
    id: "olx",
    title: "OLX (Clone)",
    short: "Classifieds & listings layout with responsive grid and filters.",
    img: "/projects/olx.png",
    alt: "OLX project screenshot",
   
  },
  {
    id: "carshowroom",
    title: "Car Showroom",
    short: "Responsive showroom website with vehicle gallery & details.",
    img: "/projects/carshowroom.png",
    alt: "Car Showroom screenshot",
   
  },
  {
    id: "befiler",
    title: "Befiler",
    short: "Marketing / company site built with clean Bootstrap layout.",
    img: "/projects/befiler.png",
    alt: "Befiler website screenshot",
    
  },
];

// آپ کے ہوم پیج کو دیکھتے ہوئے، میں نے پرائمری کلر کے لیے ایک ٹیل وِنڈ کی کلاس فرض کی ہے: text-blue-800
// اگر آپ نے CSS Variables (جیسے --color-primary) استعمال کیے ہیں، تو آپ انہیں بھی استعمال کر سکتے ہیں۔

export default function Projects() {
  // ہوم پیج کے ہلکے گرے یا سفید بیک گراؤنڈ سے میچ کرنے کے لیے
  // section کا بیک گراؤنڈ تبدیل کیا گیا ہے۔
  // Dark mode کی کلاسز کو ہٹا کر یا انہیں section سے ہٹا کر سادہ رکھا گیا ہے۔
  return (
    <section
      id="projects"
      // ہوم پیج جیسا ہلکا بیک گراؤنڈ
      className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800" 
    >
      <div className="max-w-6xl mx-auto">
        {/* ہیڈنگ کو آپ کے ہوم پیج کی 'Muhammad Sajjad' ہیڈنگ کے سائز اور نیلے رنگ کے قریب کیا گیا ہے۔ */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-700">
          Projects
        </h2>
        
        {/* سب ہیڈنگ کو آپ کے ہوم پیج کی 'React Developer' کے لال رنگ سے میچ کرانے کے لیے (text-red-600) اور تھوڑا بولڈ کیا گیا ہے۔ */}
        <p className="text-xl font-semibold text-center text-red-600 mb-10">
          Selected Works
        </p>

        <p className="text-center text-base text-gray-600 mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've built using **React, Tailwind, and JavaScript**. Each project demonstrates my ability to create responsive and modern web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              // کارڈ کو سادہ سفید بیک گراؤنڈ، ہلکا شیڈو اور rounded-2xl سے مزید جدید شکل دی گئی ہے۔
              className="group overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 w-full bg-gray-100 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                {/* پروجیکٹ ٹائٹل کو bold اور تھوڑا بڑا کیا گیا ہے۔ */}
                <h3 className="text-xl font-bold mb-2 text-blue-700">
                  {p.title}
                </h3>
                {/* شارٹ ڈسکرپشن کو صاف گرے کلر دیا گیا ہے۔ */}
                <p className="text-sm text-gray-500 mb-4">{p.short}</p>

                <div className="flex flex-wrap gap-2">
                  {/* Tags کے لیے نیلے رنگ کا ہلکا بیک گراؤنڈ استعمال کیا گیا ہے جو تھیم سے match کرتا ہے۔ */}
                 
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* مزید پروجیکٹس کے لیے کال ٹو ایکشن بٹن */}
        <div className="text-center mt-16">
            <a 
                href="#" // یہاں آپ اپنے GitHub یا مزید کام کے لنک دے سکتے ہیں۔
                className="inline-block px-8 py-3 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
            >
                View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
}