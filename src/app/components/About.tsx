import { motion } from "framer-motion";
import Amit from "@/assets/Amit-Profile-Pic.webp";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* DOT BG */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

          {/* LEFT CONTENT (UNCHANGED) */}
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
              <p className="text-lg leading-8 text-gray-700">
                Hi, I’m{" "}
                <span className="highlight-primary">Amit Singh</span>, a{" "}
                <span className="highlight-soft">Product Designer</span> based in{" "}
                <span className="highlight-strong">Bengaluru, India</span>,
                working with{" "}
                <span className="highlight-primary">early-stage startups</span>,to turn ideas into scalable digital products.
              </p>

              <p className="text-lg leading-8 text-gray-700">
                I specialize in <span className="highlight-primary">UI/UX design, product thinking, and building design systems</span>  that improve consistency and speed across teams. I’ve worked on end-to-end product experiences-from onboarding flows to complex dashboards-focusing on <span className="highlight-soft">clarity, usability, and real-world impact</span>.
              </p>

              <p className="text-lg leading-8 text-gray-700">My approach combines <span className="highlight-soft">user-centered design, structured problem-solving, and rapid iteration</span> to create experiences that are simple, effective, and built to scale.</p>
            </motion.div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-full max-w-md bg-white rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-4 hover:scale-[1.02] transition duration-500">

              {/* IMAGE */}
              <div className="rounded-[24px] overflow-hidden">
                <img
                  src={Amit}
                  alt="Amit Singh Profile"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* PROFILE FOOTER */}
              <div className="flex items-center justify-center mt-4 px-2">

                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      @amit_singh
                    </p>
                    <p className="text-xs text-gray-500">
                      Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}