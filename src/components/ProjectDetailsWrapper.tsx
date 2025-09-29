"use client";

import React, { useState } from "react";
import ProjectDetails from "@/components/ProjectDetails";
import FloatingTabs from "@/components/FloatingTabs";
import { ProjectType } from "@/data/ProjectData";

interface ProjectDetailsWrapperProps {
  project: ProjectType;
}

export default function ProjectDetailsWrapper({
  project,
}: ProjectDetailsWrapperProps) {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectDetails project={project} />
    </>
  );
}
