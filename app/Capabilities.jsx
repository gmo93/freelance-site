import { useInView } from 'react-intersection-observer';
import CapabilityItem from './CapabilityItem';

export default function Capabilites() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`h-screen w-full flex flex-wrap bg-omo-yellow justify-center items-center`}
    >
      <h1 className="text-white text-4xl font-bold w-screen text-center">
        Capabilities
      </h1>
      <ul className="h-1/2 w-3/4 text-black text-xl font-semibold">
        <CapabilityItem />
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-100`}>
          -Design and Build Sites From Scratch
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-200`}>
          -Develop Web Applications
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-400`}>
          -Create Wordpress, Shopify, or Squarespace sites
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-800`}>
          -Edit existing sites
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-1000`}>
          -Connect site to database
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-1200`}>
          -Setup backend of site
        </li>
      </ul>
    </div>
  );
}
