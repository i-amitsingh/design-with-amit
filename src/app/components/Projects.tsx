import React from "react";
import {
  Activity,
  Search,
  PlusCircle,
  Database,
  ArrowRight,
} from "lucide-react";
import booklyThumbnail from "@/assets/booklythumbnail.png";
import sehatsetuThumbnail from "@/assets/sehatSetuThumbnail.png"

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  image: string;
  link: string;
  bgClass: string;
  accentText: string;
  accentBg: string;
  tools: Tool[];
}

interface ProjectCardProps {
  project: Project;
}

export const projects: Project[] = [
  {
    id: "Bookly",
    title: "Bookly",
    tagline: "Turn reading intent into consistent habit",
    summary:
      "Designed a distraction-free reading experience for young users to help them read consistently in short, fragmented time slots.",
    category: "Product Design",
    image: booklyThumbnail,
    link: "https://www.notion.so/Bookly-UX-Case-Study-3526a88bfb9580e2a3aace7fa75a5f7a?source=copy_link",
    bgClass: "bg-[#F8FAFC]",
    accentText: "text-[#0D9488]",
    accentBg: "bg-[#0D9488]",
    tools: [
      { name: "User Research", icon: <Search size={18} /> },
      { name: "UX Strategy", icon: <Activity size={18} /> },
      { name: "Interaction Design", icon: <PlusCircle size={18} /> },
      { name: "Prototyping", icon: <Database size={18} /> },
    ],
  },
  {
    id: "SehatSetu",
    title: "SehatSetu",
    tagline: "Simplifying healthcare record management",
    summary:
      "Organised fragmented medical records into a structured, accessible system tailored for Indian users aged 40+.",
    category: "HealthTech / Product Design",
    image: sehatsetuThumbnail,
    link: "https://mini-snowshoe-f7b.notion.site/SehatSetu-Health-Records-Management-App-2ba6a88bfb95809b9296ecafc610af12",
    bgClass: "bg-[#F0F9F6]",
    accentText: "text-[#0D9488]",
    accentBg: "bg-[#0D9488]",
    tools: [
      { name: "User Research", icon: <Search size={18} /> },
      { name: "Information Architecture", icon: <Database size={18} /> },
      { name: "UX Strategy", icon: <Activity size={18} /> },
      { name: "Prototyping", icon: <PlusCircle size={18} /> },
    ],
  },
];

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      onClick={() => window.open(project.link, "_blank")}
      className="group cursor-pointer"
    >
      <div
        className={`w-full ${project.bgClass} rounded-[40px] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center transition-all duration-500 ease-in-out border border-transparent hover:border-black/5 hover:shadow-xs`}
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-8">
            {/* CATEGORY */}
            <span
              className={`${project.accentText} font-bold text-xs uppercase tracking-[0.25em] mb-4 block`}
            >
              {project.category}
            </span>

            {/* TITLE */}
            <h3 className="text-5xl md:text-6xl font-semibold text-[#111827] mb-4 leading-[1] tracking-tight">
              {project.title}
            </h3>

            {/* TAGLINE */}
            <p className="text-sm text-gray-500 font-medium mb-4">
              {project.tagline}
            </p>

            {/* SUMMARY */}
            <p className="text-lg md:text-lg text-[#4B5563] leading-relaxed max-w-lg font-light">
              {project.summary}
            </p>
          </div>

          {/* TOOLS */}
          <div className="flex flex-wrap gap-4 mb-10">
            {project.tools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[#111827]/80 font-medium"
              >
                <span
                  className={`p-2 bg-white rounded-xl shadow-sm border border-gray-100 ${project.accentText}`}
                >
                  {tool.icon}
                </span>
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button className="group/btn relative px-8 py-4 border border-black rounded-full overflow-hidden flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group-hover/btn:text-white">
                See How It Works
              </span>

              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:text-white"
              />

              <div
                className={`absolute inset-0 ${project.accentBg} translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300`}
              />
            </button>

            <p className="text-xs text-gray-400 mt-3">
              Includes research, flows & final designs
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[52%] order-1 lg:order-2">
          <div className="relative w-full rounded-[28px] bg-white p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-black/[0.04] transition-all duration-500">
            {/* TOP BAR */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F9FAFB] rounded-t-[20px] border-b border-gray-100">


              <div className="mx-auto text-center pr-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  {project.id}
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] rounded-b-[20px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s]"
              />


              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <p className="text-white text-sm">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-6xl font-semibold text-black tracking-tight leading-none">
            Selected <span className="text-gray-400">Work</span>
          </h2>

          <p className="text-lg text-gray-500 max-w-sm font-light leading-relaxed">
            A collection of impactful products solving real-world problems
            through research, strategy, and thoughtful design.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}