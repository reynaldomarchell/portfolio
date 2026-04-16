export type WorkExperienceType = {
  company: string;
  location: string;
  position: string;
  employmentType?: string;
  duration: string;
  description: string[];
  skills: string[];
};

export const WorkExperienceData: WorkExperienceType[] = [
  {
    company: "PT Bank Mandiri (Persero) Tbk.",
    location: "Jakarta Raya, Indonesia · Onsite",
    position: "Officer Development Program IT",
    duration: "Mar 2026 - Present",
    description: [],
    skills: [],
  },
  {
    company: "Taiwan Mobile",
    location: "Taipei, Taiwan · Remote",
    position: "Software Engineer",
    employmentType: "Contract",
    duration: "Feb 2026 - Mar 2026",
    description: [
      "Develop an iOS application using React Native Expo and migrate the iOS legacy modules to the new React Native application.",
    ],
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
    ],
  },
  {
    company: "Taiwan Mobile",
    location: "Taipei, Taiwan · Remote",
    position: "Software Engineer Intern",
    employmentType: "Internship",
    duration: "Feb 2025 - Feb 2026",
    description: [
      "Engineered a full-stack internal tool with FastAPI backend and Next.js frontend, optimizing performance by implementing batch API calls and successfully deploying the service using Docker on a VPS.",
      "Developed, configured, and documented a multi-node Hadoop cluster using Ansible for automated setup; conducted rigorous stress testing on HBase and Phoenix QueryServer to ensure system stability and performance.",
      "Rapidly adapted to the .NET ecosystem, implementing UI enhancements and resolving bugs in the internal platform by applying MVC architecture principles with Razor Views.",
    ],
    skills: [
      "Oracle Enterprise Linux",
      "Ansible",
      "HBase",
      "Docker",
      "Hadoop",
      "Next.js",
      "TypeScript",
      "React.js",
      "Python",
      "ASP.NET",
      "FastAPI",
      "GitLab",
      "Postman",
      "Figma",
      "Trello",
    ],
  },
  {
    company: "Apple Developer Academy | Indonesia",
    location: "Tangerang, Banten, Indonesia · Onsite",
    position: "Junior iOS Developer",
    employmentType: "Internship",
    duration: "Mar 2025 - Dec 2025",
    description: [
      "Developed six fully-functional iOS applications from ideation to high-fidelity prototype, applying the Challenge-Based Learning (CBL) framework and Agile methodologies to deliver user-centric solutions.",
      'Engineered "BLink," a transit utility app that uses the Vision framework for real-time license plate recognition, later enhancing it with modern iOS features including Live Activities, Dynamic Island, and App Intents for Siri and Spotlight integration.',
      'Published "Sepik," an AI-powered public speaking coach, by integrating Core ML, Vision, and Speech frameworks to provide real-time, on-device analysis of facial expressions, eye contact, and speech patterns.',
      "Developed Dear Bouquet, a published iOS narrative game, using SwiftUI, SpriteKit, and SwiftData, featuring drag-and-drop gameplay, visual novel dialogue, and persistent story progress. Showcased at TalentSpark 2025, reaching 140+ visitors, 50+ downloads, and 400+ App Store impressions.",
    ],
    skills: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "CoreML",
      "Apple Vision Framework",
      "Apple Speech Framework",
      "AVFoundation",
      "ActivityKit",
      "App Intents",
      "SwiftData",
      "MVC",
      "MVVM",
      "Figma",
      "GitHub",
      "Miro",
    ],
  },
  {
    company: "Sagara Technology",
    location: "Jakarta, Indonesia · Remote",
    position: "Frontend Engineer Intern",
    employmentType: "Internship",
    duration: "May 2024 - Sep 2024",
    description: [
      "Integrate API for dashboard features using React Query.",
      "Apply good practices and standards in Next.js.",
      "Converting Figma designs into code.",
      "Implement responsive design and mobile-friendly pages.",
      "Conduct weekly Scrum with mentors and teammates to achieve maximum results.",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
      "GitLab",
      "Postman",
    ],
  },
];
