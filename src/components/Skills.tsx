import { useState, useEffect } from 'react';
import { Code, Server, Settings, Palette, Brain, Zap, Star, Trophy, Target } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      description: "Modern UI/UX development with cutting-edge technologies",
      skills: [
        { name: "React.js", level: 95, description: "Component-based architecture", category: "Framework" },
        { name: "TypeScript", level: 90, description: "Type-safe development", category: "Language" },
        { name: "Next.js", level: 85, description: "Full-stack React framework", category: "Framework" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS", category: "Styling" },
        { name: "Redux", level: 88, description: "State management", category: "State" },
        { name: "Material-UI", level: 85, description: "React components", category: "Library" },
        { name: "Framer Motion", level: 80, description: "Animation library", category: "Animation" },
        { name: "Chart.js", level: 75, description: "Data visualization", category: "Visualization" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      description: "Scalable server-side solutions and API development",
      skills: [
        { name: "Node.js", level: 90, description: "JavaScript runtime", category: "Runtime" },
        { name: "Express.js", level: 92, description: "Web framework", category: "Framework" },
        { name: "MongoDB", level: 88, description: "NoSQL database", category: "Database" },
        { name: "RESTful APIs", level: 95, description: "API development", category: "API" },
        { name: "GraphQL", level: 75, description: "Query language", category: "API" },
        { name: "JWT Auth", level: 85, description: "Authentication", category: "Security" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      description: "Development tools and deployment platforms",
      skills: [
        { name: "Git/GitHub", level: 95, description: "Version control", category: "Version Control" },
        { name: "VS Code", level: 98, description: "Code editor", category: "Editor" },
        { name: "Vercel", level: 85, description: "Deployment platform", category: "Deployment" },
        { name: "Cloudinary", level: 80, description: "Media management", category: "Cloud" },
        { name: "CentOS 7", level: 70, description: "Linux server", category: "Server" },
        { name: "npm", level: 90, description: "Package manager", category: "Package Manager" }
      ]
    }
  ];

  const coreLanguages = [
    { name: 'JavaScript (ES6+)', icon: '🟨', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'TypeScript', icon: '🔷', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'HTML5', icon: '🧡', level: 98, color: 'from-blue-500 to-blue-600' },
    { name: 'CSS3', icon: '💙', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'MongoDB Query', icon: '🍃', level: 88, color: 'from-blue-500 to-blue-600' }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced Background with Mouse Tracking - Responsive */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div
        className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      ></div>
      <div
        className="absolute w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          right: '10%',
          bottom: '20%',
          animationDelay: '2s'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header - Responsive */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">Technical Expertise</span>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 animate-bounce-subtle" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Proficient in modern web technologies and development tools with hands-on experience in building scalable applications
          </p>
        </div>

        {/* Core Languages Showcase - Enhanced Responsive */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-2 sm:gap-3 px-4">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
              <span>Core Technologies</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {coreLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-300 hover:border-blue-400 transition-all duration-500 hover:scale-105 card-3d overflow-hidden touch-target shadow-lg hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {lang.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base lg:text-lg leading-tight">
                    {lang.name}
                  </h4>
                  <div className="relative w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-3 sm:mb-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                      style={{ width: `${lang.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                  <span className="text-gray-600 font-mono text-sm sm:text-base lg:text-lg font-bold">{lang.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories - Enhanced Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-300 hover:border-blue-400 transition-all duration-500 card-3d overflow-hidden mobile-card shadow-lg hover:shadow-xl"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Category Header - Enhanced Responsive */}
                <div className="mb-6 sm:mb-8">
                  <div className={`inline-flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg w-full sm:w-auto`}>
                    <div className="text-white flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{category.description}</p>
                </div>

                {/* Skills List - Enhanced Responsive */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative touch-target"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 gap-2 sm:gap-0">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <span className="text-gray-900 font-semibold group-hover/skill:text-blue-600 transition-colors text-base sm:text-lg leading-tight">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full self-start sm:self-auto">
                              {skill.category}
                            </span>
                          </div>
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
                        </div>
                        <span className="text-gray-600 font-mono text-sm bg-gray-100 px-2 sm:px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            transform: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scaleY(1.3)' : 'scaleY(1)'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Achievements - Enhanced Responsive */}
        <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-gray-50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-300 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-500/5"></div>

          {/* Floating decorative elements - Responsive */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Target className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-blue-600 animate-pulse" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">Additional Expertise</h3>
                <Zap className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-blue-500 animate-bounce-subtle" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { name: 'Responsive Design', icon: '📱', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'API Development', icon: '🔗', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Database Design', icon: '🗄️', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Performance Optimization', icon: '⚡', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Code Review', icon: '🔍', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Agile Methodology', icon: '🎯', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Problem Solving', icon: '🧩', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'Team Collaboration', icon: '🤝', color: 'from-blue-500/20 to-blue-600/20' }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative p-4 sm:p-5 lg:p-6 bg-gradient-to-r ${skill.color} rounded-xl sm:rounded-2xl border border-gray-300 hover:border-blue-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden touch-target shadow-md hover:shadow-lg`}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-gray-900 font-semibold text-xs sm:text-sm leading-tight block">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;