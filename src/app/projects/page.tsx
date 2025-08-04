import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectData } from "@/data/ProjectData";
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            All Projects
          </h1>
          <p className="text-lg text-slate-300">
            Explore my complete collection of projects, showcasing various
            technologies and solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export const metadata = {
  title: "All Projects - Portfolio",
  description: "Explore my complete collection of projects and applications.",
};
