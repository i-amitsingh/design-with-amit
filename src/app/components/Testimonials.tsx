import React, { useState } from "react";
import { motion } from "framer-motion";
import damini from "@/assets/damini.jpeg";
import hardik from "@/assets/hardik.jpeg";
import kunal from "@/assets/kunal.jpeg";
import rono from "@/assets/rono.jpeg";
import aditya from "@/assets/aditya.jpeg";

const testimonials = [
  {
    name: "Aditya Panchal",
    role: "Founder, Saarthi",
    content:
      "Amit's ability to translate complex career-pathing AI into a simple, intuitive interface was impressive. He conducted deep UX research into the Indian graduate market, resulting in a minimalist 'Sequoia-inspired' aesthetic.",
    avatar: aditya,
  },
  {
    name: "Damini Agrawal",
    role: "Co-Founder, cricIQ",
    content:
      "As the designer for cricIQ, Amit solved the massive challenge of visualizing dense cricket performance data. His work is the primary reason our platform feels like a world-class product.",
    avatar: damini,
  },
  {
    name: "Hardik Panchal",
    role: "Senior Technical PM, NetApp",
    content:
      "Amit transformed our enterprise-level dashboards with a modern, user-centric approach. He managed to clean up complex system configurations and increase user engagement by 50%.",
    avatar: hardik,
  },
  {
    name: "Kunal Abhishek",
    role: "Co-Founder, SportzEngage",
    content:
      "Working with Amit was a game-changer for our product vision. High-fidelity prototyping allowed us to validate our core user flows quickly. He ensures the product logic makes sense.",
    avatar: kunal,
  },
  {
    name: "Rono Chakravarty",
    role: "Head of Creative, MPL",
    content:
      "Amit's attention to detail in visual branding is exceptional. He understands how to balance whitespace and bold accents to create a sense of urgency and professionalism.",
    avatar: rono,
  },
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-semibold text-black tracking-tighter leading-none"
            >
              Client <span className="text-gray-400">Impact</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-500 max-w-sm font-light leading-relaxed"
          >
            Insights and feedback from collaborators who’ve experienced the
            impact of my design work firsthand.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pb-10">
        <div
          className="flex gap-6 md:gap-8 w-max px-4 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {marqueeTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative w-[320px] md:w-[450px] flex-shrink-0 bg-gray-50 p-8 md:p-10 rounded-[32px] border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-[#1e60ff]/5 transition-all duration-500 cursor-pointer"
            >
              <div className="relative z-10 mb-10">
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black tracking-tight leading-tight group-hover:text-[#1e60ff] transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#1e60ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
