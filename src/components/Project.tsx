import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiNextui,
  SiFramer,
  SiLeaflet,
  SiPhp,
  SiLaravel,
  SiBootstrap,
} from "react-icons/si";

type projectType = {
  title: string;
  description: string;
  link: string;
  tools: React.ReactNode;
};

const projectData: projectType[] = [
  {
    title: "Chat Nindi",
    description:
      "💌 Nindi is an 2D AI assistant who can accompany you when you're lonely.",
    link: "https://github.com/reynaldomarchell/chat-nindi.git",
    tools: (
      <>
        <SiTypescript />
        <SiReact />
      </>
    ),
  },
  {
    title: "Restoranku",
    description:
      "Restoranku is a powerful dashboard page designed to assist restaurant owners in efficiently monitoring and managing their operations.",
    link: "https://github.com/reynaldomarchell/restoranku.git",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
        <SiExpress />
        <SiMysql />
        <SiTailwindcss />
        <SiNextui />
        <SiFramer />
      </>
    ),
  },
  {
    title: "BIMSQ Sort Visualizer",
    description:
      "BIMSQ is an abbreviation for Bubble Sort, Insertion Sort, Merge Sort, Selection Sort, and Quick Sort. This app will display a visualization of the five types of sorting above.",
    link: "https://bimsq-sort.vercel.app/",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
        <SiTailwindcss />
      </>
    ),
  },
  {
    title: "Bantur",
    description:
      "Introducing Bandung City Tour—a meticulously crafted itinerary designed to showcase the city highlights.",
    link: "https://github.com/reynaldomarchell/bantur.git",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
        <SiLeaflet />
      </>
    ),
  },
  {
    title: "Movie List",
    description: "Create a list for your favorite movies.",
    link: "https://github.com/reynaldomarchell/movie-list",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
      </>
    ),
  },
  {
    title: "Apparance",
    description:
      'E-commerce project "Apparance" is a online fashion shop for selling or buying clothes, hoodie, sneakers, etc.',
    link: "https://github.com/reynaldomarchell/FinalProject-BackendDevelopment-2022.git",
    tools: (
      <>
        <SiPhp />
        <SiLaravel />
        <SiMysql />
        <SiBootstrap />
      </>
    ),
  },
  {
    title: "To-do",
    description:
      "To-do list web page using PHP and MySQL as a database for storing user account and each user task.",
    link: "https://github.com/reynaldomarchell/MidProject-BackendDevelopment-2022.git",
    tools: (
      <>
        <SiPhp />
        <SiMysql />
      </>
    ),
  },
];

export default function Project() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl text-slate-50 font-semibold">
        Projects
      </h2>
      <div className="flex flex-col gap-3">
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
        <p className="flex gap-2 text-2xl">{tools}</p>
      </div>
    </Link>
  );
}
