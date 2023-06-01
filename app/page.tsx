import Image from 'next/image';
import NavBar from './NavBar';
import LogoPage from './LogoPage';
import Expertise from './Expertise';
import Quotes from './Quotes';
import Contact from './Contact';

export default function Home() {
  return (
    <main
      className="scroll-smooth overflow-x-hidden flex flex-wrap w-screen bg-omo-fifth"
    >
      <div className="flex flex-wrap h-screen w-full items-end">
        <LogoPage />
        <NavBar />
        <div className="h-full">
          <Quotes />
        </div>
        <div className="h-screen bg-omo-fifth">
          <Expertise />
        </div>
        <div className="h-screen bg-white">
          <Contact />
        </div>
      </div>
    </main>
  );
}
