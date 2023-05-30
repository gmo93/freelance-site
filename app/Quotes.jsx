"use client";

import TopQuote from "./TopQuote";
import BottomQuote from "./BottomQuote";

export default function Quotes() {
  return (
    <div className="z-5 flex flex-wrap h-screen w-full text-3xl md:text-5xl justify-center items-center">
      <TopQuote />
      <BottomQuote />
    </div>
  );
}
