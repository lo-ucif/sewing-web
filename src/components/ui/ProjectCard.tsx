import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block relative overflow-hidden bg-[#111111] rounded-md shadow-md transition-all duration-500 ease-out"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-75"
          loading="lazy"
        />
      </div>

      {/* Luxury Border Overlay */}
      <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 z-10 pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent flex flex-col justify-end p-6 md:p-8 z-10 transition-opacity duration-300">
        {/* Category tag */}
        <span className="text-[#c8a96a] text-xs font-sans tracking-widest uppercase mb-2">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-white font-serif text-xl md:text-2xl leading-snug tracking-wide mb-1 group-hover:text-[#c8a96a] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short details */}
        <div className="flex items-center justify-between overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <p className="text-white/60 text-xs font-sans">
            {project.date} • {project.specs.serviceType || "Bespoke"}
          </p>
          <span className="text-[#c8a96a] flex items-center text-xs tracking-wider uppercase font-sans font-medium gap-1">
            Explore{" "}
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
