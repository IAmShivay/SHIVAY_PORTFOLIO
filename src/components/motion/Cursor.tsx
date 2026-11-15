import { useEffect, useRef, useState } from 'react';
import { gsap, isFinePointer, prefersReducedMotion } from '@/lib/motion';

/**
 * Two-part cursor: a precise dot plus a lagging ring. Elements opt in to a labelled
 * state with `data-cursor="Label"`; any link or button gets the hover state.
 */
const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [enabled] = useState(() => isFinePointer() && !prefersReducedMotion());

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-cursor');
    const d = dot.current!, r = ring.current!;
    gsap.set([d, r], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dx = gsap.quickTo(d, 'x', { duration: 0.08, ease: 'power3' });
    const dy = gsap.quickTo(d, 'y', { duration: 0.08, ease: 'power3' });
    const rx = gsap.quickTo(r, 'x', { duration: 0.45, ease: 'power3' });
    const ry = gsap.quickTo(r, 'y', { duration: 0.45, ease: 'power3' });

    let shown = false;
    const move = (e: PointerEvent) => {
      if (!shown) { gsap.to([d, r], { opacity: 1, duration: 0.3 }); shown = true; }
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    };

    let current: Element | null = null;
    const over = (e: PointerEvent) => {
      const t = (e.target as Element).closest('[data-cursor], a, button, input, textarea, label');
      if (t === current) return;
      current = t;
      const text = t?.getAttribute('data-cursor') ?? '';
      const field = t?.matches('input, textarea');
      setLabel(text);
      gsap.to(r, {
        width: text ? 96 : t && !field ? 56 : 34,
        height: text ? 96 : t && !field ? 56 : 34,
        backgroundColor: text ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        opacity: field ? 0 : 1,
        duration: 0.4, ease: 'expo.out',
      });
      gsap.to(d, { scale: t ? 0 : 1, duration: 0.3 });
    };
    const leave = () => { gsap.to([d, r], { opacity: 0, duration: 0.3 }); shown = false; };
    const down = () => gsap.to(r, { scale: 0.8, duration: 0.2 });
    const up = () => gsap.to(r, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });

    window.addEventListener('pointermove', move);
    document.addEventListener('pointerover', over);
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none" aria-hidden="true">
      <div ref={ring} className="fixed top-0 left-0 z-[90] w-[34px] h-[34px] rounded-full border border-white mix-blend-difference flex items-center justify-center will-change-transform">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-black">{label}</span>
      </div>
      <div ref={dot} className="fixed top-0 left-0 z-[90] w-1.5 h-1.5 rounded-full bg-white mix-blend-difference will-change-transform" />
    </div>
  );
};

export default Cursor;
