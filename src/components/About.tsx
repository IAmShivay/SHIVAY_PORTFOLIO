import { Code, Database, Globe, Smartphone, Award, Target, Zap, Rocket, GraduationCap, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Full Stack Development",
      description: "Expert in MERN stack with proven experience in building scalable applications",
      color: "from-blue-500 to-blue-600",
      stats: "3+ Projects"
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Database Optimization",
      description: "Achieved 30% performance improvement through MongoDB query optimization",
      color: "from-blue-500 to-blue-600",
      stats: "30% Faster"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "API Integration",
      description: "Engineered RESTful APIs improving system interoperability by 40%",
      color: "from-blue-500 to-blue-600",
      stats: "40% Better"
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Responsive Design",
      description: "Creating exceptional user experiences across all devices",
      color: "from-blue-500 to-blue-600",
      stats: "100% Mobile"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "High-Value Deal",
      description: "Closed 1+ crore deal within first week of employment",
      value: "₹1+ Crore"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Delivery",
      description: "Delivered 2 high-priority projects ahead of schedule",
      value: "3 Projects"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Successfully completed 5+ projects maintaining excellence",
      value: "5+ Projects"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "NPM Package",
      description: "Created package with 500+ weekly downloads",
      value: "100+ DL/week"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced Background Elements with Mouse Tracking */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"
        style={{
          right: `${mousePosition.x * -0.02}px`,
          bottom: `${mousePosition.y * -0.02}px`,
          animationDelay: '2s'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-600 font-semibold border border-blue-500/30 backdrop-blur-sm text-sm sm:text-base">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 pb-4 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Crafting Digital Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Full Stack Developer specializing in MERN stack development with proven expertise in creating
            responsive web applications and RESTful APIs. Strong problem-solving skills with a commitment
            to delivering high-quality code and exceptional user experiences.
          </p>
        </div>

        {/* Enhanced Highlights Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-300 hover:border-gray-400 transition-all duration-500 hover:scale-105 card-3d overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Stats Badge */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-gray-100 rounded-full border border-gray-300">
                <span className="text-xs font-bold text-blue-600">{item.stats}</span>
              </div>
              
              <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Professional Journey Section */}
        <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-gray-50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-300 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 relative z-10">
            {/* Education Section */}
            <div className="space-y-6 sm:space-y-8">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                Education
              </h4>
              <div className="space-y-4 sm:space-y-6">
                <div className="group bg-white p-4 sm:p-6 rounded-xl border border-gray-300 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">Full Stack Development Certification</p>
                      <p className="text-blue-600 font-semibold text-xs sm:text-sm">AlmaBetter Institute - MERN Stack</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm ml-0 sm:ml-15">Intensive training in modern web development technologies</p>
                </div>
                
                <div className="group bg-white p-4 sm:p-6 rounded-xl border border-gray-300 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">Bachelor of Science in Chemistry</p>
                      <p className="text-blue-600 font-semibold flex items-center gap-2 text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        Government College, Durgapur
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 ml-0 sm:ml-15">CGPA: 7.6/10 - Graduated with distinction</p>
                </div>
              </div>
            </div>
            
            {/* Achievements Section */}
            <div className="space-y-6 sm:space-y-8">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Key Achievements
              </h4>
              <div className="grid gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-gray-300 hover:border-blue-500/50 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base truncate">
                          {achievement.title}
                        </h5>
                        <span className="text-blue-600 font-bold text-xs sm:text-sm bg-blue-500/20 px-2 py-1 rounded-full whitespace-nowrap">
                          {achievement.value}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {achievement.description}
                      </p>
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

export default About;