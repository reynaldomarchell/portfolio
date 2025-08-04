import React from "react";
import { notFound } from "next/navigation";
import { ProjectData } from "@/data/ProjectData";
import ProjectDetails from "@/components/ProjectDetails";
import PageWrapper from "@/components/PageWrapper";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return ProjectData.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  // Find the project based on the slug
  const project = ProjectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <ProjectDetails project={project} />
    </PageWrapper>
  );
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = ProjectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
  };
}
