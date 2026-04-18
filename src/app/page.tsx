"use client";

import { useState } from "react";
import Profile from "@/components/Profile";
import Spotify from "@/components/Spotify";
import Project from "@/components/Project";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";
import Link from "next/link";
import { Terminal } from "@/components/ui/terminal";

const terminalCommands = [
  "whoami",
  "cat skills.txt",
  "ls projects/",
  "echo $CURRENT_ROLE",
];

const terminalOutputs: Record<number, string[]> = {
  0: [
    "Reynaldo Marchell Bagas Adji",
    "Software Engineer · iOS & Web Developer",
    "Based in Indonesia 🇮🇩",
  ],
  1: [
    "Languages :  TypeScript · Swift · Python · PHP · C/C++",
    "Frontend  :  React · Next.js · SwiftUI · Tailwind CSS",
    "Backend   :  FastAPI · Express.js · Laravel · .NET",
    "Infra     :  Docker · Ansible · Hadoop · HBase",
    "Tools     :  Figma · Git · GitHub · Postman",
  ],
  2: [
    "PiCO/  Sepik/  DearBouquet/  BLink/  NutriCek/",
    "QuizAI/  ConnectFriend/  GreenRise/  TransitPlus/  ChatAoba/",
  ],
  3: ["Officer Development Program IT @ PT Bank Mandiri (Persero) Tbk."],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <div className="flex-1">
                <Profile spotifySlot={<Spotify />} />
              </div>
              <div className="hidden lg:block">
                <Spotify />
              </div>
            </div>
            <Terminal
              commands={terminalCommands}
              outputs={terminalOutputs}
              username="reynaldo"
              typingSpeed={40}
              delayBetweenCommands={600}
              className="max-w-full px-0"
              enableSound={false}
            />
            <div className="flex items-center justify-center w-full pb-4">
              <Link
                href="mailto:rmbagt@gmail.com"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-slate-900 transition-all duration-300 ease-linear"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="text-slate-500 font-semibold md:text-xl">
                  Get in touch
                </h1>
                <div className="items-center flex gap-2 font-semibold text-slate-200 md:text-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-300"></span>
                  </span>
                  <h1>with me</h1>
                </div>
              </Link>
            </div>
          </div>
        );
      case "projects":
        return <div className="max-w-4xl mx-auto"><Project /></div>;
      case "experience":
        return <div className="max-w-4xl mx-auto"><WorkExperience /></div>;
      case "education":
        return <div className="max-w-4xl mx-auto"><Education /></div>;
      case "awards":
        return <div className="max-w-4xl mx-auto"><Awards /></div>;
      default:
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <div className="flex-1">
                <Profile spotifySlot={<Spotify />} />
              </div>
              <div className="hidden lg:block">
                <Spotify />
              </div>
            </div>
            <Terminal
              commands={terminalCommands}
              outputs={terminalOutputs}
              username="reynaldo"
              typingSpeed={40}
              delayBetweenCommands={600}
              className="max-w-full px-0"
              enableSound={false}
            />
            <div className="flex items-center justify-center w-full pb-4">
              <Link
                href="mailto:rmbagt@gmail.com"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-slate-900 transition-all duration-300 ease-linear"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="text-slate-500 font-semibold md:text-xl">
                  Get in touch
                </h1>
                <div className="items-center flex gap-2 font-semibold text-slate-200 md:text-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-300"></span>
                  </span>
                  <h1>with me</h1>
                </div>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>{renderTabContent()}</PageWrapper>
    </>
  );
}
