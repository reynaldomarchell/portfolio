"use client";

import { useState } from "react";
import Profile from "@/components/Profile";
import Spotify from "@/components/Spotify";
import Project from "@/components/Project";
import Activities from "@/components/Activities";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";
import MobileTabs from "@/components/MobileTabs";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
              <Profile />
              <Spotify />
            </div>
            <div className="flex items-center justify-center w-full">
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
        return <Project />;
      case "experience":
        return <WorkExperience />;
      case "education":
        return <Education />;
      case "awards":
        return <Awards />;
      case "activities":
        return <Activities />;
      default:
        return null;
    }
  };

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MobileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper className="flex flex-col min-h-screen">
        <div className="flex-1 py-8">{renderTabContent()}</div>
      </PageWrapper>
    </>
  );
}
