import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#events", label: "Events" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center py-6">
      <nav
        className={`relative flex items-center justify-between px-6 transition-all duration-500 ease-in-out ${scrolled
          ? "w-[95%] max-w-5xl rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3"
          : "w-full max-w-7xl bg-transparent py-4"
          }`}
      >
        <a
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl logo text-black font-semibold tracking-tight whitespace-nowrap"
        >
          Amit Singh
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-gray-500 hover:text-[#1e60ff] transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1e60ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div className="h-4 w-[1px] bg-gray-200 mx-2" />

          <a
            href="mailto:amitmansingh2003@mail.com"
            className="px-6 py-2.5 bg-black text-white text-[12px] font-medium uppercase tracking-widest rounded-full hover:bg-[#1e60ff] transition-all duration-300 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <a
            href="mailto:amitmansingh2003@mail.com"
            className="px-5 py-2 bg-black text-white text-[10px] font-medium uppercase tracking-widest rounded-full active:scale-95"
          >
            Hire Me
          </a>

          <button
            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 mx-2 p-8 bg-white/95 backdrop-blur-2xl rounded-[32px] border border-gray-100 shadow-2xl lg:hidden flex flex-col gap-6 items-center"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold text-black hover:text-[#1e60ff] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}