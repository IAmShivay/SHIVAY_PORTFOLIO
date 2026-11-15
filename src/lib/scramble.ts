import { prefersReducedMotion } from './motion';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01';
const running = new WeakMap<HTMLElement, number>();

/**
 * Decodes `text` into `el` left to right, with unresolved characters cycling
 * through glyphs. Best on monospace text so the width never jitters.
 */
export function scramble(el: HTMLElement, text = el.dataset.text ?? el.textContent ?? '', duration = 650) {
  el.dataset.text = text;
  cancelAnimationFrame(running.get(el) ?? 0);
  if (prefersReducedMotion()) { el.textContent = text; return; }

  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const resolved = Math.floor(p * text.length);
    let out = text.slice(0, resolved);
    for (let i = resolved; i < text.length; i++) {
      out += text[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (p < 1) running.set(el, requestAnimationFrame(step));
  };
  running.set(el, requestAnimationFrame(step));
}
