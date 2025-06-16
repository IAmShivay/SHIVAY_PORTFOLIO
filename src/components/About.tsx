
import { Code, Database, Globe, Smartphone, Award, Target, Zap, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expert in MERN stack with proven experience in building scalable applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Optimization",
      description: "Achieved 30% performance improvement through MongoDB query optimization",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Integration",
      description: "Engineered RESTful APIs improving system interoperability by 40%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating exceptional user experiences across all devices",
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "High-Value Deal",
      description: "Closed 1+ crore deal within first week of employment"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Delivery",
      description: "Delivered 2 high-priority projects ahead of schedule"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Successfully completed 5+ projects maintaining excellence"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "NPM Package",
      description: "Created package with 500+ weekly downloads"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 font-semibold border border-blue-500/30 backdrop-blur-sm">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 card-3d overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

        <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Journey
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                Education
              </h4>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                  <p className="font-bold text-white text-lg mb-2">Full Stack Development Certification</p>
                  <p className="text-blue-400 font-semibold mb-2">AlmaBetter Institute - MERN Stack</p>
                  <p className="text-gray-400">Intensive training in modern web development technologies</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
                  <p className="font-bold text-white text-lg mb-2">Bachelor of Science in Chemistry</p>
                  <p className="text-blue-400 font-semibold mb-2">Government College of Science & Arts, Durgapur</p>
                  <p className="text-sm text-gray-400">CGPA: 7.6/10 - Graduated with distinction</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Key Achievements
              </h4>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                        {achievement.title}
                      </h5>
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
