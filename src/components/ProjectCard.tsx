"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/data/ProjectData";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  tools,
}: ProjectType) => {
  const projectSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/projects/${projectSlug}`} className="block group">
      <div className="border rounded-md flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 bg-slate-950 cursor-pointer hover:border-slate-700 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
        {image && (
          <div className="w-full md:w-48 lg:w-56 h-48 md:h-32 lg:h-36 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              width={1040}
              height={880}
              unoptimized
              className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        )}
        <div className="flex flex-col justify-between h-full gap-3 flex-1">
          <div className="space-y-3">
            <div className="border-b-2 border-slate-700 pb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-50 group-hover:text-slate-200 transition-colors">
                {title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex gap-2 text-lg sm:text-xl md:text-2xl text-slate-400 group-hover:text-slate-300 transition-colors">
            {tools}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
