import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.opacity += Math.sin(Date.now() * particle.speed + index) * 0.01;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));

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
        
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8 pt-32 sm:pt-28 lg:pt-28 pb-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 sm:top-32 lg:top-36 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 sm:top-48 lg:top-52 right-4 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 sm:bottom-32 left-4 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Profile Image - Clean Circular */}
            <div className="flex-shrink-0 relative order-1 lg:order-1">
              <div className="relative">
                <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dyiso4ohk/image/upload/e_background_removal/f_png/v1766859570/ChatGPT_Image_Dec_27_2025_11_48_54_PM_nsufpq.png"
                    alt="Shiv Kumar Sharma"
                    className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 -z-10"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 order-2 lg:order-2">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="relative inline-block">
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight cursor-pointer">
                    Shiv Kumar
                  </h1>
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-3 sm:w-4 lg:w-6 xl:w-8 h-3 sm:h-4 lg:h-6 xl:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-glow-pulse"></div>
                  <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-2 sm:w-3 lg:w-4 xl:w-6 h-2 sm:h-3 lg:h-4 xl:h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse delay-500"></div>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Sharma
                </h2>
              </div>

              <div className="relative mb-4 sm:mb-6 lg:mb-8">
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-2 sm:mb-3 lg:mb-4 animate-slide-up font-semibold" style={{ animationDelay: '0.2s' }}>
                  Full Stack Developer | MERN Stack Specialist
                </p>
                <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6 rounded-full animate-glow-pulse"></div>
              </div>

              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-3xl mx-auto lg:mx-0 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
                Passionate about creating exceptional web experiences with modern technologies.
                Specializing in React.js, Node.js, and building scalable applications that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 xl:mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <a
                  href="#projects"
                  className="group relative px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-bold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto text-center cursor-pointer animate-glow-pulse"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                </a>

                <a
                  href="#contact"
                  className="group relative px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border rounded-full text-white font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm w-full sm:w-auto text-center cursor-pointer"
                >
                  <span className="bg-white px-5 sm:px-6 lg:px-8 py-1.5 sm:py-2 rounded-full block group-hover:bg-transparent transition-colors duration-300 text-gray-900 group-hover:text-white">
                    Get In Touch
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1kvmfMeFiURfCOZwEger3jDb0AtqTNQJ4/view?usp=sharing"
                  download
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gray-200/50 border border-gray-400 rounded-full text-gray-700 font-semibold hover:bg-gray-300/50 hover:border-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto cursor-pointer"
                >
                  <Download size={16} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                  <span className="text-sm sm:text-base">Resume</span>
                </a>
              </div>

              <div className="flex justify-center lg:justify-start items-center flex-wrap gap-3 sm:gap-4 lg:gap-6 xl:gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                {[
                  { icon: Github, href: "https://github.com/iAmShivay", label: "GitHub", color: "from-gray-600 to-gray-800" },
                  { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
                  { icon: Mail, href: "mailto:shivaysharma77893@gmail.com", label: "Email", color: "from-red-600 to-red-800" },
                  { icon: ExternalLink, href: "https://infilabs.in", label: "Website", color: "from-purple-600 to-purple-800" }
                ].map(({ icon: Icon, href, label, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative p-2.5 sm:p-3 lg:p-4 bg-white/30 backdrop-blur-sm border border-gray-300 rounded-xl sm:rounded-2xl text-gray-600 hover:text-gray-900 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                    aria-label={label}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-pulse" />
                    <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
                    <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-blue-400 rounded-full flex justify-center bg-gradient-to-b from-transparent to-blue-500/10">
            <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 sm:mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur"></div>
        </div>
      </div>


    </section>
  );
};

export default Hero;