import React from "react";
import { motion } from "framer-motion";
import criciqLogo from "@/assets/criciq.png";
import sophrosyneLogo from "@/assets/Sophrosyne.jpeg";
import saarthiLogo from "@/assets/Saarthi.jpeg";

const experiences = [
  {
    title: "Product Designer - Consultant",
    company: "cricIQ",
    period: "March 2026 - Present",
    description:
      "Designed and developed performance analysis features at CricIQ, enabling tracking of bowlers’ speed, consistency, and progress over time. Built intuitive dashboards that transformed raw performance data into clear, actionable insights for users. Created end-to-end user experiences for performance monitoring, including speed tracking and trend analysis.",
    logo: criciqLogo,
  },
  {
    title: "Product Designer - I",
    company: "Sophrosyne Technologies",
    period: "Apr 2025 - Present",
    description:
      "Designed and delivered the complete UX/UI for a Remote Patient Monitoring System tailored for users aged 40+, including login/signup, dashboards, settings, and notification flows across both patient and doctor interfaces. Created high-fidelity prototypes and design systems in Figma, prioritizing accessibility and real-time health metrics.",
    logo: sophrosyneLogo,
  },
  {
    title: "User Experience Designer",
    company: "Saarthi",
    period: "Sep 2024 - Mar 2025",
    description:
      "Designed both mobile app and website end-to-end for a job-hunting platform. Created wireframes, interactive prototypes, and complete UI designs focused on helping students discover opportunities easily and build strong career profiles.",
    logo: saarthiLogo,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
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
              Professional <span className="text-[#1e60ff]">Path</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-500 max-w-sm font-light leading-relaxed"
          >
            A journey of crafting meaningful user experiences, solving
            real-world problems, and continuously evolving as a designer.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {experiences.map((exp, index) => {
            const isCricIQ = exp.company === "cricIQ";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative border border-gray-100 rounded-[32px] p-8 md:p-12 transition-all duration-500 hover:bg-gray-50/50 hover:border-gray-200"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-gray-100 p-2 shadow-sm">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-3xl font-semibold text-black tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="text-[#1e60ff] font-mono text-xs uppercase tracking-[0.2em] mt-2">
                          {exp.company}
                        </p>
                      </div>

                      {!isCricIQ && exp.period && (
                        <span className="inline-flex items-center w-fit whitespace-nowrap text-[11px] font-mono uppercase tracking-widest text-gray-400 border border-gray-200 px-4 py-2 rounded-full">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#1e60ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
