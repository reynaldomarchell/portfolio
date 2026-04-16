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
  features?: string[];
};

export const ProjectData: ProjectType[] = [
  {
    title: "Dear Bouquet",
    description:
      "💐 Dear Bouquet is an immersive narrative iOS game that transports players into the world of floriography, the language of flowers. Step into the shoes of Maria, a florist who creates meaningful bouquets for customers while discovering emotional stories and the hidden meanings behind each bloom.",
    image: "/dear-bouquet.svg",
    link: "https://apps.apple.com/id/app/dear-bouquet/id6755093749?l=id",
    github: "https://github.com/LiftUpCircle/florist-spritekit",
    tools: (
      <>
        <SiSwift />
        <SiApple />
      </>
    ),
    features: [
      "Narrative-driven gameplay with visual novel-style dialogue scenes",
      "Drag-and-drop bouquet crafting system using SpriteKit with rotation and layering",
      "Floriography learning through an interactive flower book with meanings and symbolism",
      "Diverse character stories — Robert, Abigail, and Michael — each with unique emotional journeys",
      "Memory collection to save completed bouquets and revisit past customer stories",
      "Beautiful animations including falling petals, smooth transitions, and animated loading screens",
      "SwiftData integration for automatic persistence of story progress and completed bouquets",
      "Showcased at TalentSpark 2025 — 140+ visitors, 50+ downloads, 400+ App Store impressions",
    ],
  },
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
    features: [
      "Automatic NFT labeling identifying AI-generated vs manually created content",
      "Automated authenticity verification for manual uploads via AI detection",
      "Integrated NFT marketplace with buy/sell functionality via community forums",
      "AI text-to-image NFT generation using OpenAI Sora via HTTP outcalls",
      "Secure Web3 authentication using Internet Identity",
      "Multi-Agent recommendation system (Recommendation, Judger, Formatter Agents)",
      "9 interconnected smart contracts (canisters) on Internet Computer Protocol",
      "ICRC-1, ICRC-2, and ICRC-7 token & NFT standards support",
    ],
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
    features: [
      "Video upload & analysis for speaking practice (.MOV format)",
      "Facial expression analysis using Core ML to track smile frequency",
      "Speech pattern analysis including WPM, filler word detection, and quality scoring",
      "Eye contact tracking using computer vision for better audience engagement",
      "Performance scoring with confidence assessment (Confident, Neutral, Nervous)",
      "History tracking with performance trends over time",
      "Beautiful 232-frame animated loading screen during analysis",
      "Memory-optimized processing for videos up to 10 minutes",
    ],
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
    features: [
      "Plate number scanning using Vision Framework for instant recognition",
      "Detailed route information with stations and schedules",
      "Live journey tracking with Live Activities and Dynamic Island support",
      "Route history for previously scanned buses with offline access",
      "Siri integration for voice-activated bus scanning",
      "Manual plate number input when scanning is difficult",
      "Dark mode support and Spotlight search integration",
    ],
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
    features: [
      "Instant food grading (A–D) via AI-powered image recognition",
      "Personalized product recommendations and trending health articles",
      "Save favorites for frequently scanned products",
      "Educational articles on nutrition, health, and healthy living",
      "OAuth integration with Google & Discord for secure login",
      "Cloudflare R2 for object storage and content delivery",
      "Localized experience tailored for Indonesian users",
    ],
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
    features: [
      "Interactive 2D Live2D animated AI assistant character",
      "Real-time chat powered by Google Gemini LLM",
      "Express.js backend for secure API key handling",
      "Smooth character animations and modern UI with daisyUI",
    ],
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
    features: [
      "AI-automated quiz creation from any topic or input",
      "Fully customizable quiz questions and answers",
      "Community quiz sharing and discovery",
      "OAuth login integration with Google & Discord",
      "Dashboard with statistics and performance reporting",
      "Saved quizzes with edit, share, and review capabilities",
    ],
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
    features: [
      "User profile management with hobbies and interests",
      "Friend system to add and manage connections",
      "Real-time messaging between friends",
      "Discover users based on shared interests",
      "Avatar shop with in-app wallet and currency system",
      "Wishlist for saving potential future connections",
      "Notifications for friend requests and messages",
    ],
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
    features: [
      "Browse and discover environmental donation events",
      "Secure payment processing via Midtrans integration",
      "Donation history tracking and personal statistics",
      "Admin dashboard for creating and managing events",
      "User authentication with secure account management",
      "Email notifications for donation confirmations",
    ],
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
    features: [
      "Journey point collection from every public transportation use",
      "Reward redemption with various partner merchant prizes",
      "Travel history and usage statistics dashboard",
      "Community events to promote public transportation adoption",
      "Google OAuth for seamless and secure login",
    ],
  },
];
