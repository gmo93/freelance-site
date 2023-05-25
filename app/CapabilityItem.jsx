import { useInView } from 'react-intersection-observer';

export default function CapabilityItem(item) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <li className={`${inView ? 'opacity-1' : 'opacity-0'}`}>
      -Testert
    </li>
  );
}
