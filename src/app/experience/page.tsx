"use client";

import React, { useState } from "react";
import WorkExperience from "@/components/WorkExperience";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Work Experience
            </h1>
            <p className="text-lg text-slate-300">
              My professional journey and career milestones.
            </p>
          </div>

          {/* Content */}
          <WorkExperience />
        </div>
      </PageWrapper>
    </>
  );
}
