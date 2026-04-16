import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Code, Eye } from "lucide-react";
import { ProjectType } from "@/data/ProjectData";

interface ProjectDetailsProps {
  project: ProjectType;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { title, description, image, link, github, tools, features } = project;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
          {title}
        </h1>
      </div>

      {/* Project Image */}
      {image && (
        <div className="mb-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
            priority
          />
        </div>
      )}

      {/* Project Actions */}
      <div className="flex flex-wrap gap-4 mb-8">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors duration-300 font-semibold"
          >
            <Eye className="w-5 h-5" />
            View Live Project
            <ExternalLink className="w-4 h-4" />
          </Link>
        )}
        <Link
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-200 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors duration-300 font-semibold"
        >
          <Github className="w-5 h-5" />
          View Source Code
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Technologies Used */}
      {tools && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-50 mb-4 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 text-2xl text-slate-300">
            {tools}
          </div>
        </div>
      )}

      {/* Project Details Section */}
      <div className="mb-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-50 mb-3">
            Project Overview
          </h3>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>

        {features && features.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-50 mb-3">
              Key Features
            </h3>
            <ul className="text-slate-300 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
