"use client";

import React, { useState } from "react";
import Awards from "@/components/Awards";
import PageWrapper from "@/components/PageWrapper";
import FloatingTabs from "@/components/FloatingTabs";

export default function AwardsPage() {
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <>
      <FloatingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PageWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Awards & Achievements
            </h1>
            <p className="text-lg text-slate-300">
              Recognition and achievements throughout my journey.
            </p>
          </div>

          {/* Content */}
          <Awards />
        </div>
      </PageWrapper>
    </>
  );
}
