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
    <div className={`bg-omo-fifth h-screen w-screen`}>
      <div className="h-min sm:h-screen flex flex-wrap w-full">
        <Expertise />
      </div>
    </div>
  );
}
