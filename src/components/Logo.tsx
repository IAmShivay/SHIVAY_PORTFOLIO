
import { useState, useEffect } from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Logo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="group relative">
      {/* Animated Background */}
      <div 
        className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>
      
      <div className="relative flex items-center gap-3 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
        {/* Animated Icon */}
        <div className="relative">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Code2 className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
        </div>
        
        {/* Enhanced Name Typography */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Shiv Kumar
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-sm text-gray-400 font-medium tracking-wider">
            Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
