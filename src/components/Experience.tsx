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
    <section id="experience" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full text-blue-600 font-semibold border border-blue-500/30 backdrop-blur-sm text-xs sm:text-sm lg:text-base">
              Career Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Building exceptional web solutions across different industries and scales with proven results
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line - Vertical on mobile, Horizontal on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full shadow-lg"></div>
          <div className="lg:hidden absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 rounded-full shadow-lg"></div>

          {/* Mobile/Tablet Layout - 2 columns grid */}
          <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div>
                  <div className="bg-white backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gray-300 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] card-3d overflow-hidden group-hover:shadow-2xl shadow-lg h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className={`text-xl sm:text-2xl md:text-3xl p-2 sm:p-3 md:p-4 bg-gradient-to-r ${exp.color} rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {exp.logo}
                        </div>
                        <div className="w-full">
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <span className={`px-2 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full ${
                              exp.type === 'Current Position' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                              exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                              'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {exp.role}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600 mb-2 sm:mb-3">
                        <Building size={12} className="flex-shrink-0 sm:w-4 sm:h-4" />
                        <span className="font-bold text-[10px] sm:text-xs md:text-sm truncate">{exp.company}</span>
                      </div>

                      <div className="flex flex-col gap-1 sm:gap-1.5 text-gray-600 mb-3 sm:mb-4 md:mb-6">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Calendar size={10} className="flex-shrink-0 sm:w-3 sm:h-3" />
                          <span className="font-medium text-[9px] sm:text-[10px] md:text-xs">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <MapPin size={10} className="flex-shrink-0 sm:w-3 sm:h-3" />
                          <span className="font-medium text-[9px] sm:text-[10px] md:text-xs">{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="group/item flex items-start gap-1.5 sm:gap-2 md:gap-3 p-2 sm:p-2.5 md:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
                            <div className={`p-1 sm:p-1.5 md:p-2 bg-gradient-to-r ${exp.color} rounded-md text-white group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              <div className="w-3 h-3 sm:w-4 sm:h-4">
                                {achievement.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 leading-relaxed text-[9px] sm:text-[10px] md:text-xs block">
                                {achievement.text}
                              </span>
                            </div>
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