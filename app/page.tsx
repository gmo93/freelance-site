import Image from "next/image";
import PageContent from "./PageContent";
import { useEffect, useState } from "react";
import GridTest from './GridTest'

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-wrap w-screen bg-black">
      <div className="z-10 fixed flex flex-wrap justify-center p-2 h-20 w-full items-center text-black bg-yellow-400 font-normal font-sans">
        <h4 className="mx-3">Home</h4>
        <h4 className="mx-3">About</h4>
        <h4 className="mx-3">Contact</h4>
        <h4 className="mx-3">Examples</h4>
      </div>
      <PageContent />
    </main>
  );
}
