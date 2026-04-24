import React from "react";
import { motion, Variants } from "framer-motion";
import criciqLogo from "@/assets/criciq.png";
import sophrosyneLogo from "@/assets/Sophrosyne.jpeg";
import saarthiLogo from "@/assets/Saarthi.jpeg";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  accentColor: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Design Consultant",
    company: "cricIQ",
    period: "March 2026 - Present",
    description:
      "Designed and developed performance analysis features at cricIQ, enabling tracking of bowlers’ speed, consistency, and progress over time. Built intuitive dashboards that transformed raw performance data into clear, actionable insights for users. Created end-to-end user experiences for performance monitoring, including speed tracking and trend analysis.",
    logo: criciqLogo,
    accentColor: "#2196F3",
  },
  {
    title: "Product Designer - I",
    company: "Sophrosyne Technologies",
    period: "Apr 2025 - Present",
    description:
      "Designed and delivered the complete UX/UI for a Remote Patient Monitoring System tailored for users aged 40+, including login/signup, dashboards, settings, and notification flows across both patient and doctor interfaces. Created high-fidelity prototypes and design systems in Figma, prioritizing accessibility and real-time health metrics.",
    logo: sophrosyneLogo,
    accentColor: "#3ED0BB",
  },
  {
    title: "User Experience Designer",
    company: "Saarthi",
    period: "Sep 2024 - Mar 2025",
    description:
      "Designed both mobile app and website end-to-end for a job-hunting platform. Created wireframes, interactive prototypes, and complete UI designs focused on helping students discover opportunities easily and build strong career profiles.",
    logo: saarthiLogo,
    accentColor: "#D91F26",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-semibold text-black tracking-tighter leading-none"
            >
              Professional <span className="text-gray-400">Path</span>
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
          className="space-y-6"
        >
          {experiences.map((exp, index) => {
            const isCricIQ = exp.company === "cricIQ";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{ "--accent": exp.accentColor } as React.CSSProperties}
                className="group relative bg-white border border-gray-100 rounded-[40px] p-8 md:p-14 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-default"
              >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative z-10">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[20px] overflow-hidden bg-white border border-gray-100 p-3 shadow-sm">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-3xl font-semibold text-black tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="h-px w-6 bg-[var(--accent)] opacity-30"></span>
                          <p className="text-[var(--accent)] font-semibold text-xs uppercase tracking-[0.2em]">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {!isCricIQ && exp.period && (
                        <span className="inline-flex items-center w-fit whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest text-gray-500 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-lg font-light leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-10 right-10 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${exp.accentColor}66, transparent)`
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}