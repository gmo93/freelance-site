import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Expertise() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`h-full w-full flex flex-wrap bg-omo-yellow justify-center md:justify-center items-center`}
    >
      <div className={`flex flex-wrap items-center`}>
        <h1 className="text-white text-4xl md:text-6xl font-medium w-screen md:h-1/4 text-center p-10">
          Our Expertise
        </h1>
      </div>
      <ul
        className={`${inView ? 'opacity-1' : 'opacity-0'} ${
          inView ? 'translate-x-0' : 'translate-x-12'
        } duration-500 h-1/4 w-3/4 text-black text-2xl md:text-4xl lg: text-5xl font-light flex flex-wrap`}
      >
        <li className={`w-full`}>-Branding</li>
        <li className={`w-full`}>-UX / UI Design</li>
        <li className={`w-full`}>-Web Development</li>
        <li className={`w-full`}>-eCommerce</li>
        <li className={`w-full`}>-SEO</li>
        <li className={`w-full`}>-Wordpress Development</li>
        <li className={`w-full`}>-Shopify</li>
        <li className={`w-full`}>-Home Page Animations</li>
      </ul>
      <div className="h-1/4 w-screen flex items-center justify-center p-10">
        <Image
          alt="Web Icon spinning for aesthetic"
          className="animate-rotate"
          src="/webIcon.svg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
