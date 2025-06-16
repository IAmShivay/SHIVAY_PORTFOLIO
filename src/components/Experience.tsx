
import { Calendar, MapPin, Building, ChevronRight, Zap, Target, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      company: "Scraft Studio",
      role: "Full Stack Web Developer",
      duration: "Jan 2025 – Present",
      location: "Gujarat, Ahmedabad",
      type: "Current Position",
      logo: "🚀",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      achievements: [
        { text: "Leading multiple projects from conception to completion", icon: <Target className="w-4 h-4" /> },
        { text: "Implementing modern web technologies and best practices", icon: <Zap className="w-4 h-4" /> },
        { text: "Collaborating with cross-functional teams for optimal results", icon: <Award className="w-4 h-4" /> }
      ]
    },
    {
      company: "Durgapur Education Foundation",
      role: "Full Stack Web Developer",
      duration: "Feb 2024 – Jan 2025",
      location: "Durgapur, West Bengal",
      type: "Full-time",
      logo: "🎓",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      achievements: [
        { text: "Independently led 3+ projects from conception to completion", icon: <Target className="w-4 h-4" /> },
        { text: "Successfully delivered more than 5 projects during tenure", icon: <Award className="w-4 h-4" /> },
        { text: "Consistently met objectives and deadlines while maintaining quality standards", icon: <Zap className="w-4 h-4" /> },
        { text: "Demonstrated strong leadership and project management capabilities", icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      company: "Rekonsile",
      role: "Software Engineer Intern",
      duration: "March 2023 – Aug 2023",
      location: "Remote",
      type: "Internship",
      logo: "⚡",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      achievements: [
        { text: "Engineered RESTful APIs for e-commerce platform integration, improving system interoperability by 40%", icon: <Zap className="w-4 h-4" /> },
        { text: "Optimized MongoDB queries and implemented strategic indexing, achieving 30% improvement in database performance", icon: <Target className="w-4 h-4" /> },
        { text: "Collaborated with senior developers on complex technical challenges", icon: <Award className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"
        style={{
          right: `${mousePosition.x * -0.01}px`,
          bottom: `${mousePosition.y * -0.01}px`,
          animationDelay: '2s'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 font-semibold border border-blue-500/30 backdrop-blur-sm">
              Career Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Professional Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building exceptional web solutions across different industries and scales with proven results
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/20"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Enhanced Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-gray-900 z-10 shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
              </div>

              <div className="ml-20 md:ml-0 relative">
                <div className={`bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 card-3d overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-4xl p-4 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                            exp.type === 'Current Position' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="flex items-center gap-2 text-blue-400 mb-3">
                      <Building size={18} />
                      <span className="font-bold text-lg">{exp.company}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="group/item flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300">
                          <div className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg text-white group-hover/item:scale-110 transition-transform duration-300`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                              {achievement.text}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-500 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
