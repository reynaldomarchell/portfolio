import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SiReact, SiVite } from "react-icons/si";

type projectType = {
  title: string;
  description: string;
  link: string;
  tools: React.ReactNode;
};

const projectData: projectType[] = [
  {
    title: "Movie List",
    description: "Create a list for your favorite movies",
    link: "https://github.com/reynaldomarchell/movie-list",
    tools: (
      <>
        <SiReact />
        <SiVite />
      </>
    ),
  },
];

export default function Project() {
  return (
    <div className="flex flex-col gap-4 flex-grow">
      <h2 className="text-xl md:text-2xl text-slate-50 font-semibold">
        Projects
      </h2>
      <div>
        {projectData.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ title, description, link, tools }: projectType) {
  return (
    <Link href={link}>
      <div className="border py-4 px-3 rounded-md space-y-2 hover:cursor-pointer hover:-translate-y-1 hover:translate-x-1 hover:transition-all hover:duration-500 hover:bg-slate-900 hover:text-slate-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <ChevronRight />
        </div>
        <p>{description}</p>
        <p className="flex gap-2">{tools}</p>
      </div>
    </Link>
  );
}
