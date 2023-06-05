"use client";

import NavBar from "../NavBar";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const expArray = [
    "Web Development",
    "Branding",
    "UX / UI Design",
    "eCommerce",
    "SEO",
    "Wordpress",
    "Shopify",
    "Home Page Animation",
  ];
  const [count, setCount] = useState(0);
  if (count < expArray.length) {
    setTimeout(() => {
      setCount(count + 1);
    }, 750);
  } else {
    setCount(0);
  }

  const eventLog = (e) => {
    console.log(e)
  }

  return (
    <div
      ref={ref}
      className={`bg-omo-first h-full w-screen flex flex-wrap justify-center md:justify-center items-start pt-10`}
    >
      <NavBar />
      <div
        onClick={eventLog}
        className={`grid grid-cols-1 h-full flex justify-center items-start`}
      >
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image height={100} width={100} src="/findMyMarketsLogo.svg" />
          <h1 className={`w-full text-center text-white font-bold my-4`}>
            Find My Markets
          </h1>
          <h2 className={`w-3/5 text-omo-fifth`}>
            Your go-to site for craft markets and fairs coming up near you.
          </h2>
          <p className={`w-3/4 my-4 text-white`}>
            Find My Markets is a web application I created to put all of the
            craft markets coming up in the US in one place. I use puppeteer and
            NextJS to collect the info, MongoDB to store / access the Data, and
            then React and Javascript to style / function the application. If
            you have any questions, let me know and I'll gladly walk you through
            the site!
          </p>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center`}
        >
          <Image
            className={`mt-24`}
            height={100}
            width={100}
            src="/findMyMarketsLogo.svg"
          />
          <h1 className={`w-full text-center text-white font-bold my-4`}>
            Find My Markets
          </h1>
          <h2 className={`w-3/5 text-omo-fifth`}>
            Your go-to site for craft markets and fairs coming up near you.
          </h2>
          <p className={`w-3/4 my-4 text-white mb-14`}>
            Find My Markets is a web application I created to put all of the
            craft markets coming up in the US in one place. I use puppeteer and
            NextJS to collect the info, MongoDB to store / access the Data, and
            then React and Javascript to style / function the application. If
            you have any questions, let me know and I'll gladly walk you through
            the site!
          </p>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image height={100} width={100} src="/findMyMarketsLogo.svg" />
          <h1 className={`w-full text-center text-white font-bold my-4`}>
            Find My Markets
          </h1>
          <h2 className={`w-3/5 text-omo-fifth`}>
            Your go-to site for craft markets and fairs coming up near you.
          </h2>
          <p className={`w-3/4 my-4 text-white mb-14`}>
            Find My Markets is a web application I created to put all of the
            craft markets coming up in the US in one place. I use puppeteer and
            NextJS to collect the info, MongoDB to store / access the Data, and
            then React and Javascript to style / function the application. If
            you have any questions, let me know and I'll gladly walk you through
            the site!
          </p>
        </div>
        <div
          className={`border-b-4 h-full flex flex-wrap justify-center items-center mt-20`}
        >
          <Image height={100} width={100} src="/findMyMarketsLogo.svg" />
          <h1 className={`w-full text-center text-white font-bold my-4`}>
            Find My Markets
          </h1>
          <h2 className={`w-3/5 text-omo-fifth`}>
            Your go-to site for craft markets and fairs coming up near you.
          </h2>
          <p className={`w-3/4 my-4 text-white mb-20`}>
            Find My Markets is a web application I created to put all of the
            craft markets coming up in the US in one place. I use puppeteer and
            NextJS to collect the info, MongoDB to store / access the Data, and
            then React and Javascript to style / function the application. If
            you have any questions, let me know and I'll gladly walk you through
            the site!
          </p>
        </div>
      </div>
    </div>
  );
}
