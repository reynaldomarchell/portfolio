export type EducationType = {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  grade?: string;
  description?: string;
};

export const EducationData: EducationType[] = [
  {
    institution: "BINUS University",
    degree: "Computer Science",
    duration: "2022 - 2026",
    gpa: "3.79 out of 4.00",
    description: "Cumulative GPA: 3.79 out of 4.00",
  },
  {
    institution: "Chung Yuan Christian University",
    degree: "Industrial and Systems Engineering",
    duration: "Feb 2023 - Jun 2023",
    grade: "85 out of 100",
    description:
      "Virtual study abroad program at YCCU Taiwan by taking Mathematical Programming course as a substitute for Calculus course at BINUS University",
  },
];
