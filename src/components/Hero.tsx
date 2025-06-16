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

    // Create more dynamic particles
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

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Keep opacity in bounds
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw connections between nearby particles
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight">
                Shiv Kumar
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Sharma
            </h2>
          </div>
          
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in font-semibold" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer | MERN Stack Specialist
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Passionate about creating exceptional web experiences with modern technologies. 
            Specializing in React.js, Node.js, and building scalable applications that make a difference.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contact"
            className="group relative px-10 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
          >
            <span className="bg-gray-900 px-8 py-2 rounded-full block group-hover:bg-transparent transition-colors duration-300">
              Get In Touch
            </span>
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-700/50 hover:border-gray-500 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Download size={20} />
            Resume
          </a>
        </div>

        <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { icon: Github, href: "https://github.com/iAmShivay", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
            { icon: Mail, href: "mailto:shivaysharma77893@gmail.com", label: "Email" },
            { icon: ExternalLink, href: "https://Shiva-y.live", label: "Website" }
          ].map(({ icon: Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              aria-label={label}
            >
              <Icon size={28} />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-14 border-2 border-blue-400 rounded-full flex justify-center bg-gradient-to-b from-transparent to-blue-500/10">
            <div className="w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
