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
  SiSwift,
  SiApple,
  SiVitess,
  SiInternetcomputer,
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
    title: "PiCO",
    description:
      "🎨 Pico is a social media platform and NFT marketplace designed to empower artists in this rapidly evolving landscape by prioritizing authorship, authenticity, and transparency.",
    image: "/pico.png",
    link: "https://eueyk-uiaaa-aaaap-qp4la-cai.icp0.io",
    github: "https://github.com/WeGoWinPrikitiw/pico",
    tools: (
      <>
        <SiInternetcomputer />
        <SiTypescript />
        <SiReact />
        <SiReactquery />
        <SiVitess />
        <SiCloudflare />
        <SiTailwindcss />
      </>
    ),
  },
  {
    title: "Sepik",
    description:
      "🎤 Sepik is an advanced iOS application designed to help users improve their public speaking skills through comprehensive video analysis.",
    image: "/sepik.png",
    link: "https://apps.apple.com/id/app/sepik/id6747465256",
    github: "https://github.com/reynaldomarchell/sepik",
    tools: (
      <>
        <SiSwift />
        <SiApple />
      </>
    ),
  },
  {
    title: "BLink",
    description:
      "🚎 BLink is a mobile application designed to help users scan bus plate numbers and instantly access route information, schedules, and navigation assistance for the BSD City bus network.",
    image: "/Blink.svg",
    github: "https://github.com/reynaldomarchell/BLinkNew",
    tools: (
      <>
        <SiSwift />
        <SiApple />
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
];
