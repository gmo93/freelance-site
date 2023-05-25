import { useInView } from 'react-intersection-observer';

export default function TopQuote() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    delay: 300,
    triggerOnce: true,
    rootMargin: '20px'
  });

  return (
    <p
      ref={ref}
      id="rightPlace"
      className={`w-4/5 text-omo-yellow text-end font-bold
        transition-transform duration-500 ${
          inView ? 'translate-x-0' : 'translate-x-12'
        }
          transition-opacity duration-500 ${
            inView ? 'opacity-1' : 'opacity-0'
          }`}
    >
      Well, you have come to the right place! Whether it be designing, building
      a website from scratch, or even updating an existing one, we would be
      happy to help.
    </p>
  );
}
