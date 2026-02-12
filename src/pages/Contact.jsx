import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#020202] transition-all duration-700 overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Header Module */}
      <div className="relative z-10 mb-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-0"
        >
        
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
          Get in <span className="text-zinc-800 italic">Touch.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-6xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-0 border-l-4 border-blue-600 pl-4">Contact Me</h2>
            
            {[
              { icon: <Mail size={20} />, label: "Email", value: "aliniaxi1234@gmail.com", link: "mailto:aliniaxi1234@gmail.com" },
              { icon: <Phone size={20} />, label: "Phone", value: "+92 3032681310", link: "tel:+923032681310" },
              { icon: <MapPin size={20} />, label: "Location", value: "Mianwali, Pakistan", link: "#" }
            ].map((node, i) => (
              <motion.a
                key={i}
                href={node.link}
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-zinc-800 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {node.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{node.label}</p>
                  <p className="text-zinc-200 font-bold">{node.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Array */}
          <div className="flex gap-4 pt-6">
            {[
              { icon: <Github size={22} />, url: "https://github.com/muhammadsajjad381" },
              { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/muhammad-sajjad-4aa2212b7/" },
              { icon: <Facebook size={22} />, url: "https://www.facebook.com/muhammad.sajjad.955088" }
            ].map((soc, i) => (
              <motion.a
                key={i}
                href={soc.url}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
              >
                {soc.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <form className="space-y-4 p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-xl relative overflow-hidden group">
            {/* Subtle Inner Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/5 blur-[80px] group-hover:bg-blue-600/10 transition-all" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[14px] font-mono text-zinc-500 uppercase ml-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter you name"
                  className="w-full p-4 rounded-xl bg-zinc-900/50 text-white border border-zinc-800 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-mono text-zinc-500 uppercase ml-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-xl bg-zinc-900/50 text-white border border-zinc-800 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-mono text-zinc-500 uppercase ml-2">Message</label>
              <textarea
                rows="5"
                placeholder="Brief your project requirements..."
                className="w-full p-4 rounded-xl bg-zinc-900/50 text-white border border-zinc-800 focus:outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3"
            >
              <Send size={16} />
              Transmit Message
            </motion.button>
          </form>
        </motion.div>
      </div>

     
    </section>
  );
}

