import Profile from "@/components/Profile";
import Spotify from "@/components/Spotify";
import Project from "@/components/Project";
import Activities from "@/components/Activities";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-start py-6 px-5 lg:px-24 font-mono">
      <div className="flex flex-col md:flex-row gap-6 py-4 justify-between md:items-center">
        <Profile />
        <Spotify />
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-6 py-4 justify-between">
        <Activities />
        <Project />
      </div>

      <div className="mt-4 flex items-center justify-center w-full">
        <Link
          href="mailto:rmbagt@gmail.com"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:bg-slate-900 transition-all duration-300 ease-linear"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-slate-500 font-semibold md:text-xl">
            Get in touch
          </h1>
          <div className="items-center flex gap-2 font-semibold text-slate-200 md:text-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-300"></span>
            </span>
            <h1>with me</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
