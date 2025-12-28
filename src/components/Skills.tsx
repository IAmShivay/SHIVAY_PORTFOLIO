import { useState, useEffect } from 'react';
import { Code, Server, Database, Palette, Brain, Zap, Star, Trophy, CheckCircle, Award, Layers } from 'lucide-react';

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technicalSkills = {
    "Frontend": [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Redux", level: 88, icon: "🔄" },
      { name: "Material-UI", level: 85, icon: "💎" }
    ],
    "Backend": [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 92, icon: "🚂" },
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "REST APIs", level: 95, icon: "🔗" },
      { name: "GraphQL", level: 75, icon: "◆" },
      { name: "JWT Auth", level: 85, icon: "🔐" }
    ],
    "Tools": [
      { name: "Git/GitHub", level: 95, icon: "🔱" },
      { name: "VS Code", level: 98, icon: "💻" },
      { name: "Vercel", level: 85, icon: "▲" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "npm/yarn", level: 90, icon: "📦" },
      { name: "Postman", level: 85, icon: "📮" }
    ]
  };

  const languages = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500", icon: "JS" },
    { name: "TypeScript", level: 90, color: "bg-blue-500", icon: "TS" },
    { name: "HTML5", level: 98, color: "bg-orange-500", icon: "HTML" },
    { name: "CSS3", level: 95, color: "bg-blue-400", icon: "CSS" },
    { name: "SQL", level: 85, color: "bg-purple-500", icon: "SQL" }
  ];

  const expertise = [
    { title: "Full Stack Development", icon: <Layers className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
    { title: "Responsive Design", icon: <Palette className="w-5 h-5" />, color: "from-purple-500 to-purple-600" },
    { title: "API Development", icon: <Server className="w-5 h-5" />, color: "from-pink-500 to-pink-600" },
    { title: "Database Design", icon: <Database className="w-5 h-5" />, color: "from-green-500 to-green-600" },
    { title: "State Management", icon: <Zap className="w-5 h-5" />, color: "from-yellow-500 to-yellow-600" },
    { title: "Performance Optimization", icon: <Award className="w-5 h-5" />, color: "from-red-500 to-red-600" }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-blue-600 font-bold text-xs sm:text-sm lg:text-base">Technical Skills</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-2">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expertise in modern web technologies and development practices
          </p>
        </div>

        {/* Languages Overview */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Core Languages</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${lang.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white font-black text-sm sm:text-base shadow-lg group-hover:scale-110 transition-transform`}>
                      {lang.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base text-center">{lang.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                      <div
                        className={`h-full ${lang.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-600">{lang.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills by Category */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Technical Stack</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${
                  category === 'Frontend' ? 'from-blue-500 to-blue-600' : 
                  category === 'Backend' ? 'from-purple-500 to-purple-600' : 
                  'from-pink-500 to-pink-600'
                } p-4 sm:p-5`}>
                  <div className="flex items-center gap-3">
                    {category === 'Frontend' ? <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> :
                     category === 'Backend' ? <Server className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> :
                     <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                    <h4 className="text-lg sm:text-xl font-black text-white">{category}</h4>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-5">
                    {skills.map((skill, idx) => (
                      <div key={idx} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg sm:text-xl">{skill.icon}</span>
                            <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{skill.name}</span>
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${
                              category === 'Frontend' ? 'from-blue-500 to-blue-600' : 
                              category === 'Backend' ? 'from-purple-500 to-purple-600' : 
                              'from-pink-500 to-pink-600'
                            } rounded-full transition-all duration-1000 group-hover/skill:scale-105`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 shadow-xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Areas of Expertise</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600">Specialized skills and competencies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{item.title}</h4>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;