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
  SiInertia,
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
    title: "Chat Aoba",
    description: "💌 Aoba is a 2D AI assistant powered by a Gemini model",
    image: "/aoba.png",
    link: "https://aoba.rey.mba",
    github: "https://github.com/reynaldomarchell/chat-aoba",
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
    title: "ConnectFriend",
    description:
      "👥 ConnectFriend is a social networking platform designed to help users connect with like-minded individuals based on shared hobbies and interests. It provides a fun and interactive way to make new friends and expand your social circle.",
    image: "/connectfriend.svg",
    link: "https://connectfriend.rey.mba",
    github: "https://github.com/reynaldomarchell/connect-friend",
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
    title: "GreenRise",
    description:
      "🌱 GreenRise is a web application dedicated to facilitating donations for environmental causes. We connect users with impactful events and provide a secure platform for contributing to a greener future.",
    image: "/greenrise.svg",
    link: "https://greenrise.rey.mba",
    github: "https://github.com/reynaldomarchell/greenrise",
    tools: (
      <>
        <SiTypescript />
        <SiPhp />
        <SiLaravel />
        <SiReact />
        <SiInertia />
        <SiMysql />
        <SiTailwindcss />
        <SiShadcnui />
      </>
    ),
  },
  {
    title: "NutriCek",
    description:
      "🍎 NutriCek is an AI-powered web application designed to help consumers quickly assess the nutritional content of packaged food and beverages.",
    image: "/nutricek.svg",
    link: "https://nutricek.rey.mba",
    github: "https://github.com/reynaldomarchell/nutricek",
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
    title: "QuizAI",
    description:
      "📝 QuizAI is an AI-based quiz app designed to make learning more fun, challenging, automated, personalized and customizable.",
    image: "/quizai.svg",
    link: "https://quizai.rey.mba",
    github: "https://github.com/reynaldomarchell/srifoton-hack",
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
    title: "TransitPlus",
    description:
      "🚃 TransitPlus is a web-based application designed to provide a more interactive and engaging public transportation experience through point collection and reward redemption features.",
    image: "/transitplus.svg",
    link: "https://transitplus.rey.mba",
    github: "https://github.com/reynaldomarchell/interium-hack",
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
    title: "Restoranku",
    description:
      "Restoranku is a powerful dashboard page designed to assist restaurant owners in efficiently monitoring and managing their operations.",
    image: "/restoranku.png",
    link: "https://restoranku.rey.mba",
    github: "https://github.com/reynaldomarchell/restoranku",
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
    github: "https://github.com/reynaldomarchell/bimsq-sort",
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
    github: "https://github.com/reynaldomarchell/bantur",
    tools: (
      <>
        <SiJavascript />
        <SiReact />
        <SiLeaflet />
      </>
    ),
  },
];
