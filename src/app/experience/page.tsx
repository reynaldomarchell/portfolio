"use client";

import React, { useState } from "react";
import WorkExperience from "@/components/WorkExperience";
import Organization from "@/components/Organization";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";
import { Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceTab = "work" | "organization";

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("experience");
  const [experienceTab, setExperienceTab] = useState<ExperienceTab>("work");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Experience
            </h1>
            <p className="text-lg text-slate-300">
              My professional journey and organizational milestones.
            </p>
          </div>

          {/* Sub Tabs */}
          <div className="flex gap-2 mb-8 border-b border-slate-700">
            <button
              onClick={() => setExperienceTab("work")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px",
                experienceTab === "work"
                  ? "border-slate-50 text-slate-50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              <Briefcase className="w-4 h-4" />
              Work
            </button>
            <button
              onClick={() => setExperienceTab("organization")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px",
                experienceTab === "organization"
                  ? "border-slate-50 text-slate-50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              <Users className="w-4 h-4" />
              Organization
            </button>
          </div>

          {/* Content */}
          {experienceTab === "work" ? <WorkExperience /> : <Organization />}
        </div>
      </PageWrapper>
    </>
  );
}
