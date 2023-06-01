"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Expertise() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-omo-second h-full w-screen flex flex-wrap justify-center md:justify-center items-center pt-10`}
    >
      <div className={`flex flex-wrap items-center`}>
        <h1 className="text-omo-fifth text-4xl md:text-6xl font-medium w-screen md:h-1/4 text-center">
          Our Expertise
        </h1>
      </div>
      <div className={`flex flex-wrap w-5/6 items-start`}>
        <ul
          className={`${inView ? "opacity-1" : "opacity-0"} ${
            inView ? "translate-x-0" : "translate-x-12"
          } duration-500 w-3/4 text-white text-xl md:text-4xl lg: text-5xl font-light flex flex-wrap text-omo-fourth`}
        >
          <li className={`w-full text-xl md:text-4xl`}>-Web Development</li>
          <li className={`w-full text-xl md:text-4xl`}>-Branding</li>
          <li className={`w-full text-xl md:text-4xl`}>-UX / UI Design</li>
          <li className={`w-full text-xl md:text-4xl`}>-eCommerce</li>
          <li className={`w-full text-xl md:text-4xl`}>-SEO</li>
          <li className={`w-full text-xl md:text-4xl`}>-Wordpress</li>
          <li className={`w-full text-xl md:text-4xl`}>-Shopify</li>
          <li className={`w-full text-xl md:text-4xl`}>
            -Home Page Animations
          </li>
        </ul>
      </div>
      <div className="h-1/4 w-screen flex items-center justify-center">
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
