import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";

import Activities from "@/components/Activities";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-start text-slate-200 bg-slate-950 font-mono py-6 px-5 lg:px-24">
      <div className="flex flex-col md:flex-row gap-6 py-4 justify-between md:items-center">
        <div className="space-y-3">
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=100&color=F8FAFC&vCenter=true&random=true&width=435&lines=Hello;%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF;%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94;%E6%82%A8%E5%A5%BD;Bonjour;%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87;%CE%A7%CE%B1%CE%AF%CF%81%CE%B5%CF%84%CE%B5;%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5;Ol%C3%A1;%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B"
              alt="Typing SVG"
            />
          </a>
          <h1 className="text-2xl md:text-3xl text-slate-50 font-extrabold">
            Reynaldo Marchell Bagas Adji
          </h1>
          <p>A person who loves to code and learn new things 💖</p>

          <Link
            href="https://drive.google.com/file/d/1dFubCPiUSWbBISS-hUmMrlBqImDReQgU/view?usp=sharing"
            className="justify-center flex border rounded-md py-2 px-4 hover:bg-slate-900 hover:-translate-y-1 hover:translate-x-1 hover:transition-all hover:duration-500 hover:cursor-pointer hover:text-slate-50 gap-2 items-center"
          >
            <p className="font-medium">Download my CV</p>
            <ArrowDownToLine />
          </Link>
          <div className="flex gap-2">
            <Link
              href="https://github.com/reynaldomarchell"
              className="hover:-translate-y-0.5 hover:transition-all hover:duration-500"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/reynaldo-marchell/"
              className="hover:-translate-y-0.5 hover:transition-all hover:duration-500"
            >
              <Linkedin />
            </Link>
            <Link
              href="mailto:rmbagt@gmail.com"
              className="hover:-translate-y-0.5 hover:transition-all hover:duration-500"
            >
              <Mail />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Markdown>
            [![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=31ia3zscq2wmtywnd3kdbfkb55qq&cover_image=true&theme=default&show_offline=true&background_color=0f172a&interchange=false&bar_color_cover=true)](https://spotify-github-profile.vercel.app/api/view?uid=31ia3zscq2wmtywnd3kdbfkb55qq&redirect=true)
          </Markdown>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-4 justify-evenly">
        <Project />
        <Activities />
      </div>
    </div>
  );
}
