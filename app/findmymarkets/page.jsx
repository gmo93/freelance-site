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
      className={`bg-omo-first h-5/6 w-screen flex flex-wrap justify-center md:justify-center items-start pt-10`}
    >
      <NavBar />
      <div
        className={`grid grid-cols-1 h-4/5 flex justify-center items-start`}
      >
        <div
          className={`min-h-auto flex flex-wrap justify-center items-start mt-20`}
          >
            <Image className={`p-2`} src="/fmmWhiteLogo.svg" height={300} width={300} />
            <h1 className={`w-4/5 text-white font-semibold text-7xl text-center mb-10`}>Find My Markets</h1>
          </div>
          <div className={`h-5/6 bg-omo-fifth flex items-center`}>
            <p className={`text-white m-20 text-xl`}>
            Find My Markets is a web application I created to put all of the craft markets coming up in the US in one place. I use puppeteer and NextJS to collect the info, MongoDB to store / access the Data, and then React and Javascript to style / function the application. If you have any questions, let me know and I&apos;ll gladly walk you through the site!
            </p>
          </div>
      </div>
    </div>
  );
}
