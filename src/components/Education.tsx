import React from "react";
import { EducationData, EducationType } from "@/data/EducationData";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
        Education
      </h2>
      <div className="space-y-6">
        {EducationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
}

function EducationCard({
  institution,
  degree,
  duration,
  gpa,
  grade,
  description,
}: EducationType) {
  return (
    <div className="border border-slate-700 rounded-lg p-4 md:p-6 bg-slate-950/50 hover:bg-slate-900/50 transition-colors duration-300">
      <div className="space-y-3">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-slate-50">
            {institution}
          </h3>
          <h4 className="text-base md:text-lg font-medium text-slate-200">
            {degree}
          </h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {duration}
            </div>
            {(gpa || grade) && (
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                {gpa ? `GPA: ${gpa}` : `Grade: ${grade}`}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
