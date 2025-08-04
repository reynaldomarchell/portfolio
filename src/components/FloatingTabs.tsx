"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  User,
  Briefcase,
  GraduationCap,
  Trophy,
  Code,
  FolderOpen,
} from "lucide-react";

export type TabType = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export const tabs: TabType[] = [
  { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
  {
    id: "projects",
    label: "Projects",
    icon: <FolderOpen className="w-4 h-4" />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  { id: "awards", label: "Awards", icon: <Trophy className="w-4 h-4" /> },
  { id: "activities", label: "Activities", icon: <Code className="w-4 h-4" /> },
];

interface FloatingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FloatingTabs({
  activeTab,
  setActiveTab,
}: FloatingTabsProps) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-2 shadow-lg">
        <div className="flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative p-3 rounded-full transition-all duration-300 group",
                activeTab === tab.id
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
  );
}
