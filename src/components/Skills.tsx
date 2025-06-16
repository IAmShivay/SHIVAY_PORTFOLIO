
import { useState } from 'react';
import { Code, Server, Tool, Palette, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "React.js", level: 95, description: "Component-based architecture" },
        { name: "TypeScript", level: 90, description: "Type-safe development" },
        { name: "Next.js", level: 85, description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS" },
        { name: "Redux", level: 88, description: "State management" },
        { name: "Material-UI", level: 85, description: "React components" },
        { name: "Framer Motion", level: 80, description: "Animation library" },
        { name: "Chart.js", level: 75, description: "Data visualization" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      skills: [
        { name: "Node.js", level: 90, description: "JavaScript runtime" },
        { name: "Express.js", level: 92, description: "Web framework" },
        { name: "MongoDB", level: 88, description: "NoSQL database" },
        { name: "RESTful APIs", level: 95, description: "API development" },
        { name: "GraphQL", level: 75, description: "Query language" },
        { name: "JWT Auth", level: 85, description: "Authentication" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "Git/GitHub", level: 95, description: "Version control" },
        { name: "VS Code", level: 98, description: "Code editor" },
        { name: "Vercel", level: 85, description: "Deployment platform" },
        { name: "Cloudinary", level: 80, description: "Media management" },
        { name: "CentOS 7", level: 70, description: "Linux server" },
        { name: "npm", level: 90, description: "Package manager" }
      ]
    }
  ];

  const coreLanguages = [
    { name: 'JavaScript (ES6+)', icon: '🟨', level: 95 },
    { name: 'TypeScript', icon: '🔷', level: 90 },
    { name: 'HTML5', icon: '🧡', level: 98 },
    { name: 'CSS3', icon: '💙', level: 95 },
    { name: 'MongoDB Query', icon: '🍃', level: 88 }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 font-semibold border border-purple-500/30 backdrop-blur-sm">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in modern web technologies and development tools with hands-on experience in building scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 card-3d overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="text-white font-semibold group-hover/skill:text-blue-400 transition-colors text-lg">
                            {skill.name}
                          </span>
                          <p className="text-gray-500 text-sm">{skill.description}</p>
                        </div>
                        <span className="text-gray-400 font-mono text-sm bg-gray-800/50 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            transform: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scaleY(1.2)' : 'scaleY(1)'
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

        {/* Core Languages Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Core Languages & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 card-3d"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {lang.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {lang.name}
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">{lang.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Additional Expertise</h3>
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Responsive Design', 'API Development', 'Database Design', 'Performance Optimization',
                'Code Review', 'Agile Methodology', 'Problem Solving', 'Team Collaboration'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="group px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/30 hover:text-white transition-all duration-300 font-semibold backdrop-blur-sm hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
