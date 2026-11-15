import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/motion';

const ScrollProgress = () => {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(bar.current, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    });
  });

  return <div ref={bar} className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-gray-900 dark:bg-white origin-left scale-x-0" aria-hidden="true" />;
};

export default ScrollProgress;
