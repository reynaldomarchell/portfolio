"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { tabs, TabType } from "./FloatingTabs";

interface MobileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileTabs({
  activeTab,
  setActiveTab,
}: MobileTabsProps) {
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-700">
      <div className="px-4 py-2">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm",
                activeTab === tab.id
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-300 hover:text-slate-50 hover:bg-slate-800"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
