import { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import SmoothScroll from '../components/motion/SmoothScroll';
import Preloader from '../components/motion/Preloader';
import Cursor from '../components/motion/Cursor';
import ScrollProgress from '../components/motion/ScrollProgress';
import { useScrollAnimations } from '../components/motion/useScrollAnimations';

const Index = () => {
  const main = useRef<HTMLElement>(null);
  useScrollAnimations(main);

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] text-gray-900 dark:text-gray-100 overflow-x-clip transition-colors duration-300">
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <main ref={main}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <div className="grain" aria-hidden="true" />
    </div>
  );
};

export default Index;
