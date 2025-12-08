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
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
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
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
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
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
      achievements: [
        { text: "Engineered RESTful APIs for e-commerce platform integration, improving system interoperability by 40%", icon: <Zap className="w-4 h-4" /> },
        { text: "Optimized MongoDB queries and implemented strategic indexing, achieving 30% improvement in database performance", icon: <Target className="w-4 h-4" /> },
        { text: "Collaborated with senior developers on complex technical challenges", icon: <Award className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div
        className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl animate-float"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      ></div>
      <div
        className="absolute w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl animate-float"
        style={{
          right: `${mousePosition.x * -0.01}px`,
          bottom: `${mousePosition.y * -0.01}px`,
          animationDelay: '2s'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full text-blue-600 font-semibold border border-blue-500/30 backdrop-blur-sm text-sm sm:text-base">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Building exceptional web solutions across different industries and scales with proven results
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line - Vertical on mobile, Horizontal on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full shadow-lg"></div>
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 rounded-full shadow-lg"></div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white z-20 shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
                </div>

                <div className="ml-16 sm:ml-20">
                  <div className="bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-300 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] card-3d overflow-hidden group-hover:shadow-2xl shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                        <div className={`text-3xl sm:text-4xl p-4 sm:p-5 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {exp.logo}
                        </div>
                        <div className="flex-1 w-full sm:w-auto">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={`px-3 py-1.5 text-xs font-bold rounded-full ${
                              exp.type === 'Current Position' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                              exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                              'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {exp.role}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 mb-4">
                        <Building size={18} className="flex-shrink-0" />
                        <span className="font-bold text-base sm:text-lg">{exp.company}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-gray-600 mb-8">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="group/item flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
                            <div className={`p-2.5 bg-gradient-to-r ${exp.color} rounded-lg text-white group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              <div className="w-5 h-5">
                                {achievement.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 leading-relaxed text-sm sm:text-base block">
                                {achievement.text}
                              </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Side by Side with Timeline */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pt-16">
                  {/* Timeline Dot - Positioned at top center */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 top-9 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white z-20 shadow-xl group-hover:scale-125 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
                  </div>

                  {/* Vertical connecting line from dot to card */}
                  <div className={`absolute left-1/2 transform -translate-x-0.5 top-16 w-1 h-4 bg-gradient-to-b ${exp.color} z-10`}></div>

                  <div>
                    <div className="bg-white backdrop-blur-sm p-8 rounded-3xl border border-gray-300 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] card-3d overflow-hidden group-hover:shadow-2xl shadow-lg h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-5 mb-6">
                          <div className={`text-4xl p-5 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            {exp.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1.5 text-xs font-bold rounded-full ${
                                exp.type === 'Current Position' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                                exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                                'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                              }`}>
                                {exp.type}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {exp.role}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-blue-600 mb-4">
                          <Building size={18} className="flex-shrink-0" />
                          <span className="font-bold text-lg">{exp.company}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                          <div className="flex items-center gap-2.5">
                            <Calendar size={16} className="flex-shrink-0" />
                            <span className="font-medium text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <MapPin size={16} className="flex-shrink-0" />
                            <span className="font-medium text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="group/item flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
                              <div className={`p-2.5 bg-gradient-to-r ${exp.color} rounded-lg text-white group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                <div className="w-5 h-5 flex items-center justify-center">
                                  {achievement.icon}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 leading-relaxed text-sm block">
                                  {achievement.text}
                                </span>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;