import Profile from "@/components/Profile";
import Spotify from "@/components/Spotify";
import Project from "@/components/Project";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-start text-slate-200 bg-slate-950 font-mono py-6 px-5 lg:px-24">
      <div className="flex flex-col md:flex-row gap-6 py-4 justify-between md:items-center">
        <Profile />
        <Spotify />
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-6 py-4 justify-between">
        <Activities />
        <Project />
      </div>
    </div>
  );
}
