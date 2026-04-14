import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectData } from "@/data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function Project() {
  // Show only first 4 projects on homepage
  const featuredProjects = ProjectData.slice(0, 4);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl text-slate-50 font-semibold">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-300 group"
        >
          <span className="text-sm md:text-base">View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
