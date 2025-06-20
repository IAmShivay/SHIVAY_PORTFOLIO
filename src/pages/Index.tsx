
import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add smooth scrolling behavior
    const container = containerRef.current;
    if (container) {
      container.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
