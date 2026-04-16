export type OrganizationType = {
  organization: string;
  location: string;
  position: string;
  duration: string;
  description: string[];
  skills: string[];
};

export const OrganizationData: OrganizationType[] = [
  {
    organization: "Bina Nusantara Computer Club",
    location: "Bandung, Jawa Barat, Indonesia",
    position: "Research and Development Staff",
    duration: "Jan 2024 - Dec 2024",
    description: [
      "Teach fellow activist about workflow at RnD BNCC Bandung.",
      "Conduct weekly Scrum with team to ensure progress.",
      "Helping team who experience difficulties when working on projects.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    organization: "Bina Nusantara Computer Club",
    location: "Bandung, Jawa Barat, Indonesia",
    position: "Research and Development Activist",
    duration: "Jan 2023 - Dec 2023",
    description: [
      "Completing the regeneration period of RnD BNCC Bandung.",
      "Learn the tech stack and workflow in the RnD division.",
      "Work together in a team to complete the project.",
    ],
    skills: [
      "SQL",
      "Express.js",
      "Node.js",
      "React.js",
      "JavaScript",
      "Git",
      "GitHub",
    ],
  },
  {
    organization: "HIMTI BINUS University",
    location: "Bandung, Jawa Barat, Indonesia",
    position: "Programming Class Activist",
    duration: "Mar 2023 - Mar 2024",
    description: [
      "Became an Algorithm Class Teacher and taught freshmen about Introduction to C (Data Types, Input, Output, Conditionals, Operators, Operands, Loops, and Arrays).",
      "Became an Advanced Algorithm Class Committee and helped the teacher provide material about Time Complexity, Data Structure, Search, and Sorting in C++.",
    ],
    skills: ["C", "C++"],
  },
];
