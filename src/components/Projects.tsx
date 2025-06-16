
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "SALES CRM",
      description: "A comprehensive full-stack lead collection system with advanced features including team invitation role-based access, AI integration with Together AI API, and seamless Cloudinary integration.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
        { name: "Next.js", icon: "⚡", color: "from-gray-700 to-black" },
        { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
        { name: "Redux Toolkit Query", icon: "🔄", color: "from-purple-500 to-purple-700" },
        { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-blue-500" },
        { name: "Supabase", icon: "🚀", color: "from-green-400 to-emerald-600" }
      ],
      features: [
        "Full-stack lead collection system",
        "Team invitation with role-based access control",
        "Together AI API integration for flexible data structure support",
        "Comprehensive Next.js Serverless SaaS Tool",
        "Razorpay Payment Gateway integration",
        "Clerk multi-authentication support"
      ],
      liveDemo: "#",
      github: "#",
      featured: true,
      gradient: "from-blue-600/20 via-purple-600/20 to-pink-600/20"
    },
    {
      title: "Currency Formatter NPM Package",
      description: "A TypeScript-based NPM package for formatting currency values with support for multiple numbering systems. Published on NPM registry with consistent positive user feedback.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
        { name: "NPM", icon: "📦", color: "from-red-500 to-red-700" },
        { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-orange-500" }
      ],
      features: [
        "Support for multiple numbering systems",
        "TypeScript support with full type definitions",
        "Lightweight and tree-shakable",
        "500+ weekly downloads",
        "Comprehensive documentation"
      ],
      npmLink: "https://www.npmjs.com/package/currency-formatter",
      github: "#",
      featured: true,
      gradient: "from-orange-600/20 via-red-600/20 to-pink-600/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background with Mouse Tracking */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Mouse tracking light effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 font-bold border border-blue-500/30 backdrop-blur-sm text-lg">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in full-stack development and innovative solutions with cutting-edge technologies
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 400) * 0.01}deg) rotateY(${(mousePosition.x - 400) * 0.01}deg)`,
              }}
            >
              {/* Floating Tech Stack Icons Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="absolute w-16 h-16 opacity-10 group-hover:opacity-20 transition-all duration-700 animate-float"
                    style={{
                      left: `${15 + (techIndex * 15)}%`,
                      top: `${20 + (techIndex % 3) * 20}%`,
                      animationDelay: `${techIndex * 0.5}s`,
                      transform: `scale(${1 + Math.sin(Date.now() * 0.001 + techIndex) * 0.2})`,
                    }}
                  >
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl backdrop-blur-sm shadow-2xl`}>
                      {tech.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Content */}
              <div className="relative z-10 p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30 backdrop-blur-sm">
                          <Star size={16} className="animate-pulse-glow" />
                          <span className="font-semibold">Featured</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed max-w-4xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Tech Stack Display */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className={`group/tech relative px-6 py-3 bg-gradient-to-r ${tech.color} rounded-2xl border border-white/20 font-bold text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center gap-2">
                          <span className="text-xl">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <span className="text-blue-400 mt-1 text-lg">✦</span>
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.npmLink && (
                    <a
                      href={project.npmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <ExternalLink size={20} />
                      <span>NPM Package</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-2xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm hover:bg-blue-500/10"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-gray-900/90 via-purple-900/30 to-gray-900/90 backdrop-blur-xl p-12 rounded-3xl border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Project Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="text-5xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-gray-300 text-xl font-semibold">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-black text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">₹1Cr+</div>
                  <div className="text-gray-300 text-xl font-semibold">Deal Closed</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-gray-300 text-xl font-semibold">NPM Downloads/Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
