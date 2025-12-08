import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Star, Sparkles, Zap, Trophy } from 'lucide-react';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      subtitle: "Enterprise Lead Management System",
      description: "A comprehensive full-stack lead collection system with advanced features including team invitation role-based access, AI integration with Together AI API, and seamless Cloudinary integration.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
        { name: "Next.js", icon: "⚡", color: "from-blue-500 to-blue-600" },
        { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-600" },
        { name: "Redux Toolkit Query", icon: "🔄", color: "from-blue-500 to-blue-600" },
        { name: "Tailwind CSS", icon: "🎨", color: "from-blue-500 to-blue-600" },
        { name: "Supabase", icon: "🚀", color: "from-blue-500 to-blue-600" }
      ],
      features: [
        "Full-stack lead collection system",
        "Team invitation with role-based access control", 
        "Together AI API integration for flexible data structure support",
        "Comprehensive Next.js Serverless SaaS Tool",
        "Razorpay Payment Gateway integration",
        "Clerk multi-authentication support"
      ],
      stats: { users: "1000+", deals: "₹1Cr+", rating: "4.9" },
      liveDemo: "#",
      github: "#",
      featured: true,
      gradient: "from-blue-600/20 via-blue-500/20 to-blue-600/20"
    },
    {
      title: "Currency Formatter NPM",
      subtitle: "TypeScript Utility Package",
      description: "A TypeScript-based NPM package for formatting currency values with support for multiple numbering systems. Published on NPM registry with consistent positive user feedback.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
        { name: "NPM", icon: "📦", color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: "🟨", color: "from-blue-500 to-blue-600" }
      ],
      features: [
        "Support for multiple numbering systems",
        "TypeScript support with full type definitions",
        "Lightweight and tree-shakable",
        "500+ weekly downloads",
        "Comprehensive documentation"
      ],
      stats: { downloads: "500+", size: "2KB", rating: "5.0" },
      npmLink: "https://www.npmjs.com/package/currency-formatter",
      github: "#",
      featured: true,
      gradient: "from-blue-600/20 via-blue-500/20 to-blue-600/20"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Multiple floating elements */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-500"
        style={{
          right: mousePosition.x * 0.5,
          top: mousePosition.y * 0.3,
        }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 animate-bounce-subtle" />
              <span className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">Featured Portfolio</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Showcasing cutting-edge solutions with modern technologies, scalable architectures, and innovative user experiences
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="relative bg-white rounded-3xl border border-gray-300 overflow-hidden hover:border-blue-400 transition-all duration-700 hover:scale-[1.02] backdrop-blur-xl shadow-xl hover:shadow-2xl">
                
                {/* Animated Tech Stack Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="absolute opacity-5 group-hover:opacity-15 transition-all duration-1000"
                      style={{
                        left: `${10 + (techIndex * 25)}%`,
                        top: `${15 + (techIndex % 2) * 30}%`,
                        transform: `scale(${2 + Math.sin(Date.now() * 0.001 + techIndex) * 0.5}) rotate(${techIndex * 45}deg)`,
                        animationDelay: `${techIndex * 0.2}s`,
                      }}
                    >
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-4xl shadow-2xl animate-float`}>
                        {tech.icon}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                        </div>
                        {project.featured && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-sm"></div>
                            <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-600 rounded-full text-sm border border-blue-500/50 backdrop-blur-sm">
                              <Star size={16} className="animate-pulse-glow" />
                              <span className="font-bold">Featured</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-blue-600 text-lg font-semibold mb-4">
                        {project.subtitle}
                      </p>
                      
                      <p className="text-gray-700 text-xl mb-8 leading-relaxed max-w-4xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats Panel */}
                    <div className="hidden lg:block ml-8">
                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 min-w-[200px]">
                        <h4 className="text-blue-600 font-bold mb-4 text-center">Project Stats</h4>
                        <div className="space-y-3">
                          {Object.entries(project.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="flex justify-between items-center">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="text-gray-900 font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                      <Zap className="w-6 h-6 animate-pulse" />
                      Technologies Used
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`group/tech relative p-4 bg-gradient-to-r ${tech.color} rounded-2xl border border-white/20 font-bold text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 text-center">
                            <div className="text-2xl mb-2 group-hover/tech:scale-110 transition-transform duration-300">
                              {tech.icon}
                            </div>
                            <div className="text-xs font-semibold">{tech.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                      Key Features
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="group/feature relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50/50 hover:from-blue-500/10 hover:to-blue-600/10 transition-all duration-300 border border-gray-200 hover:border-blue-400">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 animate-pulse"></div>
                            <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                          </div>
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
                        className="group/btn relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
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
                        className="group/btn relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
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
                        className="group/btn flex items-center gap-3 px-8 py-4 border-2 border-gray-400 text-gray-700 font-bold rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm hover:bg-blue-500/10"
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
            </div>
          ))}
        </div>

        {/* Enhanced Achievement Stats */}
        <div className="mt-24 relative">
          <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-gray-50 backdrop-blur-xl p-12 rounded-3xl border border-gray-300 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-500/5"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Project Impact & Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-5xl font-black text-blue-600 mb-2">5+</div>
                    <div className="text-gray-700 text-xl font-semibold">Projects Completed</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-5xl font-black text-blue-600 mb-2">₹1Cr+</div>
                    <div className="text-gray-700 text-xl font-semibold">Deal Closed</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-5xl font-black text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700 text-xl font-semibold">NPM Downloads/Week</div>
                  </div>
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