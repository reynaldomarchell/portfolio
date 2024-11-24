import React from "react";
import { ProjectData } from "@/data/ProjectData";
import FlippableProjectCard from "./FlippableProjectCard";

export default function Project() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl md:text-2xl text-slate-50 font-semibold">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ProjectData.map((project) => (
          <FlippableProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
