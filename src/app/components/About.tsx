import React from "react";
import { motion } from "framer-motion";
import Amit from "@/assets/amit-profile-pic.webp";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div
        className="absolute inset-0 bg-gray-100 z-0"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div className="text-white pb-12 lg:pb-24 order-2 lg:order-1 mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl text-black font-semibold mb-10 tracking-tighter leading-none"
            >
              About <span className="text-gray-400">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 max-w-xl text-gray-500 text-lg font-light leading-relaxed"
            >
              <p>
                I'm a passionate product designer with over 1.5 years of
                experience creating user-centered designs that make a
                difference. My journey in design started with a fascination for
                how people interact with products.
              </p>

              <p>
                I specialize in user research, interaction design, and design
                systems. My approach combines empathy, data-driven insights, and
                creative thinking to solve complex problems at scale.
              </p>
            </motion.div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-3 text-[#1e60ff]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 py-2 px-4 border border-[#1e60ff] rounded-full">
                {" "}
                Design Strategy
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 py-2 px-4 border border-[#1e60ff] rounded-full">
                User Research
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60 py-2 px-4 border border-[#1e60ff] rounded-full">
                Visual Systems
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md lg:max-w-lg overflow-visible">
              <img
                src={Amit}
                alt="Amit Singh Profile"
                className="w-full h-auto rounded-xl object-cover transform scale-110 lg:scale-[1.2] origin-bottom "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
