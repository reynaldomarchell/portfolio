"use client";

import React, { useState } from "react";
import Education from "@/components/Education";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Education
            </h1>
            <p className="text-lg text-slate-300">
              My academic background and educational achievements.
            </p>
          </div>

          {/* Content */}
          <Education />
        </div>
      </PageWrapper>
    </>
  );
}
