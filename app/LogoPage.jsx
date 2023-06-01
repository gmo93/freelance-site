"use client";


import Image from "next/image";

export default function LogoPage() {
  return (
    <div id="home" className="flex flex-wrap h-full w-full justify-center items-start">
      <div className="flex flex-wrap h-5/6 w-full items-center justify-center">
        <Image
          alt="Main Logo"
          src="/littleShopLogo.svg"
          height={300}
          width={300}
          priority
        />
      </div>
      <div className={`h-full flex items-center`}>
    </div>
    </div>
  );
}
