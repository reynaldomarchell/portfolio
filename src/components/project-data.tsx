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

export type projectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  tools: React.ReactNode;
};

export const projectData: projectType[] = [
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
