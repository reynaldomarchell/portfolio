import React from "react";
import {
  WorkExperienceData,
  WorkExperienceType,
} from "@/data/WorkExperienceData";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 flex items-center gap-2">
        <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
        Work Experience
      </h2>
      <div className="space-y-8">
        {WorkExperienceData.map((experience, index) => (
          <WorkExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}

function WorkExperienceCard({
  company,
  location,
  position,
  duration,
  description,
  skills,
}: WorkExperienceType) {
  return (
    <div className="border border-slate-700 rounded-lg p-4 md:p-6 bg-slate-950/50 hover:bg-slate-900/50 transition-colors duration-300">
      <div className="space-y-3">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-slate-50">
            {position}
          </h3>
          <h4 className="text-base md:text-lg font-medium text-slate-200">
            {company}
          </h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {duration}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <ul className="space-y-2">
            {description.map((desc, index) => (
              <li
                key={index}
                className="text-sm md:text-base text-slate-300 leading-relaxed"
              >
                • {desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-medium text-slate-400 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
