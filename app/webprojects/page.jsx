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
    e.target.parentElement.style.display = 'none';
  };

  const infoShower = (e) => {
    console.log((e.target.nextSibling.style.display = 'flex'));
  };

  return (
    <div
      ref={ref}
      className={`bg-omo-fifth min-h-screen h-auto w-screen flex flex-wrap justify-center md:justify-center items-start pt-10`}
    >
      <NavBar />
      <div className={`w-screen flex pl-10`}>
        <h1 className={`text-6xl text-omo-second font-bold mb-20`}>Projects</h1>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 w-screen h-5/6 flex justify-center items-center`}
      >
        <div
          className={`flex flex-wrap justify-center h-2/3 mb-40 mx-10 items-center`}
        >
          <Image
            alt="fmm logo"
            src="/fmmWhiteLogo.svg"
            height={300}
            width={300}
          />
        </div>
        <div
          className={`flex flex-wrap h-2/3 items-center justify-center mb-40 mx-10`}
        >
          <Image
            alt="omoPhotos Logo"
            src="/omoPhotosWhiteLogo.svg"
            height={300}
            width={300}
          />
        </div>
        <div className={`flex flex-wrap justify-center h-2/3 mb-40 mx-10`}>
          <Image
            alt="wftk Logo"
            src="/wftkWhiteFullLogo.svg"
            height={200}
            width={300}
          />
        </div>
        <div className={`flex flex-wrap justify-center h-2/3 mb-40 mx-10`}>
          <Image
            alt="fmmLogo"
            src="/fmmWhiteLogo.svg"
            height={300}
            width={300}
          />
        </div>
        <div
          className={`flex flex-wrap h-2/3 items-center justify-center mb-40 mx-10`}
        >
          <Image
            alt="omoPhotos Logo"
            src="/omoPhotosWhiteLogo.svg"
            height={300}
            width={300}
          />
        </div>
        <div
          className={`flex flex-wrap justify-center items-center h-2/3 mb-40 mx-10`}
        >
          <Image
            alt="wftkLogo"
            src="/wftkWhiteFullLogo.svg"
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
