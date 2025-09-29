"use client";

import React, { useState } from "react";
import { ProjectData } from "@/data/ProjectData";
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>
        <div className="max-w-4xl mx-auto">
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
          <div className="flex flex-col gap-6">
            {ProjectData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
