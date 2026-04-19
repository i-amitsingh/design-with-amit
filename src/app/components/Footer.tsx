import React from "react";
import { Linkedin, Mail, Twitter, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#events", label: "Events" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/iamit7245/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/iamit7245",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:amitmansingh2003@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9]"
            >
              Let's build <br />
              <span className="text-gray-500">something.</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="mailto:amitmansingh2003@gmail.com"
            className="group relative w-full md:w-auto px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
          >
            <span className="relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors duration-300">
              Get in touch
            </span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors duration-300">
              <ArrowUpRight
                size={14}
                className="text-white group-hover:text-[#1e60ff] transition-colors duration-300"
              />
            </div>

            <div className="absolute inset-0 bg-[#1e60ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </motion.a>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#home"
                className="text-2xl font-medium tracking-tight text-white mb-6 inline-block logo"
              >
                Amit Singh
              </a>
              <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed mb-8">
                Product Designer specializing in high-performance digital
                experiences, visual identity, and functional minimalism.
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-mono uppercase tracking-widest">
              <a href="mailto:amitmansingh2003@gmail.com">
                <span>amitmansingh2003@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-8">
              Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors relative group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-8">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 border border-gray-700 rounded-full px-4 py-2 w-max">
              <Sparkles className="w-3.5 h-3.5 " />
              <span className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">
                Available for freelance
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
