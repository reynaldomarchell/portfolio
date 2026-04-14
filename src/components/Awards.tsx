import React from "react";
import { AwardsData, AwardType } from "@/data/AwardsData";
import { Trophy, Calendar, MapPin } from "lucide-react";

export default function Awards() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 flex items-center gap-2">
        <Trophy className="w-6 h-6 md:w-7 md:h-7" />
        Awards & Achievements
      </h2>
      <div className="space-y-6">
        {AwardsData.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </div>
  );
}

function AwardCard({
  title,
  competition,
  date,
  location,
  description,
}: AwardType) {
  return (
    <div className="border border-slate-700 rounded-lg p-4 md:p-6 bg-slate-950/50 hover:bg-slate-900/50 transition-colors duration-300">
      <div className="space-y-3">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Trophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                {title}
              </h3>
              <h4 className="text-base md:text-lg font-medium text-slate-200">
                {competition}
              </h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
