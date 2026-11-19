import { lazy, Suspense, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import Magnetic from './motion/Magnetic';
import LocalTime from './LocalTime';
import { scramble } from '@/lib/scramble';
import { gsap, SplitText, useGSAP, prefersReducedMotion, introReady, scrollToId } from '@/lib/motion';

const SystemGraph = lazy(() => import('./motion/SystemGraph'));

const NOW = ['real-time systems', 'scalable APIs', 'job queues', 'cloud pipelines', 'AI tooling'];

/** "Now building → …" — cycles through focus areas with a decode effect. */
const NowTicker = () => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (document.hidden || !ref.current) return;
      i = (i + 1) % NOW.length;
      scramble(ref.current, NOW[i], 700);
    }, 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
      <span className="text-gray-900 dark:text-white">$</span> now building
      <span className="text-gray-400 dark:text-gray-600">→</span>
      <span ref={ref} className="text-gray-900 dark:text-white">{NOW[0]}</span>
    </span>
  );
};

const socials = [
  { icon: Github, href: "https://github.com/IAmShivay", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shivaysharmachemistry@gmail.com", label: "Email" },
];

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.set('[data-hero-name]', { autoAlpha: 0 });
    gsap.set('[data-hero-fade]', { y: 28, autoAlpha: 0 });

    // Split only once the webfont is in, so the line masks fit the real glyphs.
    Promise.all([introReady, document.fonts.ready]).then(() => {
      const split = SplitText.create('[data-hero-name]', { type: 'chars', mask: 'lines' });
      gsap.set(split.chars, { yPercent: 115 });
      gsap.set('[data-hero-name]', { autoAlpha: 1 });
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .to(split.chars, { yPercent: 0, duration: 1.4, stagger: 0.035 })
        .to('[data-hero-fade]', { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.08 }, 0.35);
    });

    // Scroll-out: copy lifts and fades while the diagram drifts behind it.
    const out = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.6 };
    gsap.to('[data-hero-copy]', { yPercent: -18, autoAlpha: 0.15, ease: 'none', scrollTrigger: out });
    gsap.to('[data-hero-cue]', { autoAlpha: 0, ease: 'none', scrollTrigger: { ...out, end: '15% top' } });
  }, { scope: root });

  return (
    <section ref={root} id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-28 sm:pt-28 lg:pt-32 overflow-hidden">
      <Suspense fallback={null}><SystemGraph /></Suspense>
      {/* Soft scrim keeps the copy legible where the diagram's mesh runs behind it */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_22%_55%,rgba(255,255,255,0.94)_30%,transparent_78%)] dark:bg-[radial-gradient(ellipse_55%_60%_at_22%_55%,rgba(17,17,17,0.94)_30%,transparent_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#111] to-transparent pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-hero-copy className="max-w-2xl">
          <div data-hero-fade className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white text-[11px] sm:text-xs font-medium rounded-full border border-gray-200 dark:border-gray-500">
              <span className="w-1.5 h-1.5 bg-gray-900 rounded-full animate-pulse" />
              Available for work
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-gray-500">
              <MapPin size={11} /> Bangalore, India
            </span>
          </div>

          <h1 data-hero-name className="text-[14.5vw] min-[420px]:text-[13vw] sm:text-7xl lg:text-[6rem] xl:text-[7.25rem] font-bold text-gray-900 dark:text-white tracking-[-0.055em] leading-[0.9] mb-6 lg:mb-8">
            Shiv Kumar
            <br />
            <span className="text-outline">Sharma</span>
          </h1>

          <p data-hero-fade className="text-lg sm:text-xl lg:text-[26px] text-gray-800 dark:text-gray-200 font-medium tracking-[-0.02em] mb-3 sm:mb-4">
            Full Stack <span className="code-accent">Software Engineer</span><span className="caret" aria-hidden="true" />
          </p>

          <div data-hero-fade className="mb-4 sm:mb-5"><NowTicker /></div>

          <p data-hero-fade className="text-[15px] lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-7 sm:mb-9 max-w-lg">
            I build scalable backend systems, real-time applications, and cloud-native deployments.
            2.5+ years shipping production code with Node.js, React/Next.js, and GCP.
          </p>

          <div data-hero-fade className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 mb-7 sm:mb-9">
            <Magnetic>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }} className="btn-fill btn-fill-primary h-12 px-6 bg-gray-900 dark:bg-white rounded-full text-white dark:text-gray-900 text-sm font-medium shadow-lg shadow-black/15 dark:shadow-white/10">
                <span>View Work</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="btn-fill btn-fill-ghost h-12 px-6 border border-gray-300 dark:border-gray-700 rounded-full text-gray-800 dark:text-gray-200 text-sm font-medium bg-white dark:bg-[#111]">
                <span>Get in Touch</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://res.cloudinary.com/dyiso4ohk/image/upload/v1766899151/BACKEND_ENGINEER_uxavna.pdf" download className="col-span-2 inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-5 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors link-underline">
                <Download size={14} /> Resume.pdf
              </a>
            </Magnetic>
          </div>

          <div data-hero-fade className="flex flex-wrap items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <Magnetic key={label} strength={0.5}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="w-11 h-11 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 rounded-full transition-colors bg-white dark:bg-[#111] active:scale-90" aria-label={label}>
                  <Icon size={17} />
                </a>
              </Magnetic>
            ))}
            <span className="hidden sm:block w-px h-4 mx-1 bg-gray-200 dark:bg-gray-700" />
            <div className="hidden sm:flex flex-wrap gap-1.5">
              {["Node.js", "NestJS", "TypeScript", "Redis", "GCP", "Docker"].map((t) => (
                <span key={t} className="px-2 py-0.5 font-mono text-[11px] text-gray-500 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-[#111]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <div data-hero-cue className="absolute bottom-5 sm:bottom-6 inset-x-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
          <span className="inline-flex items-center gap-2">
            <span className="relative block w-px h-8 bg-gray-300 dark:bg-gray-700 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gray-900 dark:bg-white animate-scroll-cue" />
            </span>
            Scroll
          </span>
          <span className="hidden lg:inline">Hover a service · click to fan out requests</span>
          <LocalTime />
        </div>
      </div>
    </section>
  );
};

export default Hero;
