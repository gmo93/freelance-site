import Image from "next/image";
import PageContent from "./PageContent";
import { useEffect, useState } from "react";
import GridTest from './GridTest'
import NavBar from './NavBar'

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-wrap w-screen bg-black">
      <NavBar />
      <PageContent />
    </main>
  );
}
