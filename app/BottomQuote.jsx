import { useInView } from "react-intersection-observer";

export default function BottomQuote() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    delay: 300,
    triggerOnce: true,
    rootMargin: "40px",
  });

  return (
    <p
      ref={ref}
      id="rightPlace"
      className={`w-4/5 text-white text-start font-light
        transition-transform duration-500 ${
          inView ? "translate-x-0" : "-translate-x-24"
        }
          transition-opacity duration-500 ${
            inView ? "opacity-1" : "opacity-0"
          }`}
    >
      Here at &quot;Little Shop, Big Design&quot; our focus is giving small businesses and shops the same branding and web design opportunities that the big businesses have because why should they have all the fun??
    </p>
  );
}
