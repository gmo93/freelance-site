import Image from "next/image";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Expertise from './Expertise';
import Quotes from './Quotes';

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-wrap w-screen bg-omo-fifth">
      <div className="flex flex-wrap h-screen w-screen items-end">
        <HomePage />
        <NavBar />
        <Quotes />
        <Expertise />
      </div>
    </main>
  );
}
