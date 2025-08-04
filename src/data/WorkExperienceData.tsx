export type WorkExperienceType = {
  company: string;
  location: string;
  position: string;
  duration: string;
  description: string[];
  skills: string[];
};

export const WorkExperienceData: WorkExperienceType[] = [
  {
    company: "Taiwan Mobile",
    location: "Taipei, Taiwan · Remote",
    position: "Software Engineer Intern",
    duration: "Feb 2025 - Feb 2026",
    description: [
      "Engineered a full-stack internal tool with FastAPI backend and Next.js frontend, optimizing performance by implementing batch API calls and successfully deploying the service using Docker on a VPS.",
      "Developed, configured, and documented a multi-node Hadoop cluster using Ansible for automated setup; conducted rigorous stress testing on HBase and Phoenix QueryServer to ensure system stability and performance.",
      "Rapidly adapted to the .NET ecosystem, implementing UI enhancements and resolving bugs in the internal platform by applying MVC architecture principles with Razor Views.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "React.js",
      "FastAPI",
      "Python",
      ".NET",
      "Docker",
      "Ansible",
      "Hadoop",
      "HBase",
      "GitLab",
      "Figma",
      "Postman",
      "Trello",
    ],
  },
  {
    company: "Apple Developer Academy | Indonesia",
    location: "Jakarta, Indonesia · Onsite",
    position: "Junior iOS Developer",
    duration: "Mar 2025 - Dec 2025",
    description: [
      "Developed three fully-functional iOS applications from ideation to high-fidelity prototype, applying the Challenge-Based Learning (CBL) framework and Agile methodologies to deliver user-centric solutions.",
      'Engineered "Sepik," an AI-powered public speaking coach, by integrating Core ML, Vision, and Speech frameworks to provide real-time, on-device analysis of facial expressions, eye contact, and speech patterns.',
      'Created "BLink," a transit utility app that uses the Vision framework for real-time license plate recognition, later enhancing it with modern iOS features including Live Activities, Dynamic Island, and App Intents for Siri and Spotlight integration.',
    ],
    skills: [
      "Swift",
      "SwiftUI",
      "Core ML",
      "Vision Framework",
      "Speech Framework",
      "AVFoundation",
      "ActivityKit",
      "App Intents",
      "SwiftData",
      "Figma",
      "GitHub",
      "Miro",
    ],
  },
  {
    company: "Sagara Technology",
    location: "Jakarta, Indonesia · Remote",
    position: "Frontend Engineer Intern",
    duration: "May 2024 - Sep 2024",
    description: [
      "Integrate API for dashboard features using React Query",
      "Apply good practices and standards in Next.js",
      "Converting Figma designs into code",
      "Implement responsive design and mobile friendly pages",
      "Conduct weekly Scrum with mentors and teammates to achieve maximum results",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Gitlab",
      "Postman",
      "Ant Design",
    ],
  },
];
