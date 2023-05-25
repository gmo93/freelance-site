import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Expertise() {
  const { ref, inView, entry } = useInView({
    threshold: .2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`h-screen w-full flex flex-wrap bg-omo-yellow justify-center items-center`}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold w-screen h-min text-center">
        Our Expertise
      </h1>
      <ul
        className={`${inView ? "opacity-1" : "opacity-0"} ${
          inView ? "translate-x-0" : "translate-x-12"
        } duration-500 h-min w-3/4 text-black text-2xl md:text-3xl font-semibold`}
      >
        <li>-Branding</li>
        <li>-UX / UI Design</li>
        <li>-Web Development</li>
        <li>-eCommerce</li>
        <li>-SEO</li>
        <li>-Wordpress Development</li>
        <li>-Shopify</li>
      </ul>
      <div className="w-screen h-min flex justify-center">
        <Image alt = "Web Icon spinning for aesthetic" className='animate-rotate' src="/webIcon.svg" width={125} height={125} />
      </div>
    </div>
  );
}
