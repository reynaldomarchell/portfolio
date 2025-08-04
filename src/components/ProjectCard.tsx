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
      <div className="border py-4 px-3 rounded-md flex flex-col gap-3 h-[380px] sm:h-[400px] md:h-[420px] bg-slate-950 cursor-pointer hover:border-slate-700 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
        {image && (
          <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-md">
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
        <div className="flex flex-col justify-between h-full gap-2">
          <div className="flex gap-2 items-center border-b-2 py-2">
            <h3 className="text-base sm:text-lg font-semibold text-slate-50 group-hover:text-slate-200 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-300 line-clamp-3 leading-relaxed">
            {description}
          </p>
          <div className="flex gap-2 text-lg sm:text-xl md:text-2xl text-slate-400 group-hover:text-slate-300 transition-colors">
            {tools}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
