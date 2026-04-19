import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "bookly",
    title: "Bookly",
    summary:
      "A digital library experience reimagining how students discover and manage academic resources.",
    category: "Product Design • UX Research",
    image:
      "https://images.unsplash.com/photo-1666723043169-22e29545675c?auto=format&fit=crop&q=80&w=1080",
    link: "https://www.linkedin.com/posts/iamit7245_bookly-ux-design-activity-7112034410864327680-9n1X",
  },
  {
    id: "tnp-ranchi",
    title: "TnP IIIT Ranchi",
    summary:
      "Streamlining the placement workflow for one of India's premier technical institutes.",
    category: "UI Design • User Research • Prototyping",
    image:
      "https://framerusercontent.com/images/YWCGXJkn097MPrEnBlnYKbgvOW8.png?scale-down-to=1024",
    link: "https://www.linkedin.com/posts/iamit7245_tnp-iiitranchi-ux-design-activity-7112034410864327680-9n1X",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
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
              Selected <span className="text-gray-400">Works</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-500 max-w-sm font-light leading-relaxed"
          >
            A curated selection of digital experiences built with intent and
            minimalism.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-[#1e60ff]/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 mix-blend-difference">
                  <span className="text-white font-mono text-sm tracking-widest opacity-40">
                    0{index + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#1e60ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-10 flex justify-between items-start px-2">
                <div className="max-w-[80%]">
                  <h3 className="text-3xl font-semibold text-black tracking-tight transition-colors duration-300 group-hover:text-[#1e60ff]">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.2em] mt-4">
                    {project.category}
                  </p>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.link) window.open(project.link, "_blank");
                    else navigate(`/projects/${project.id}`);
                  }}
                  className="relative p-4 rounded-full border border-gray-100 overflow-hidden group-hover:border-[#1e60ff] transition-all duration-500"
                >
                  <ArrowUpRight className="w-5 h-5 text-black relative z-10 group-hover:text-white transition-colors duration-500" />
                  <div className="absolute inset-0 bg-[#1e60ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </div>
              </div>

              <div className="mt-8 h-[1px] w-full bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1e60ff] translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
