'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Keyboard() {
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

  const keyPress = (e: any) => {
    console.log(e.target);
  };

  const mouseHover = (e: any) => {
    e.target.style.fill = '#cfa910';
  };
  const mouseLeave = (e: any) => {
    e.target.style.fill = '#facc15';
  };

  // useEffect(() => {
  //   // console.log(testerString[count]);
  //   const intervalId = setInterval(() => {
  //     setCount(count + 1);
  //     //Runs interval until string is completed
  //     if (count > testerString.length - 1) {
  //       setActive(false);
  //     }
  //     console.log(`Letter: ${letter}`);
  //     console.log(`Prev Letter: ${prevLetter}`);

  //     // Sets letter for either "space" or current string position
  //     if (testerString[count] === ' ') {
  //       setLetter('space');
  //     } else {
  //       setLetter(testStringCount[count].toLowerCase());
  //     }
  //     // Sets previous letter for either "space" or current string position
  //     if (prevLetter || count) {
  //       if (testerString[count - 1] === ' ') {
  //         setPrevLetter('space');
  //       } else {
  //         setPrevLetter(testerString[count - 1].toLowerCase());
  //         document.getElementById(letter).style.fill = '#cfa910';
  //         document.getElementById(prevLetter).style.fill = '#fcca15';
  //         document.getElementById('w').style.fill = '#fcca15';
  //       }
  //     }
  //     setQuote((prev) => prev + testerString[count - 1]);
  //     // setQuote((prev) => prev + testerString[count - 1]);
  //   }, 100);

  //   if (count > testerString.length - 1) {
  //     clearInterval(intervalId);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // });

  return (
    <div className="bg-black">
      <div className="flex flex-wrap h-full bg-dots bg-center bg-cover w-screen justify-center items-start">
        <div className="flex flex-wrap h-full w-full items-center justify-center">
            <h1 className="text-4xl text-center text-black font-bold">Omohundro Web Design</h1>
        </div>
      </div>
      <div className="flex bg-black h-full w-screen justify-center">
        <p className={"text-white"}>Alright, lets get started!</p>
      </div>
    </div>
  );
}
