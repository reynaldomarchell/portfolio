import Link from "next/link";
import { ArrowDownToLine, Github, Linkedin } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-3">
      <Link href="/" className="hover:cursor-default">
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=100&color=F8FAFC&vCenter=true&random=true&width=435&lines=Hello;%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF;%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94;%E6%82%A8%E5%A5%BD;Bonjour;%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87;%CE%A7%CE%B1%CE%AF%CF%81%CE%B5%CF%84%CE%B5;%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5;Ol%C3%A1;%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B"
          alt="Typing SVG"
        />
      </Link>
      <h1 className="text-2xl md:text-3xl text-slate-50 font-extrabold">
        Reynaldo Marchell Bagas Adji
      </h1>
      <p>A person who loves to code and learn new things 💖</p>

      <Link
        href="https://drive.google.com/file/d/1R1PhipMSh2bPD4lDpU6eA4C3fFLaglX3/view?usp=sharing"
        className="justify-center flex border rounded-md py-2 px-4 hover:bg-slate-900 hover:transition-all hover:duration-500 hover:cursor-pointer hover:text-slate-50 gap-2 items-center"
        target="_blank"
        rel="noreferrer"
      >
        <p className="font-medium">Download my CV</p>
        <ArrowDownToLine />
      </Link>
      <div className="flex gap-2 pt-2">
        <Link
          href="https://github.com/reynaldomarchell"
          className="hover:-translate-y-0.5 hover:transition-all hover:duration-500 flex gap-2 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
          <h2>GitHub</h2>
        </Link>
        &bull;
        <Link
          href="https://www.linkedin.com/in/reynaldo-marchell/"
          className="hover:-translate-y-0.5 hover:transition-all hover:duration-500 flex gap-2 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
          <h2>LinkedIn</h2>
        </Link>
      </div>
    </div>
  );
}
