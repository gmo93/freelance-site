'use client';

import NavBar from '../NavBar';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const expArray = [
    'Web Development',
    'Branding',
    'UX / UI Design',
    'eCommerce',
    'SEO',
    'Wordpress',
    'Shopify',
    'Home Page Animation',
  ];
  const [count, setCount] = useState(0);
  if (count < expArray.length) {
    setTimeout(() => {
      setCount(count + 1);
    }, 750);
  } else {
    setCount(0);
  }

  const infoHider = (e) => {
    e.target.parentElement.style.display = "none";
  };

  const infoShower = (e) => {
    console.log(e.target.nextSibling.style.display = "flex")
  }

  return (
    <div
      ref={ref}
      className={`bg-omo-first h-full w-screen flex flex-wrap justify-center md:justify-center items-start pt-10`}
    >
      <NavBar />
      <div
        className={`grid grid-cols-1 h-full flex justify-center items-start`}
      >
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image
            onClick={infoShower}
            alt="fmm logo"
            height={100}
            width={100}
            src="/findMyMarketsLogo.svg"
          />
          <div
            className={`contentHolder flex flex-wrap justify-center items-center`}
          >
            <h1 className={`w-full text-center text-white font-bold my-4`}>
              Find My Markets
            </h1>
            <h2 className={`w-3/5 text-omo-fifth`}>
              Your go-to site for craft markets and fairs coming up near you.
            </h2>
            <p className={`w-3/4 my-4 text-white`}>
              Find My Markets is a web application I created to put all of the
              craft markets coming up in the US in one place. I use puppeteer
              and NextJS to collect the info, MongoDB to store / access the
              Data, and then React and Javascript to style / function the
              application. If you have any questions, let me know and I&apos;ll
              gladly walk you through the site!
            </p>
            <h3
              onClick={infoHider}
              className={`w-1/2 text-center font-bold text-black text-xl z-10`}
            >
              Minimize
            </h3>
          </div>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image
            onClick={infoShower}
            alt="fmm logo"
            height={100}
            width={100}
            src="/findMyMarketsLogo.svg"
          />
          <div
            className={`contentHolder flex flex-wrap justify-center items-center`}
          >
            <h1 className={`w-full text-center text-white font-bold my-4`}>
              Find My Markets
            </h1>
            <h2 className={`w-3/5 text-omo-fifth`}>
              Your go-to site for craft markets and fairs coming up near you.
            </h2>
            <p className={`w-3/4 my-4 text-white`}>
              Find My Markets is a web application I created to put all of the
              craft markets coming up in the US in one place. I use puppeteer
              and NextJS to collect the info, MongoDB to store / access the
              Data, and then React and Javascript to style / function the
              application. If you have any questions, let me know and I&apos;ll
              gladly walk you through the site!
            </p>
            <h3
              onClick={infoHider}
              className={`w-1/2 text-center font-bold text-black text-xl z-10`}
            >
              Minimize
            </h3>
          </div>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image
            onClick={infoShower}
            alt="fmm logo"
            height={100}
            width={100}
            src="/findMyMarketsLogo.svg"
          />
          <div
            className={`contentHolder flex flex-wrap justify-center items-center`}
          >
            <h1 className={`w-full text-center text-white font-bold my-4`}>
              Find My Markets
            </h1>
            <h2 className={`w-3/5 text-omo-fifth`}>
              Your go-to site for craft markets and fairs coming up near you.
            </h2>
            <p className={`w-3/4 my-4 text-white`}>
              Find My Markets is a web application I created to put all of the
              craft markets coming up in the US in one place. I use puppeteer
              and NextJS to collect the info, MongoDB to store / access the
              Data, and then React and Javascript to style / function the
              application. If you have any questions, let me know and I&apos;ll
              gladly walk you through the site!
            </p>
            <h3
              onClick={infoHider}
              className={`w-1/2 text-center font-bold text-black text-xl z-10`}
            >
              Minimize
            </h3>
          </div>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image
            onClick={infoShower}
            alt="fmm logo"
            height={100}
            width={100}
            src="/findMyMarketsLogo.svg"
          />
          <div
            className={`contentHolder flex flex-wrap justify-center items-center`}
          >
            <h1 className={`w-full text-center text-white font-bold my-4`}>
              Find My Markets
            </h1>
            <h2 className={`w-3/5 text-omo-fifth`}>
              Your go-to site for craft markets and fairs coming up near you.
            </h2>
            <p className={`w-3/4 my-4 text-white`}>
              Find My Markets is a web application I created to put all of the
              craft markets coming up in the US in one place. I use puppeteer
              and NextJS to collect the info, MongoDB to store / access the
              Data, and then React and Javascript to style / function the
              application. If you have any questions, let me know and I&apos;ll
              gladly walk you through the site!
            </p>
            <h3
              onClick={infoHider}
              className={`w-1/2 text-center font-bold text-black text-xl z-10 mb-24`}
            >
              Minimize
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
