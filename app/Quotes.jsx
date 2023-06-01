"use client";

import TopQuote from "./TopQuote";
import MiddleQuote from "./MiddleQuote";
import BottomQuote from './BottomQuote';

export default function Quotes() {
  return (
    <div className="z-5 flex flex-wrap h-5/6 w-full text-2xl md:text-5xl justify-center items-center">
      <TopQuote />
      <MiddleQuote />
      <BottomQuote />
    </div>
  );
}
