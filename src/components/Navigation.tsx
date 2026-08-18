import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 200;
        let current = 'home';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop) {
            current = section;
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = useCallback((section: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-white'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <a href="#home" onClick={(e) => scrollToSection('home', e)} className="cursor-pointer inline-flex items-center gap-2.5 relative z-50">
              <span className="inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gray-900 text-white text-xs lg:text-sm font-bold tracking-wide">
                SS
              </span>
              <span className="text-sm lg:text-[15px] font-bold text-gray-900 tracking-[0.08em] uppercase hidden sm:inline">
                Shiv Sharma
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center bg-gray-100/80 rounded-full p-1 lg:p-1.5">
              {navItems.map((item) => {
                const section = item.toLowerCase();
                const isActive = activeSection === section;
                return (
                  <button
                    key={item}
                    onClick={(e) => scrollToSection(section, e)}
                    className={`px-4 py-2 lg:px-5 lg:py-2 text-sm rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-gray-900 font-medium shadow-sm ring-1 ring-black/[0.04]'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-900 cursor-pointer relative z-50"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-white" />
          <div className="relative flex flex-col justify-center items-center h-full px-6">
            <div className="space-y-1 w-full max-w-xs">
              {navItems.map((item) => {
                const section = item.toLowerCase();
                const isActive = activeSection === section;
                return (
                  <button
                    key={item}
                    onClick={(e) => scrollToSection(section, e)}
                    className={`block w-full text-left px-5 py-3.5 text-lg rounded-xl cursor-pointer transition-colors ${
                      isActive
                        ? 'text-gray-900 font-semibold bg-gray-50'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
