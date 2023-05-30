import Image from "next/image";
import NavBar from "./NavBar";
import LogoPage from "./LogoPage";
import Expertise from "./Expertise";
import Quotes from "./Quotes";

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-wrap w-screen bg-omo-fifth">
      <div className="flex flex-wrap h-screen w-screen items-end">
        <LogoPage />
        <NavBar />
        <div className="h-full">
          <Quotes />
        </div>
        <div className="h-screen bg-omo-first">
          <Expertise />
        </div>
      </div>
    </main>
  );
}
