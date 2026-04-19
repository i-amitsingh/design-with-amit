import {
  ArrowRight,
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "नमस्ते",
  "Ciao",
  "Hallo",
  "ನಮಸ್ಕಾರ",
];

export function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-32 md:pt-40 pb-20"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50 mb-8 md:mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1e60ff]" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
              Available for new projects
            </span>
          </motion.div>

          <div className="mb-8">
            <div className="h-12 md:h-16 overflow-hidden mb-2">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={greetings[greetingIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-5xl font-light text-gray-400 tracking-tight"
                >
                  {greetings[greetingIndex]},
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-medium text-black leading-none tracking-tighter">
                I'm Amit
              </h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed"
          >
            Product Designer specializing in high-performance digital
            experiences. Currently shaping the future of sports-tech at{" "}
            <span className="text-black font-medium">CricIQ</span>.
          </motion.p>

          <div className="flex flex-col items-center gap-8 mb-20">
            <a
              href="#projects"
              className="group relative px-10 md:px-12 py-5 text-black border border-black rounded-full overflow-hidden transition-all duration-500 ease-in-out active:scale-95 hover:border-[#1e60ff] hover:text-white flex items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em]">
                Explore Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
              <div className="absolute inset-0 bg-[#1e60ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </a>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-100 pt-10">
            {[
              { label: "Experience", val: "1.5 Years" },
              { label: "Delivered", val: "09 Projects" },
              { label: "Recognition", val: "05 Clients" },
            ].map((stat, i) => (
              <div
                key={i}
                className="py-6 md:py-0 text-center border-b md:border-b-0 md:border-r last:border-0 border-gray-50"
              >
                <p className="text-3xl font-medium text-black">{stat.val}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
