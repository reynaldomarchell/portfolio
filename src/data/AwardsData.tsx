export type AwardType = {
  title: string;
  competition: string;
  date: string;
  location: string;
  description: string;
};

export const AwardsData: AwardType[] = [
  {
    title: "1st Winner",
    competition: "INTERIUM Evolution Competition 2024",
    date: "Nov 2024",
    location: "Jakarta, Indonesia",
    description:
      "Successfully won 1st place in the web design competition at INTERIUM Evolution organized by HIMA IF Telkom University. Our team developed TransitPlus, a web-based application designed to provide a more interactive and engaging public transportation experience through point collection and reward redemption features. With TransitPlus, users can collect points from trips using public transportation and redeem them with various attractive prizes from cooperating partners. The app aims to increase public interest in using public transportation as well as support a more environmentally friendly lifestyle.",
  },
  {
    title: "3rd Winner",
    competition: "Srifoton Hackathon 2024",
    date: "Nov 2024",
    location: "Jakarta, Indonesia",
    description:
      "Successfully won 3rd place in the web development competition at the Srifoton Hackathon organized by HMIF Sriwijaya University. Our team developed QuizAI, an AI-based quiz application designed to make learning more fun, challenging, automated, personalized and customizable. This application aims to increase the interest in learning among people in Indonesia and around the world.",
  },
  {
    title: "3rd Winner",
    competition: "Hackathon 7.0 TechnoScape x Teleperformance 2024",
    date: "Jun 2024",
    location: "Jakarta, Indonesia",
    description:
      "Hackathon 7.0 is the peak event of TechnoScape that forms a 36-hour coding competition. Our team created a live transcription application that utilizes the OpenAI API to help Customer Service serve customers.",
  },
  {
    title: "Finalist",
    competition: "IPCC Asia Jakarta Regional Contest 2022",
    date: "Nov 2022",
    location: "Jakarta, Indonesia",
    description:
      "IPCC is a prestigious competitive programming competition that is held for two days. Each team will be given a challenge to solve 13 questions within 5 hours with the best and most effective solutions possible.",
  },
];
