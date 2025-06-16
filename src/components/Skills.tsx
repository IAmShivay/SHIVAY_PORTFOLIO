
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
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
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
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
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
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
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
    { name: 'JavaScript (ES6+)', icon: '🟨', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', icon: '🔷', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'HTML5', icon: '🧡', level: 98, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '💙', level: 95, color: 'from-blue-400 to-cyan-500' },
    { name: 'MongoDB Query', icon: '🍃', level: 88, color: 'from-green-400 to-emerald-600' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background with Mouse Tracking */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          right: '10%',
          bottom: '20%',
          animationDelay: '2s'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <Brain className="w-6 h-6 text-purple-400 animate-pulse" />
              <span className="text-purple-400 font-bold text-lg">Technical Expertise</span>
              <Star className="w-6 h-6 text-pink-400 animate-bounce-subtle" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Proficient in modern web technologies and development tools with hands-on experience in building scalable applications
          </p>
        </div>

        {/* Core Languages Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              Core Technologies
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 card-3d overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {lang.icon}
                  </div>
                  <h4 className="font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 text-lg">
                    {lang.name}
                  </h4>
                  <div className="relative w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                      style={{ width: `${lang.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                  <span className="text-gray-400 font-mono text-lg font-bold">{lang.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 card-3d overflow-hidden"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold group-hover/skill:text-blue-400 transition-colors text-lg">
                              {skill.name}
                            </span>
                            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                              {skill.category}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm">{skill.description}</p>
                        </div>
                        <span className="text-gray-400 font-mono text-sm bg-gray-800/50 px-3 py-1 rounded-full font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
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

        {/* Additional Skills & Achievements */}
        <div className="bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-12 rounded-3xl border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Target className="w-10 h-10 text-blue-400 animate-pulse" />
                <h3 className="text-4xl font-bold text-white">Additional Expertise</h3>
                <Zap className="w-10 h-10 text-purple-400 animate-bounce-subtle" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Responsive Design', icon: '📱', color: 'from-blue-500/20 to-purple-500/20' },
                  { name: 'API Development', icon: '🔗', color: 'from-green-500/20 to-emerald-500/20' },
                  { name: 'Database Design', icon: '🗄️', color: 'from-purple-500/20 to-pink-500/20' },
                  { name: 'Performance Optimization', icon: '⚡', color: 'from-yellow-500/20 to-orange-500/20' },
                  { name: 'Code Review', icon: '🔍', color: 'from-cyan-500/20 to-blue-500/20' },
                  { name: 'Agile Methodology', icon: '🎯', color: 'from-red-500/20 to-pink-500/20' },
                  { name: 'Problem Solving', icon: '🧩', color: 'from-indigo-500/20 to-purple-500/20' },
                  { name: 'Team Collaboration', icon: '🤝', color: 'from-teal-500/20 to-cyan-500/20' }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 bg-gradient-to-r ${skill.color} rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-white font-semibold text-sm">
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
