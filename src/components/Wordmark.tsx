import { gsap } from '@/lib/motion';

/*
 * Wordmark: "Shiv Sharma" set tight in Space Grotesk. The one signature detail
 * is the dot of the i — a small square that behaves like a cursor: it drops in
 * last, hops on hover and blinks now and then. Monochrome via CSS variables.
 */

const letters = (word: string, offset = 0) =>
  word.split('').map((c, i) => (
    <span key={i} data-wm-c data-i={i + offset} className="inline-block">{c}</span>
  ));

const Wordmark = ({ className = '', full = false }: { className?: string; full?: boolean }) => (
  <span className={`wordmark ${full ? 'wm-full' : ''} ${className}`} role="img" aria-label="Shiv Sharma">
    <span className="wm-word wm-first" aria-hidden="true">
      {letters('Sh')}
      {/* dotless ı + square tittle */}
      <span data-wm-c data-i={2} className="relative inline-block">
        ı<span data-wm-dot className="wm-tittle" />
      </span>
      {letters('v', 3)}
    </span>
    <span className="wm-tail" aria-hidden="true">
      <span className="wm-word wm-last">{letters('Sharma', 4)}</span>
    </span>
  </span>
);

// Alternate letters enter from above and below their mask.
const fromY = (i: number) => (i % 2 ? 110 : -110);

const blinkers = new WeakMap<Element, gsap.core.Timeline>();

export function wordmarkIn(root: Element, delay = 0) {
  const chars = [...root.querySelectorAll<HTMLElement>('[data-wm-c]')];
  const dot = root.querySelector('[data-wm-dot]');
  const tl = gsap.timeline({ delay });
  tl.set(root, { autoAlpha: 1 })
    .from(chars, { yPercent: (i) => fromY(i), duration: 1, ease: 'expo.out', stagger: 0.04 }, 0)
    .from(dot, { yPercent: -500, duration: 0.7, ease: 'bounce.out' }, 0.55)
    .add(() => {
      // An occasional cursor blink on the tittle — rare enough to feel alive, not busy.
      blinkers.get(root)?.kill();
      blinkers.set(root, gsap.timeline({ repeat: -1, repeatDelay: 5.5, delay: 2 })
        .to(dot, { opacity: 0, duration: 0.01 }).to(dot, { opacity: 1, duration: 0.01, delay: 0.45 })
        .to(dot, { opacity: 0, duration: 0.01, delay: 0.45 }).to(dot, { opacity: 1, duration: 0.01, delay: 0.45 }));
    });
  return tl;
}

/** Letters leave the way they came; the tittle lifts off first. */
export function wordmarkOut(root: Element) {
  const chars = root.querySelectorAll('[data-wm-c]');
  return gsap.timeline()
    .add(() => { blinkers.get(root)?.kill(); blinkers.delete(root); }, 0)
    .to(root.querySelector('[data-wm-dot]'), { yPercent: -500, duration: 0.35, ease: 'power3.in' }, 0)
    .to(chars, { yPercent: (i) => -fromY(i), duration: 0.5, ease: 'power3.in', stagger: 0.02 }, 0.05);
}

/** Hover: the tittle hops. Returns a cleanup. */
export function wordmarkHover(host: HTMLElement) {
  const mark = host.querySelector('.wordmark')!;
  const dot = mark.querySelector('[data-wm-dot]');
  const enter = () => {
    gsap.timeline({ overwrite: 'auto' })
      .to(dot, { yPercent: -260, duration: 0.22, ease: 'power2.out' })
      .to(dot, { yPercent: 0, duration: 0.5, ease: 'bounce.out' });
  };
  host.addEventListener('pointerenter', enter);
  return () => {
    host.removeEventListener('pointerenter', enter);
    blinkers.get(mark)?.kill();
  };
}

export default Wordmark;
