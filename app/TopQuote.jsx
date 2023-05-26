import { useInView } from 'react-intersection-observer';

export default function TopQuote() {
  const { ref, inView, entry } = useInView({
    threshold: .5,
    delay: 300,
    triggerOnce: true,
    rootMargin: '40px'
  });

  return (
    <p
      ref={ref}
      id="needWebsite"
      className={`w-4/5 text-white font-light 
          transition-transform duration-500 ${
            inView ? 'translate-y-0' : 'translate-y-24'
          }
          transition-opacity duration-1000 ${
            inView ? 'opacity-1' : 'opacity-0'
          }`}
    >
      So, you&#39;re in need of a website?
    </p>
  );
}
