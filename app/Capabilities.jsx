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
      <ul className="text-black text-2xl font-semibold">
        <CapabilityItem />
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-100`}>
          -Create Wireframe
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-200`}>
          -Shopify
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-400`}>
          -Wordpress
        </li>
        <li className={`${inView ? 'opacity-1' : 'opacity-0'} delay-600`}>
          -Build From Scratch
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
