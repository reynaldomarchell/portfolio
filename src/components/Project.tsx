import Link from "next/link";
import { ExternalLink } from "lucide-react";
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
  SiDaisyui,
  SiNextdotjs,
  SiShadcnui,
} from "react-icons/si";
import Image from "next/image";

type projectType = {
  title: string;
  description: string;
  image?: string;
  link: string;
  tools?: React.ReactNode;
};

const projectData: projectType[] = [
  {
    title: "YumeNime",
    description:
      "🌙 YumeNime is an ad-free and responsive anime streaming website created using Next.js",
    image: "/yumenime.png",
    link: "https://yumenime.vercel.app",
    tools: (
      <>
        <SiTypescript />
        <SiNextdotjs />
        <SiTailwindcss />
        <SiShadcnui />
      </>
    ),
  },
  {
    title: "Chat Aoba",
    description: "💌 Aoba is a 2D AI assistant powered by a Gemini model",
    image: "/aoba.png",
    link: "https://chat-aoba.vercel.app",
    tools: (
      <>
        <SiTypescript />
        <SiReact />
        <SiExpress />
        <SiTailwindcss />
        <SiDaisyui />
      </>
    ),
  },
  {
    title: "BIMSQ Sort Visualizer",
    description:
      "BIMSQ is an abbreviation for Bubble, Insertion, Merge, Selection, and Quick Sort. This app will display a visualization of the five types of sorting above.",
    image: "/bimsq.png",
    link: "https://bimsq-sort.vercel.app",
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
    image: "/bantur.png",
    link: "https://bantur.vercel.app",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
        <SiLeaflet />
      </>
    ),
  },
  {
    title: "Restoranku",
    description:
      "Restoranku is a powerful dashboard page designed to assist restaurant owners in efficiently monitoring and managing their operations.",
    image: "/restoranku.png",
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
    title: "Movie List",
    description: "Create a list for your favorite movies.",
    image: "/movie-list.png",
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
    image: "/apparance.png",
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
    image: "/todo.png",
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
  );
}

function ProjectItem({ title, description, image, link, tools }: projectType) {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="border py-4 px-3 rounded-md flex flex-col gap-2 justify-start hover:cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-500 hover:bg-slate-900 hover:text-slate-50 h-full">
        {image && (
          <Image
            src={image}
            alt={title}
            width={1040}
            height={880}
            unoptimized
            className="object-cover h-36 md:h-48 w-full rounded-md"
          />
        )}
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
