import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Events } from "./components/Events";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { CaseStudy } from "./components/CaseStudy";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}