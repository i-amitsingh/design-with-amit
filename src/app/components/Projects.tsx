import React from "react";
import {
  Sparkles,
  Layout,
  Share2,
  FileText,
  Search,
  Activity,
  PlusCircle,
  Database,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
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
    id: "sehatsetu",
    title: "SehatSetu",
    summary:
      "A healthcare revolution for the fragmented Indian medical ecosystem. Organising medical records and history through an intuitive, accessible mobile interface designed for impact.",
    category: "HealthTech / Product Design",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080",
    link: "https://mini-snowshoe-f7b.notion.site/SehatSetu-Health-Records-Management-App-2ba6a88bfb95809b9296ecafc610af12",
    bgClass: "bg-[#F0F9F6]",
    accentText: "text-[#0D9488]",
    accentBg: "bg-[#0D9488]",
    tools: [
      { name: "UX Strategy", icon: <Activity size={20} /> },
      { name: "Health Records", icon: <Database size={20} /> },
      { name: "User Research", icon: <Search size={20} /> },
      { name: "Prototyping", icon: <PlusCircle size={20} /> },
    ],
  },
  {
    id: "bookly",
    title: "Bookly",
    summary:
      "A digital library experience reimagining how students discover and manage academic resources.",
    category: "Product Design",
    image:
      "https://images.unsplash.com/photo-1666723043169-22e29545675c?auto=format&fit=crop&q=80&w=1080",
    link: "https//www.google.com",
    bgClass: "bg-[#E8EEFF]",
    accentText: "text-[#3B65F5]",
    accentBg: "bg-[#3B65F5]",
    tools: [
      { name: "Figma", icon: <Layout size={20} /> },
      { name: "Research", icon: <Search size={20} /> },
      { name: "Prototyping", icon: <Sparkles size={20} /> },
      { name: "Documentation", icon: <FileText size={20} /> },
    ],
  },
];

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group">
      <div
        className={`w-full ${project.bgClass} rounded-[48px] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center transition-all duration-700 ease-in-out border border-transparent hover:border-black/5 hover:shadow-2xl hover:shadow-black/5`}
      >
        <div className="w-full lg:w-[48%] flex flex-col justify-center order-2 lg:order-1">
          
          <div className="mb-8">
            <span className={`${project.accentText} font-bold text-xs uppercase tracking-[0.25em] mb-6 block`}>
              {project.category}
            </span>

            <h3 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#111827] mb-8 leading-[0.95] tracking-tighter">
              {project.title}
            </h3>

            <p className="text-[#4B5563] text-xl md:text-2xl leading-relaxed max-w-lg font-light">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            {project.tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-4 text-[#111827]/80 font-medium">
                <span className={`p-3 bg-white/60 rounded-2xl shadow-sm border border-white/40 ${project.accentText}`}>
                  {tool.icon}
                </span>
                <span className="text-[17px] tracking-tight">{tool.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className="group/btn relative self-start cursor-pointer px-10 py-5 border border-black rounded-full overflow-hidden transition-all duration-500 ease-in-out active:scale-95 flex items-center gap-3 bg-transparent"
          >
            <span className="relative z-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 group-hover/btn:text-white">
              View Case Study
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
              />
            </span>

            {/* Dynamic hover bg */}
            <div
              className={`absolute inset-0 ${project.accentBg} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
            />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[52%] order-1 lg:order-2">
          <div className="relative w-full rounded-[32px] bg-white p-3 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] border border-black/[0.04] transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
            
            <div className="flex items-center gap-2 px-5 py-4 bg-[#F9FAFB] rounded-t-[24px] border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
              </div>

              <div className="mx-auto flex-1 text-center pr-10">
                <span className="text-[10px] font-bold text-gray-400 bg-white px-5 py-2 rounded-lg shadow-inner border border-gray-100 uppercase tracking-[0.2em]">
                  {project.id}
                </span>
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-b-[24px] overflow-hidden bg-gray-50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
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
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}