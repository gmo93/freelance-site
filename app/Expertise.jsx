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
      className={`h-full w-full flex flex-wrap bg-omo-yellow justify-center items-center`}
    >
      <h1 className="text-white text-4xl md:text-6xl font-medium w-screen h-1/4 md:h-1/4 text-center p-10">
        Our Expertise
      </h1>
      <ul
        className={`${inView ? "opacity-1" : "opacity-0"} ${
          inView ? "translate-x-0" : "translate-x-12"
        } duration-500 h-1/4 md:h-1/4 w-3/4 text-black text-2xl md:text-5xl font-light`}
      >
        <li>-Branding</li>
        <li>-UX / UI Design</li>
        <li>-Web Development</li>
        <li>-eCommerce</li>
        <li>-SEO</li>
        <li>-Wordpress Development</li>
        <li>-Shopify</li>
      </ul>
      <div className="h-1/4 w-screen flex items-start justify-center p-10">
        <Image alt = "Web Icon spinning for aesthetic" className='animate-rotate' src="/webIcon.svg" width={100} height={100} />
      </div>
    </div>
  );
}
