import { useState, useEffect } from 'react';
import { Menu, X, Code2, User, Briefcase, Wrench, FolderOpen, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
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
    { name: 'Projects', href: '#projects', icon: FolderOpen, section: 'projects' },
    { name: 'Contact', href: '#contact', icon: MessageCircle, section: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Enhanced Logo with Better Spacing */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - Enhanced with Active States */}
          <div className="hidden lg:flex items-center space-x-1 bg-gray-800/40 backdrop-blur-md rounded-full px-3 py-2.5 border border-gray-700/60 shadow-lg">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-2.5 px-4 py-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-white bg-blue-500/30 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/20 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent
                    size={16}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-blue-400 scale-110'
                        : 'group-hover:text-blue-400 group-hover:scale-110'
                    }`}
                  />
                  <span className="font-medium text-sm xl:text-base">{item.name}</span>

                  {/* Clean background gradient - no extra indicators */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </a>
              );
            })}
          </div>

          {/* Tablet Navigation - Compact Version with Active States */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 bg-gray-800/40 backdrop-blur-md rounded-full px-2 py-2 border border-gray-700/60">
            {navItems.slice(0, 4).map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center justify-center p-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-white bg-blue-500/30 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/20'
                  }`}
                  title={item.name}
                >
                  <IconComponent
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-blue-400 scale-110'
                        : 'group-hover:text-blue-400 group-hover:scale-110'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </a>
              );
            })}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex items-center justify-center p-2.5 text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-blue-500/20 cursor-pointer"
              title="More"
            >
              <Menu size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-300 hover:text-white transition-all duration-300 bg-gray-800/40 backdrop-blur-md rounded-xl border border-gray-700/60 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer group"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden lg:hidden">
            <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl mt-3 mx-2 p-6 border border-gray-800/60 animate-fade-in shadow-2xl">
              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.section;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center gap-4 py-4 px-5 transition-all duration-300 rounded-xl hover:shadow-lg border cursor-pointer ${
                        isActive
                          ? 'text-white bg-blue-500/30 border-blue-500/50 shadow-lg shadow-blue-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-blue-500/20 border-transparent hover:border-blue-500/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-500/30 shadow-lg'
                          : 'bg-gray-800/50 group-hover:bg-blue-500/20'
                      }`}>
                        <IconComponent
                          size={20}
                          className={`transition-all duration-300 ${
                            isActive
                              ? 'text-blue-400 scale-110'
                              : 'group-hover:text-blue-400 group-hover:scale-110'
                          }`}
                        />
                      </div>
                      <span className="font-semibold text-lg">{item.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="text-center">
                  <span className="text-sm text-gray-400 font-medium">
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
              <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 border border-gray-800/60 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  {navItems.slice(4).map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.section;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center gap-3 py-3 px-4 transition-all duration-300 rounded-xl cursor-pointer ${
                          isActive
                            ? 'text-white bg-blue-500/30 shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-blue-500/20'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent
                          size={18}
                          className={`transition-all duration-300 ${
                            isActive
                              ? 'text-blue-400 scale-110'
                              : 'group-hover:text-blue-400 group-hover:scale-110'
                          }`}
                        />
                        <span className="font-medium">{item.name}</span>
                      </a>
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
