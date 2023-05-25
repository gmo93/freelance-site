'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import TopQuote from './TopQuote';
import BottomQuote from './BottomQuote';
import Capabilities from './Capabilities'

export default function PageContent() {
  const testerString = 'Where can I possibly find a web designer??';
  const testStringCount = ' Where can I possibly find a web designer??';
  const filledArr: any = [];

  const [quote, setQuote] = useState('');
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const [letter, setLetter] = useState('');
  const [prevLetter, setPrevLetter] = useState('');

  const cls1 = {
    letterSpacing: '-.01em',
  };
  const cls2 = {
    letterSpacing: '-.01em',
  };
  const cls3 = {
    letterSpacing: '-.01em',
    fill: '#facc15',
    stroke: '#231f20',
    strokeMiterLimit: '10',
  };
  const cls4 = {
    letterSpacing: '-.06em',
  };
  const cls5 = {
    fontSize: '22px',
  };
  const cls6 = {
    fill: '#231f20',
    fontFamily: 'DINCondensed-Bold',
    fontWeight: 700,
    fontSize: '18px',
  };
  const keyboard = {
    marginTop: '20vh',
  };

  const helloLog = () => {
    console.log('hello');
  };

  return (
    <div className={`bg-black h-screen w-screen`}>
      <div className="flex flex-wrap h-full w-full bg-dots bg-no-repeat bg-center bg-cover md:bg-contain justify-center items-start">
        <div className="flex flex-wrap h-full w-full items-center justify-center">
          <h1 className="text-4xl text-center text-black font-bold">
            Omohundro Web Design
          </h1>
        </div>
      </div>
      <div className="z-5 flex flex-wrap h-screen w-full text-3xl md:text-5xl justify-center items-center">
        <TopQuote />
        <BottomQuote />
      </div>
      <div className="flex flex-wrap w-full">
        <Capabilities />
        {/* <p className="w-3/5 text-white text-3xl font-bold">
          We know there are many different ways to build a website today, such
          as Shopify, Wordpress, Wix, Squarespace, you name it! No matter the
          builder, or lack there of, we can help you out! Fill out our form
          below to let us know what you are looking for, and we will get back to
          you as soon as possible!
        </p> */}
      </div>
    </div>
  );
}
