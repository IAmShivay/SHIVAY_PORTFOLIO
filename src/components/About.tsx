
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
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expert in MERN stack with proven experience in building scalable applications",
      color: "from-blue-500 to-cyan-500",
      stats: "5+ Projects"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Optimization",
      description: "Achieved 30% performance improvement through MongoDB query optimization",
      color: "from-green-500 to-emerald-500",
      stats: "30% Faster"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Integration",
      description: "Engineered RESTful APIs improving system interoperability by 40%",
      color: "from-purple-500 to-pink-500",
      stats: "40% Better"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating exceptional user experiences across all devices",
      color: "from-orange-500 to-red-500",
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
      value: "2 Projects"
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
      value: "500+ DL/week"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 font-semibold border border-blue-500/30 backdrop-blur-sm">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Full Stack Developer specializing in MERN stack development with proven expertise in creating 
            responsive web applications and RESTful APIs. Strong problem-solving skills with a commitment 
            to delivering high-quality code and exceptional user experiences.
          </p>
        </div>

        {/* Enhanced Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 card-3d overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Stats Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800/80 rounded-full border border-gray-600">
                <span className="text-xs font-bold text-blue-400">{item.stats}</span>
              </div>
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Professional Journey Section */}
        <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            {/* Education Section */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                Education
              </h4>
              <div className="space-y-6">
                <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Full Stack Development Certification</p>
                      <p className="text-blue-400 font-semibold">AlmaBetter Institute - MERN Stack</p>
                    </div>
                  </div>
                  <p className="text-gray-400 ml-15">Intensive training in modern web development technologies</p>
                </div>
                
                <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Bachelor of Science in Chemistry</p>
                      <p className="text-blue-400 font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Government College, Durgapur
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 ml-15">CGPA: 7.6/10 - Graduated with distinction</p>
                </div>
              </div>
            </div>
            
            {/* Achievements Section */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Key Achievements
              </h4>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {achievement.title}
                        </h5>
                        <span className="text-purple-400 font-bold text-sm bg-purple-500/20 px-2 py-1 rounded-full">
                          {achievement.value}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
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
