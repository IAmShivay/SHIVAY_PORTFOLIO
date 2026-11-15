import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion, setLenis } from '@/lib/motion';

/** Inertial scrolling driven by GSAP's ticker so ScrollTrigger stays perfectly in sync. */
const SmoothScroll = () => {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    // Time-based expo-out glide: consistent feel regardless of frame rate. Touch stays native.
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    setLenis(lenis);
    document.documentElement.classList.add('lenis');

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return null;
};

export default SmoothScroll;
