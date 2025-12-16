import { useEffect, useRef, useState } from "react";


const AnimatedWrapper = ({ children, delay = 0, className = '', animation = 'fadeInUp', threshold = 0.2 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
          setIsVisible(entry.isIntersecting); 
        },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  let animationClasses = '';
  let initialClasses = '';

  switch (animation) {
    case 'fadeInUp':
      initialClasses = 'opacity-0 translate-y-8';
      animationClasses = 'opacity-100 translate-y-0';
      break;
    case 'fadeIn':
      initialClasses = 'opacity-0';
      animationClasses = 'opacity-100';
      break;
    case 'fadeInLeft':
      initialClasses = 'opacity-0 -translate-x-8';
      animationClasses = 'opacity-100 translate-x-0';
      break;
    case 'fadeInRight':
      initialClasses = 'opacity-0 translate-x-8';
      animationClasses = 'opacity-100 translate-x-0';
      break;
    default:
      initialClasses = 'opacity-0';
      animationClasses = 'opacity-100';
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? animationClasses : initialClasses
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;