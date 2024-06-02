"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectData, projectType } from "./project-data";
import { useEffect, useState } from "react";

export default function Project() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl md:text-2xl text-slate-50 font-semibold">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

function ProjectItem({ title, description, image, link, tools }: projectType) {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="border py-4 px-3 rounded-md flex flex-col gap-2 justify-start hover:cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-500 hover:bg-slate-900 hover:text-slate-50 h-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover h-36 md:h-48 w-full rounded-md"
        />
        <div className="flex flex-col justify-between h-full gap-2">
          <div className="flex gap-2 items-center border-b-2 py-2">
            <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
            <ExternalLink />
          </div>
          <p>{description}</p>
          <p className="flex gap-2 text-2xl">{tools}</p>
        </div>
      </div>
    </Link>
  );
}
