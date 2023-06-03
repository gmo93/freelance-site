"use client";

import NavBar from '../NavBar'
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {useState} from 'react';

export default function Services() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const expArray = ['Web Development', 'Branding', 'UX / UI Design', 'eCommerce', 'SEO', 'Wordpress', 'Shopify', 'Home Page Animation']
  const [count, setCount] = useState(0);
  if (count < expArray.length) {
    setTimeout(() => {
      setCount(count + 1);
    }, 750)
  } else {
    setCount(0)
  }

  return (
    <div
      ref={ref}
      className={`bg-omo-second h-screen w-screen flex flex-wrap justify-center md:justify-center items-center pt-10`}
    >
      <NavBar />
      <div className={`flex flex-wrap justify-center items-center`}>
        <h1 className="text-omo-fifth text-4xl md:text-6xl font-medium w-1/2 md:h-1/4 text-center">
          Thank you for reaching out! We will get back to you shortly.
        </h1>
      </div>
      <div className="h-1/4 w-screen flex items-start md:items-center justify-center">
        <Image
          alt="Web Icon spinning for aesthetic"
          className="animate-rotate"
          src="/lightBulbIcon.svg"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
}
