"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import TopQuote from "./TopQuote";
import BottomQuote from "./BottomQuote";
import Expertise from "./Expertise";
import Contact from './Contact'

export default function PageContent() {
  const testerString = "Where can I possibly find a web designer??";
  const testStringCount = " Where can I possibly find a web designer??";
  const filledArr: any = [];

  const [quote, setQuote] = useState("");
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const [letter, setLetter] = useState("");
  const [prevLetter, setPrevLetter] = useState("");

  const cls1 = {
    letterSpacing: "-.01em",
  };
  const cls2 = {
    letterSpacing: "-.01em",
  };
  const cls3 = {
    letterSpacing: "-.01em",
    fill: "#facc15",
    stroke: "#231f20",
    strokeMiterLimit: "10",
  };
  const cls4 = {
    letterSpacing: "-.06em",
  };
  const cls5 = {
    fontSize: "22px",
  };
  const cls6 = {
    fill: "#231f20",
    fontFamily: "DINCondensed-Bold",
    fontWeight: 700,
    fontSize: "18px",
  };
  const keyboard = {
    marginTop: "20vh",
  };

  const helloLog = () => {
    console.log("hello");
  };

  const mainLogo = {
    animationName: 'spinLogo',
    animationDuration: '2s'
  }

  return (
    <div className={`bg-white h-screen w-screen`}>
      <div className="flex flex-wrap h-full w-full justify-center items-start">
        <div className="flex flex-wrap h-full w-full items-center justify-center">
          <Image alt = "Main Logo" src = "/littleShopBigDesign.svg" height={500} width={500} priority/>
        </div>
      </div>
      <div className={`h-full flex items-center`}>
      <div className="z-5 flex flex-wrap h-1/2 w-full text-3xl md:text-5xl justify-center items-center">
        <TopQuote />
        <BottomQuote />
      </div>
    </div>
      <div className="h-min sm:h-screen flex flex-wrap w-full">
        <Expertise />
      </div>
      <div className="h-screen w-screen">
        <Contact />
      </div>
    </div>
  );
}
