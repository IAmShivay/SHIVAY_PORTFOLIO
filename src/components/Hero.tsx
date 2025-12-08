import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Sparkles, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
      color: string;
      speed: number;
    }> = [];

    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-2xl transition-all duration-500"
          style={{
            right: mousePosition.x * 0.5,
            top: mousePosition.y * 0.3,
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] left-[8%] opacity-20">
          <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/60">
            <span className="filter drop-shadow-lg">⚛️</span>
          </div>
        </div>
        <div className="absolute top-[20%] right-[10%] opacity-20">
          <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/70">
            <span className="filter drop-shadow-lg">🔷</span>
          </div>
        </div>
        <div className="absolute bottom-[25%] left-[12%] opacity-20">
          <div className="w-18 h-18 bg-white/45 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/65">
            <span className="filter drop-shadow-lg">🚀</span>
          </div>
        </div>
        <div className="absolute bottom-[20%] right-[15%] opacity-20">
          <div className="w-16 h-16 bg-white/38 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/58">
            <span className="filter drop-shadow-lg">⚡</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20">
            {/* Profile Image with Enhanced Card */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-full border-4 border-white/80 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src="https://png.pngtree.com/png-clipart/20231115/original/pngtree-girl-clipart-transparent-background-png-image_13556542.png"
                  alt="Shiv Kumar Sharma"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full"
                />
                {/* Decorative Rings */}
                <div className="absolute -inset-2 border-2 border-blue-500/30 rounded-full animate-pulse" />
                <div className="absolute -inset-4 border border-purple-500/20 rounded-full" />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-blue-600 font-bold text-sm sm:text-base">Available for Opportunities</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                    Shiv Kumar
                  </h1>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Sharma
                </h2>
              </div>

              <div className="relative mb-6 sm:mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-blue-50 rounded-xl border border-gray-300">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-bold text-sm sm:text-base">Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-purple-50 rounded-xl border border-gray-300">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 font-bold text-sm sm:text-base">MERN Stack</span>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Passionate about creating exceptional web experiences with modern technologies.
                Specializing in React.js, Node.js, and building scalable applications that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12 px-4 lg:px-0">
                <a
                  href="#projects"
                  className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="px-8 sm:px-10 py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-50 w-full sm:w-auto text-center"
                >
                  Get In Touch
                </a>

                <a
                  href="https://drive.google.com/file/d/1kvmfMeFiURfCOZwEger3jDb0AtqTNQJ4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-gray-100 to-blue-50 border border-gray-300 rounded-xl text-gray-700 font-bold hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="text-sm sm:text-base">Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start items-center flex-wrap gap-3 sm:gap-4 px-4 lg:px-0">
                {[
                  { icon: Github, href: "https://github.com/iAmShivay", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:shivaysharma77893@gmail.com", label: "Email" },
                  { icon: ExternalLink, href: "https://infilabs.in", label: "Website" }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative p-4 bg-white/60 backdrop-blur-sm border border-gray-300 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce" />
          </div>
          <span className="text-xs text-gray-600 font-medium">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;