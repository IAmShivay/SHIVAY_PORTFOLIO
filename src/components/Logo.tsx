
import { useState, useEffect } from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative flex items-center gap-3 p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
        {/* Compact Icon Container */}
        <div className="relative">
          {/* Main Icon Background */}
          <div className="relative p-2.5 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg group-hover:scale-105 transition-all duration-300 shadow-md">
            <Code2 className="w-5 h-5 text-white group-hover:rotate-6 transition-transform duration-300" />
          </div>

          {/* Subtle Sparkle */}
          <Sparkles className="absolute -top-0.5 -right-0.5 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
        </div>

        {/* Compact Name Typography */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Shiv Kumar
            </span>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors duration-300">
            Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
