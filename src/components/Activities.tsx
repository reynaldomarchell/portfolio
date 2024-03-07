"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

type languageType = {
  name: string;
  percent: number;
  color: string;
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  text: string;
  total_seconds: number;
};

const languageData =
  "https://wakatime.com/share/@reynaldomarchell/42ddf4c4-6b8c-4666-9a74-d30cf7d94c2d.json";

export default function Activities() {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    async function fetchLanguage() {
      const res = await fetch(languageData);
      const data = await res.json();
      setLanguage(data.data);
    }
    fetchLanguage();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl text-slate-50">My coding activities</h2>
      <div className="scrollbar-hide no-scrollbar flex h-72 flex-col gap-2 overflow-y-auto rounded-md border p-5 text-sm md:h-full">
        {language.map((item: languageType) => (
          <ActivitiesItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function ActivitiesItem({ name, percent, text }: languageType) {
  return (
    <div key={name} className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <p>{name}</p>
        <p>{text}</p>
      </div>
      <Progress value={percent} className="h-1" />
    </div>
  );
}
