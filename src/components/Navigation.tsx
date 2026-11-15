import { useState, useEffect, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Moon, Sun, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import Magnetic from './motion/Magnetic';
import LocalTime from './LocalTime';
import Wordmark, { wordmarkIn, wordmarkHover } from './Wordmark';
import { scramble } from '@/lib/scramble';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion, introReady, scrollToId, getLenis } from '@/lib/motion';

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const crumbRef = useRef<HTMLSpanElement>(null);

  // Section breadcrumb in the compact mobile bar decodes on every change.
  useEffect(() => {
    if (crumbRef.current) scramble(crumbRef.current, `~/${activeSection}`, 500);
  }, [activeSection]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.set(navRef.current, { yPercent: -100 });
    introReady.then(() => gsap.to(navRef.current, { yPercent: 0, duration: 1.2, ease: 'expo.out', delay: 0.6 }));
  });

  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstRun = useRef(true);

  // Mobile menu: a circle grows out of the burger, then the links rise in.
  // Fresh tweens each time (no paused timeline), so state can never get stuck.
  useGSAP(() => {
    const menu = menuRef.current!;
    if (firstRun.current) { firstRun.current = false; return; }
    const b = burgerRef.current!.getBoundingClientRect();
    const at = `${b.left + b.width / 2}px ${b.top + b.height / 2}px`;
    const fast = prefersReducedMotion();
    const items = menu.querySelectorAll('[data-menu-item]');
    const foot = menu.querySelector('[data-menu-foot]');
    gsap.killTweensOf([menu, items, foot]);

    if (isOpen) {
      getLenis()?.stop();
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(menu, { clipPath: `circle(0px at ${at})` }, { clipPath: `circle(150% at ${at})`, duration: fast ? 0 : 0.75, ease: 'expo.inOut' });
      gsap.fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: fast ? 0 : 0.9, ease: 'expo.out', stagger: 0.055, delay: fast ? 0 : 0.28 });
      gsap.fromTo(foot, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: fast ? 0 : 0.6, ease: 'power3.out', delay: fast ? 0 : 0.55 });
    } else {
      getLenis()?.start();
      gsap.to(items, { yPercent: -110, duration: fast ? 0 : 0.35, ease: 'power3.in', stagger: 0.025 });
      gsap.to(menu, {
        clipPath: `circle(0px at ${at})`, duration: fast ? 0 : 0.6, ease: 'expo.inOut', delay: fast ? 0 : 0.18,
        onComplete: () => { gsap.set(menu, { visibility: 'hidden' }); },
      });
    }
  }, { dependencies: [isOpen] });

  // Wordmark: letters assemble from alternating sides after the preloader.
  const logoRef = useRef<HTMLAnchorElement>(null);
  useGSAP(() => {
    const mark = logoRef.current!.querySelector('.wordmark')!;
    if (prefersReducedMotion()) return;
    gsap.set(mark, { autoAlpha: 0 });
    introReady.then(() => wordmarkIn(mark, 0.7));
    return wordmarkHover(logoRef.current!);
  });

  // Theme switch reveals the new palette as a circle expanding from the toggle.
  const switchTheme = (e: React.MouseEvent) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    if (!doc.startViewTransition || prefersReducedMotion()) { toggleTheme(); return; }
    const x = e.clientX, y = e.clientY;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    doc.startViewTransition(() => flushSync(toggleTheme)).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(0.76, 0, 0.24, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 80);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active link from section triggers — no per-frame layout reads.
    const triggers = navItems.map((item) => {
      const id = item.toLowerCase();
      return ScrollTrigger.create({
        trigger: `#${id}`, start: 'top 45%', end: 'bottom 45%',
        onToggle: (self) => { if (self.isActive) setActiveSection(id); },
      });
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = useCallback((section: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    // Let the menu start closing before the page moves underneath it.
    setTimeout(() => scrollToId(section), 120);
  }, []);

  return (
    <>
      {/* Full-width bar at the top; condenses into a floating pill once you scroll. */}
      <nav ref={navRef} data-compact={isScrolled} data-open={isOpen} className="nav-shell fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="nav-inner pointer-events-auto mx-auto">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a ref={logoRef} href="#home" onClick={(e) => scrollToSection('home', e)} aria-label="Shiv Sharma — home" className="cursor-pointer inline-flex items-center gap-3 h-11 px-1 relative z-50">
              <Wordmark className="text-[19px] lg:text-[21px]" />
              <span ref={crumbRef} className="nav-crumb md:hidden font-mono text-xs text-gray-500 dark:text-gray-400">~/home</span>
            </a>

            {/* Desktop nav */}
            <div className="nav-links hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-white/5 rounded-full p-1">
              {navItems.map((item) => {
                const section = item.toLowerCase();
                const isActive = activeSection === section;
                return (
                  <button
                    key={item}
                    onClick={(e) => scrollToSection(section, e)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`roll-link px-4 py-2 lg:px-5 lg:py-2 text-sm rounded-full transition-[background-color,color,box-shadow] duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white font-medium shadow-sm ring-1 ring-black/[0.04] dark:ring-white/10'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <span className="roll" data-text={item}><span>{item}</span></span>
                  </button>
                );
              })}
              <Magnetic strength={0.5}>
                <button
                  onClick={switchTheme}
                  className="p-2 lg:p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-full transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </Magnetic>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-1 md:hidden relative z-50">
              <button
                onClick={switchTheme}
                className="w-11 h-11 inline-flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-full active:scale-90 transition-transform cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                ref={burgerRef}
                onClick={() => setIsOpen((o) => !o)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="burger w-11 h-11 -mr-1.5 inline-flex flex-col items-center justify-center gap-[6px] rounded-full bg-gray-900 dark:bg-white active:scale-90 transition-transform cursor-pointer"
                data-open={isOpen}
              >
                <span className="block w-[18px] h-[1.5px] bg-white dark:bg-gray-900 rounded-full" />
                <span className="block w-[18px] h-[1.5px] bg-white dark:bg-gray-900 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden bg-white dark:bg-[#111] invisible overflow-y-auto overscroll-contain"
        data-lenis-prevent
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col min-h-full px-5 pt-24 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 mb-4">Menu</p>
          <ul className="flex-1 flex flex-col justify-center py-4">
            {navItems.map((item, i) => {
              const section = item.toLowerCase();
              const isActive = activeSection === section;
              return (
                <li key={item} className="overflow-hidden border-b border-gray-100 dark:border-gray-800/70 last:border-0">
                  <button
                    data-menu-item
                    tabIndex={isOpen ? 0 : -1}
                    onClick={(e) => scrollToSection(section, e)}
                    className={`w-full flex items-baseline gap-3 py-2.5 min-[380px]:py-3 text-left text-[2.4rem] min-[380px]:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] cursor-pointer active:opacity-60 ${
                      isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    <span className="font-mono text-[11px] tracking-normal text-gray-900 dark:text-white -translate-y-5">0{i + 1}</span>
                    {isActive ? <span>{item}<span className="text-gray-900 dark:text-white">_</span></span> : item}
                  </button>
                </li>
              );
            })}
          </ul>
          <div data-menu-foot className="flex items-end justify-between gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="min-w-0">
              <a href="mailto:shivaysharmachemistry@gmail.com" tabIndex={isOpen ? 0 : -1} className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white truncate">
                Say hello <ArrowUpRight size={14} />
              </a>
              <LocalTime className="block font-mono text-[11px] text-gray-400 dark:text-gray-500 mt-1" />
            </div>
            <div className="flex gap-2 shrink-0">
              <a href="https://github.com/iAmShivaySharma" target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} aria-label="GitHub" className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 active:scale-90 transition-transform"><Github size={18} /></a>
              <a href="https://linkedin.com/in/iamshivay" target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} aria-label="LinkedIn" className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 active:scale-90 transition-transform"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
