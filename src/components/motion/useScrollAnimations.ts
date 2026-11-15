import type { RefObject } from 'react';
import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion, introReady } from '@/lib/motion';
import { scramble } from '@/lib/scramble';

/**
 * Declarative scroll choreography. Inside `scope`:
 *  - data-split           heading lines rise out of a mask
 *  - data-highlight       words brighten one by one as the block scrolls past
 *  - data-reveal          fades up, staggered with neighbours entering together
 *  - data-scramble        mono label decodes on entry, and again on hover
 *  - data-counter         counts up to its text value ("50K+", "2.5+", "40%")
 *  - data-parallax="0.2"  drifts vertically while scrolling (fraction of its height)
 */
export function useScrollAnimations(scope: RefObject<HTMLElement>) {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const q = gsap.utils.selector(scope);

    q('[data-split]').forEach((el: HTMLElement) => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', autoSplit: true,
        onSplit: (self) => gsap.from(self.lines, {
          yPercent: 115, rotate: 2, duration: 1.2, ease: 'expo.out', stagger: 0.09,
          scrollTrigger: { trigger: el, start: 'clamp(top 88%)', once: true },
        }),
      });
    });

    q('[data-highlight]').forEach((el: HTMLElement) => {
      SplitText.create(el, {
        type: 'words', autoSplit: true,
        onSplit: (self) => gsap.fromTo(self.words, { opacity: 0.14 }, {
          opacity: 1, ease: 'none', stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 50%', scrub: 0.5 },
        }),
      });
    });

    const cleanups: (() => void)[] = [];
    q('[data-scramble]').forEach((el: HTMLElement) => {
      const text = el.textContent ?? '';
      ScrollTrigger.create({ trigger: el, start: 'clamp(top 90%)', once: true, onEnter: () => scramble(el, text, 900) });
      const host = el.parentElement!;
      const again = () => scramble(el, text, 500);
      host.addEventListener('pointerenter', again);
      cleanups.push(() => host.removeEventListener('pointerenter', again));
    });

    const reveals = q('[data-reveal]');
    gsap.set(reveals, { y: 48, autoAlpha: 0 });
    ScrollTrigger.batch(reveals, {
      start: 'clamp(top 92%)', once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.1, ease: 'expo.out', stagger: 0.07 }),
    });

    q('[data-counter]').forEach((el: HTMLElement) => {
      const m = el.textContent!.trim().match(/^([\d.]+)(.*)$/);
      if (!m) return;
      const end = parseFloat(m[1]);
      const decimals = (m[1].split('.')[1] ?? '').length;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end, duration: 2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'clamp(top 90%)', once: true },
        onUpdate: () => { el.textContent = obj.v.toFixed(decimals) + m[2]; },
      });
    });

    q('[data-parallax]').forEach((el: HTMLElement) => {
      const amount = parseFloat(el.dataset.parallax || '0.15');
      gsap.to(el, {
        yPercent: amount * -100, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
    });

    // Layout settles after the preloader lifts (fonts, scrollbar), so re-measure.
    introReady.then(() => ScrollTrigger.refresh());
    return () => cleanups.forEach((c) => c());
  }, { scope });
}
