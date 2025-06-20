import { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star, Trophy, Medal, Shield } from 'lucide-react';

const Certifications = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Active",
      level: "Professional",
      icon: "🏗️",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      description: "Expertise in designing distributed systems on AWS platform",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      credentialId: "AWS-SAA-2024-001",
      verifyLink: "#"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2024",
      status: "Active",
      level: "Professional",
      icon: "☁️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      description: "Advanced cloud development and deployment strategies",
      skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
      credentialId: "GCP-PCD-2024-002",
      verifyLink: "#"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      status: "Active",
      level: "Professional",
      icon: "⚛️",
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-600/10 to-purple-600/10",
      description: "Comprehensive frontend development with React ecosystem",
      skills: ["React.js", "JavaScript", "HTML/CSS", "UI/UX"],
      credentialId: "META-FE-2023-003",
      verifyLink: "#"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      status: "Active",
      level: "Associate",
      icon: "🍃",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      description: "Database design and development with MongoDB",
      skills: ["NoSQL", "Database Design", "Aggregation", "Performance"],
      credentialId: "MDB-DEV-2023-004",
      verifyLink: "#"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      status: "Active",
      level: "Associate",
      icon: "🐳",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-400/10 to-blue-600/10",
      description: "Containerization and orchestration expertise",
      skills: ["Docker", "Containers", "DevOps", "Orchestration"],
      credentialId: "DCA-2023-005",
      verifyLink: "#"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      status: "Active",
      level: "Professional",
      icon: "⚙️",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10",
      description: "Kubernetes cluster administration and management",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
      credentialId: "CKA-2024-006",
      verifyLink: "#"
    }
  ];

  const achievements = [
    {
      title: "Top 1% Developer",
      platform: "Stack Overflow",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      description: "Ranked in top 1% of developers globally"
    },
    {
      title: "5-Star Rating",
      platform: "HackerRank",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Problem solving and algorithms expertise"
    },
    {
      title: "Open Source Contributor",
      platform: "GitHub",
      icon: <Medal className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Active contributor to major open source projects"
    },
    {
      title: "Security Champion",
      platform: "Company Recognition",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      description: "Recognized for implementing security best practices"
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div 
        className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      ></div>
      <div 
        className="absolute w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: '10%',
          bottom: '20%',
          animationDelay: '2s'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-bold text-sm sm:text-base lg:text-lg">Professional Credentials</span>
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 animate-bounce-subtle" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient leading-tight px-2">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Professional certifications and industry recognitions that validate expertise and commitment to excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 card-3d overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-4xl p-3 bg-gradient-to-r ${cert.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      cert.level === 'Professional' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {cert.level}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-blue-400 mb-3">
                  <CheckCircle size={16} />
                  <span className="font-semibold text-sm sm:text-base">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={14} />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <span className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.verifyLink}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs font-medium cursor-pointer"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Recognition & Achievements</h3>
              <p className="text-gray-400 text-base sm:text-lg">Industry recognition and platform achievements</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-gradient-to-r ${achievement.color} bg-opacity-10 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2 leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 font-medium">
                      {achievement.platform}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Certifications;
