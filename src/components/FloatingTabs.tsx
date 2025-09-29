"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import {
  User,
  Briefcase,
  GraduationCap,
  Trophy,
  FolderOpen,
} from "lucide-react";

export type TabType = {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const tabs: TabType[] = [
  {
    id: "profile",
    label: "Profile",
    icon: <User className="w-4 h-4" />,
    href: "/",
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FolderOpen className="w-4 h-4" />,
    href: "/projects",
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase className="w-4 h-4" />,
    href: "/experience",
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4" />,
    href: "/education",
  },
  {
    id: "awards",
    label: "Awards",
    icon: <Trophy className="w-4 h-4" />,
    href: "/awards",
  },
];

interface FloatingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FloatingTabs({
  activeTab,
  setActiveTab,
}: FloatingTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (tab: TabType) => {
    if (tab.href === "/" && pathname === "/") {
      // If we're already on home and clicking profile, just switch tab
      setActiveTab(tab.id);
    } else if (tab.href === "/" && pathname !== "/") {
      // If we're on another page and clicking profile, go to home
      router.push(tab.href);
    } else {
      // For all other cases, navigate to the respective page
      router.push(tab.href);
    }
  };

  const getActiveTab = () => {
    if (pathname === "/") return activeTab;
    if (pathname === "/projects" || pathname.startsWith("/projects/"))
      return "projects";
    if (pathname === "/experience") return "experience";
    if (pathname === "/education") return "education";
    if (pathname === "/awards") return "awards";
    return "profile";
  };

  return (
    <>
      {/* Desktop - Left side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-2 shadow-lg">
          <div className="flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={cn(
                  "relative p-3 rounded-full transition-all duration-300 group",
                  getActiveTab() === tab.id
                    ? "bg-slate-50 text-slate-900"
                    : "text-slate-300 hover:text-slate-50 hover:bg-slate-800"
                )}
                title={tab.label}
              >
                {tab.icon}

                {/* Tooltip */}
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-slate-200 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile - Top */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-700">
        <div className="flex justify-center py-3">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-2 shadow-lg">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={cn(
                    "relative p-3 rounded-full transition-all duration-300 group",
                    getActiveTab() === tab.id
                      ? "bg-slate-50 text-slate-900"
                      : "text-slate-300 hover:text-slate-50 hover:bg-slate-800"
                  )}
                  title={tab.label}
                >
                  {tab.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
