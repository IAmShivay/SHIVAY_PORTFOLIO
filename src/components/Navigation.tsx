import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Wrench, Award, FolderOpen, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: User, section: 'home' },
    { name: 'About', href: '#about', icon: User, section: 'about' },
    { name: 'Experience', href: '#experience', icon: Briefcase, section: 'experience' },
    { name: 'Skills', href: '#skills', icon: Wrench, section: 'skills' },
    { name: 'Certifications', href: '#certifications', icon: Award, section: 'certifications' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, section: 'projects' },
    { name: 'Contact', href: '#contact', icon: MessageCircle, section: 'contact' },
  ];

  // Smooth scroll function without hash in URL
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 py-2'
        : 'bg-gray-50 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20">
          {/* Desktop Navigation - Enhanced with Active States */}
          <div className="hidden lg:flex items-center space-x-1 bg-white backdrop-blur-md rounded-full px-3 py-2.5 border border-gray-300 shadow-lg">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.name}
                  onClick={(e) => scrollToSection(item.section, e)}
                  className={`group relative flex items-center gap-2.5 px-4 py-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-gray-900 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-blue-500/10 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent
                    size={16}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 scale-110'
                        : 'group-hover:text-blue-600 group-hover:scale-110'
                    }`}
                  />
                  <span className="font-medium text-sm xl:text-base">{item.name}</span>

                  {/* Clean background gradient - no extra indicators */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </button>
              );
            })}
          </div>

          {/* Tablet Navigation - Compact Version with Active States */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 bg-white backdrop-blur-md rounded-full px-2 py-2 border border-gray-300">
            {navItems.slice(0, 4).map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.name}
                  onClick={(e) => scrollToSection(item.section, e)}
                  className={`group relative flex items-center justify-center p-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-gray-900 bg-blue-500/20 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-blue-500/10'
                  }`}
                  title={item.name}
                >
                  <IconComponent
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 scale-110'
                        : 'group-hover:text-blue-600 group-hover:scale-110'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </button>
              );
            })}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex items-center justify-center p-2.5 text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-full hover:bg-blue-500/10 cursor-pointer"
              title="More"
            >
              <Menu size={18} className="group-hover:text-blue-600 transition-colors duration-300" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-600 hover:text-gray-900 transition-all duration-300 bg-white backdrop-blur-md rounded-xl border border-gray-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer group"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden lg:hidden">
            <div className="bg-white backdrop-blur-md rounded-2xl mt-3 mx-2 p-6 border border-gray-300 animate-fade-in shadow-2xl">
              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.section;
                  return (
                    <button
                      key={item.name}
                      onClick={(e) => {
                        scrollToSection(item.section, e);
                        setIsOpen(false);
                      }}
                      className={`group flex items-center gap-4 py-4 px-5 transition-all duration-300 rounded-xl hover:shadow-lg border cursor-pointer w-full text-left ${
                        isActive
                          ? 'text-gray-900 bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-blue-500/10 border-transparent hover:border-blue-500/30'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-500/20 shadow-lg'
                          : 'bg-gray-100 group-hover:bg-blue-500/10'
                      }`}>
                        <IconComponent
                          size={20}
                          className={`transition-all duration-300 ${
                            isActive
                              ? 'text-blue-600 scale-110'
                              : 'group-hover:text-blue-600 group-hover:scale-110'
                          }`}
                        />
                      </div>
                      <span className="font-semibold text-lg">{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-sm text-gray-500 font-medium">
                    Tap anywhere outside to close
                  </span>
                </div>
              </div>
            </div>

            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            ></div>
          </div>
        )}

        {/* Tablet Navigation Menu (for md breakpoint) */}
        {isOpen && (
          <div className="hidden md:block lg:hidden">
            <div className="absolute top-full left-0 right-0 mt-2 mx-4">
              <div className="bg-white backdrop-blur-md rounded-2xl p-4 border border-gray-300 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  {navItems.slice(4).map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.section;
                    return (
                      <button
                        key={item.name}
                        onClick={(e) => {
                          scrollToSection(item.section, e);
                          setIsOpen(false);
                        }}
                        className={`group flex items-center gap-3 py-3 px-4 transition-all duration-300 rounded-xl cursor-pointer w-full text-left ${
                          isActive
                            ? 'text-gray-900 bg-blue-500/20 shadow-lg'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-blue-500/10'
                        }`}
                      >
                        <IconComponent
                          size={18}
                          className={`transition-all duration-300 ${
                            isActive
                              ? 'text-blue-600 scale-110'
                              : 'group-hover:text-blue-600 group-hover:scale-110'
                          }`}
                        />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;