import { useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion, markIntroReady, getLenis } from '@/lib/motion';
import Wordmark, { wordmarkIn, wordmarkOut } from '../Wordmark';


const Preloader = () => {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion()) {
      markIntroReady();
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = 'hidden';
    getLenis()?.stop();
    const counter = { v: 0 };
    const num = root.current!.querySelector<HTMLElement>('[data-count]')!;

    const finish = () => {
      document.documentElement.style.overflow = '';
      getLenis()?.start();
      setDone(true);
    };

    // Full intro on the first visit of a session, a quick wipe after that.
    let seen = false;
    try { seen = sessionStorage.getItem('intro-seen') === '1'; sessionStorage.setItem('intro-seen', '1'); } catch { /* storage blocked */ }

    const mark = root.current!.querySelector('.wordmark')!;
    gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: finish })
      .add(wordmarkIn(mark), 0)
      .to(counter, {
        v: 100, duration: 1.25, ease: 'power3.inOut',
        onUpdate: () => { num.textContent = String(Math.round(counter.v)).padStart(3, '0'); },
      }, 0)
      .to('[data-bar]', { scaleX: 1, duration: 1.25, ease: 'power3.inOut' }, 0)
      .add(wordmarkOut(mark), 1.3)
      .to('[data-meta]', { opacity: 0, duration: 0.25 }, 1.3)
      .add(markIntroReady, 1.7)
      .to('[data-curtain]', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, 1.6)
      .to('[data-curve]', { attr: { d: 'M0 0 L100 0 L100 0 Q50 0 0 0 Z' }, duration: 1, ease: 'expo.inOut' }, 1.6)
      .timeScale(seen ? 2.5 : 1);
  }, { scope: root });

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[100] pointer-events-auto" aria-hidden="true">
      <div data-curtain className="absolute inset-0 bg-[#0b0b0d] text-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <Wordmark full className="preloader-mark text-[14vw] sm:text-[10vw]" />
        </div>
        <div data-meta className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
          <span>Full Stack · Portfolio ’26</span>
          <span data-count className="text-white text-4xl sm:text-6xl font-sans font-semibold tracking-tighter tabular-nums">000</span>
        </div>
        <div data-bar className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-900 origin-left scale-x-0" />
        {/* Curved trailing edge of the curtain */}
        <svg className="absolute top-full left-0 w-full h-[12vh] text-[#0b0b0d]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path data-curve d="M0 0 L100 0 L100 0 Q50 100 0 0 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
