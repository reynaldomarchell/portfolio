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
  SiPostgresql,
  SiPrisma,
  SiTrpc,
  SiReactquery,
  SiCloudflare,
} from "react-icons/si";

export type ProjectType = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github: string;
  tools?: React.ReactNode;
};

export const ProjectData: ProjectType[] = [
  {
    title: "NutriCek",
    description:
      "🍎 NutriCek is an AI-powered web application designed to help consumers quickly assess the nutritional content of packaged food and beverages.",
    image: "/nutricek.svg",
    link: "https://nutricek.rey.mba",
    github: "https://github.com/reynaldomarchell/nutricek.git",
    tools: (
      <>
        <SiTypescript />
        <SiNextdotjs />
        <SiPostgresql />
        <SiPrisma />
        <SiReactquery />
        <SiCloudflare />
        <SiTailwindcss />
        <SiShadcnui />
      </>
    ),
  },
  {
    title: "TransitPlus",
    description:
      "🚃 TransitPlus is a web-based application designed to provide a more interactive and engaging public transportation experience through point collection and reward redemption features.",
    image: "/transitplus.svg",
    link: "https://transitplus.rey.mba",
    github: "https://github.com/reynaldomarchell/interium-hack.git",
    tools: (
      <>
        <SiTypescript />
        <SiNextdotjs />
        <SiPostgresql />
        <SiPrisma />
        <SiTrpc />
        <SiReactquery />
        <SiTailwindcss />
        <SiShadcnui />
      </>
    ),
  },
  {
    title: "QuizAI",
    description:
      "📝 QuizAI is an AI-based quiz app designed to make learning more fun, challenging, automated, personalized and customizable.",
    image: "/quizai.svg",
    link: "https://quizai.jer.ee",
    github: "https://github.com/reynaldomarchell/srifoton-hack.git",
    tools: (
      <>
        <SiTypescript />
        <SiNextdotjs />
        <SiPostgresql />
        <SiPrisma />
        <SiTrpc />
        <SiReactquery />
        <SiTailwindcss />
        <SiShadcnui />
      </>
    ),
  },
  {
    title: "Chat Aoba",
    description: "💌 Aoba is a 2D AI assistant powered by a Gemini model",
    image: "/aoba.png",
    link: "https://aoba.rey.mba",
    github: "https://github.com/reynaldomarchell/chat-aoba.git",
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
    title: "YumeNime",
    description:
      "🌙 YumeNime is an ad-free and responsive anime streaming website created using Next.js",
    image: "/yumenime.png",
    link: "https://yumenime.rey.mba",
    github: "https://github.com/reynaldomarchell/yumenime.git",
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
    title: "Restoranku",
    description:
      "Restoranku is a powerful dashboard page designed to assist restaurant owners in efficiently monitoring and managing their operations.",
    image: "/restoranku.png",
    link: "https://restoranku.rey.mba",
    github: "https://github.com/reynaldomarchell/restoranku.git",
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
      "BIMSQ is an abbreviation for Bubble, Insertion, Merge, Selection, and Quick Sort. This app will display a visualization of the five types of sorting above.",
    image: "/bimsq.png",
    link: "https://bimsq.rey.mba",
    github: "https://github.com/reynaldomarchell/bimsq-sort.git",
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
    link: "https://bantur.rey.mba",
    github: "https://github.com/reynaldomarchell/bantur.git",
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
    image: "/movie-list.png",
    github: "https://github.com/reynaldomarchell/movie-list.git",
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
    github:
      "https://github.com/reynaldomarchell/FinalProject-BackendDevelopment-2022.git",
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
    github:
      "https://github.com/reynaldomarchell/MidProject-BackendDevelopment-2022.git",
    tools: (
      <>
        <SiPhp />
        <SiMysql />
      </>
    ),
  },
];
