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
      subtitle: "Enterprise Lead Management",
      description: "Full-stack lead collection system with AI integration, role-based access, and payment gateway.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
        { name: "Next.js", icon: "⚡", color: "from-blue-500 to-blue-600" },
        { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-600" },
        { name: "Redux", icon: "🔄", color: "from-blue-500 to-blue-600" },
        { name: "Tailwind", icon: "🎨", color: "from-blue-500 to-blue-600" },
        { name: "Supabase", icon: "🚀", color: "from-blue-500 to-blue-600" }
      ],
      features: [
        "Team role-based access",
        "AI API integration", 
        "Payment gateway",
        "Multi-authentication"
      ],
      stats: { users: "1000+", deals: "₹1Cr+" },
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "Currency Formatter",
      subtitle: "TypeScript NPM Package",
      description: "TypeScript NPM package for formatting currency with multiple numbering systems support.",
      technologies: [
        { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
        { name: "NPM", icon: "📦", color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: "🟨", color: "from-blue-500 to-blue-600" }
      ],
      features: [
        "Multiple numbering systems",
        "TypeScript support",
        "Lightweight (2KB)",
        "500+ weekly downloads"
      ],
      stats: { downloads: "500+", size: "2KB" },
      npmLink: "https://www.npmjs.com/package/currency-formatter",
      github: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div 
        className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-bounce-subtle" />
              <span className="text-blue-600 font-bold text-xs sm:text-sm lg:text-base">Featured Portfolio</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Showcasing cutting-edge solutions with modern technologies and innovative user experiences
          </p>
        </div>

        {/* Projects Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-300 overflow-hidden hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-xl h-full">
                
                <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8">
                  {/* Header */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <div className="flex items-start gap-2 mb-2 sm:mb-3">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-600 rounded-full text-[9px] sm:text-xs border border-blue-500/50 flex-shrink-0">
                          <Star size={10} className="sm:w-3 sm:h-3" />
                          <span className="font-bold hidden sm:inline">Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-blue-600 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold mb-2 sm:mb-3">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-gray-700 text-[9px] sm:text-xs md:text-sm lg:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-blue-600 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Tech Stack</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`relative p-1.5 sm:p-2 md:p-3 bg-gradient-to-r ${tech.color} rounded-md sm:rounded-lg border border-white/20 font-bold text-white hover:scale-105 transform transition-all duration-300 shadow-md overflow-hidden`}
                        >
                          <div className="text-center">
                            <div className="text-sm sm:text-base md:text-xl mb-0.5 sm:mb-1">
                              {tech.icon}
                            </div>
                            <div className="text-[7px] sm:text-[8px] md:text-[10px] font-semibold leading-tight truncate">{tech.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-blue-600 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Features</span>
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg bg-gray-50 hover:bg-blue-50/50 transition-all duration-300 border border-gray-200">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                          <span className="text-gray-700 text-[8px] sm:text-[10px] md:text-xs leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200">
                    <div className="flex justify-around">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-blue-600 font-black text-xs sm:text-sm md:text-base">{value}</div>
                          <div className="text-gray-600 text-[8px] sm:text-[9px] md:text-[10px] capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {(project.liveDemo || project.npmLink) && (
                      <a
                        href={project.liveDemo || project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg sm:rounded-xl hover:scale-105 transform transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
                      >
                        <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                        <span>{project.npmLink ? 'View Package' : 'Live Demo'}</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-gray-400 text-gray-700 font-bold rounded-lg sm:rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
                      >
                        <Github size={12} className="sm:w-4 sm:h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-gray-50 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-300 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 sm:mb-8 lg:mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Project Impact
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
                <div className="text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-5 h-5 sm:w-7 sm:h-7 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-5xl font-black text-blue-600 mb-1 sm:mb-2">5+</div>
                  <div className="text-gray-700 text-[10px] sm:text-sm lg:text-xl font-semibold">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 sm:w-7 sm:h-7 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-5xl font-black text-blue-600 mb-1 sm:mb-2">₹1Cr+</div>
                  <div className="text-gray-700 text-[10px] sm:text-sm lg:text-xl font-semibold">Deal Closed</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-5xl font-black text-blue-600 mb-1 sm:mb-2">500+</div>
                  <div className="text-gray-700 text-[10px] sm:text-sm lg:text-xl font-semibold">NPM DL/Week</div>
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