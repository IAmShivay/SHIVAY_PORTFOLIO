import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import type Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
// Mobile address-bar show/hide resizes the viewport; re-measuring on it causes jumps.
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

// Lenis instance, set by <SmoothScroll />. Falls back to native scrolling when absent.
let lenis: Lenis | null = null;
export const setLenis = (instance: Lenis | null) => { lenis = instance; };
export const getLenis = () => lenis;

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Resolves once the preloader has cleared, so the hero intro can play on cue.
let resolveIntro: () => void;
export const introReady = new Promise<void>((r) => { resolveIntro = r; });
export const markIntroReady = () => resolveIntro();
