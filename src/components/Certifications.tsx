import { useState, useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star, Trophy, Medal, Shield } from 'lucide-react';

const Certifications = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Active",
      level: "Professional",
      icon: "🏗️",
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
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Ranked in top 1% of developers globally"
    },
    {
      title: "5-Star Rating",
      platform: "HackerRank",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Problem solving and algorithms expertise"
    },
    {
      title: "Open Source Contributor",
      platform: "GitHub",
      icon: <Medal className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Active contributor to major open source projects"
    },
    {
      title: "Security Champion",
      platform: "Company Recognition",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Recognized for implementing security best practices"
    }
  ];

  return (
    <section 
      id="certifications" 
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-label="Certifications and Achievements"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" aria-hidden="true"></div>
      
      {/* Multiple floating elements */}
      <div 
        className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-500"
        style={{
          right: mousePosition.x * 0.5,
          top: mousePosition.y * 0.3,
        }}
        aria-hidden="true"
      />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" aria-hidden="true"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" aria-hidden="true" />
              <span className="text-blue-600 font-bold text-xs sm:text-sm lg:text-base">Professional Credentials</span>
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-2">
            Certifications & Achievements
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Professional certifications and industry recognitions that validate expertise and commitment to excellence
          </p>
        </header>

        {/* Certifications Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="group relative bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-blue-400 transition-all duration-500 hover:scale-[1.02] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
              
              <div className="relative z-10">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6">
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1 sm:gap-2">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs font-bold rounded-full ${
                      cert.level === 'Professional' 
                        ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' 
                        : 'bg-purple-500/20 text-purple-600 border border-purple-500/30'
                    }`}>
                      {cert.level}
                    </span>
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs font-medium rounded-full ${
                      cert.status === 'Active' 
                        ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                        : 'bg-gray-500/20 text-gray-600'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-1 sm:gap-2 text-blue-600 mb-2 sm:mb-3">
                  <CheckCircle size={12} className="flex-shrink-0 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="font-semibold text-[10px] sm:text-xs md:text-sm truncate">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 mb-2 sm:mb-3 md:mb-4">
                  <Calendar size={10} className="flex-shrink-0 sm:w-3 sm:h-3" aria-hidden="true" />
                  <time className="text-[9px] sm:text-xs md:text-sm">{cert.date}</time>
                </div>

                <p className="text-gray-700 text-[9px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-none">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6" role="list" aria-label="Skills covered">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 text-[8px] sm:text-[10px] md:text-xs rounded-full border border-gray-300 hover:border-blue-400 transition-colors duration-300"
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Info */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4 border-t border-gray-200">
                  <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 font-mono truncate mr-1">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.verifyLink}
                    className="flex items-center gap-0.5 sm:gap-1 text-blue-600 hover:text-purple-600 transition-colors duration-300 text-[9px] sm:text-[10px] md:text-xs font-medium flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Verify</span>
                    <ExternalLink size={10} className="sm:w-3 sm:h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
            </article>
          ))}
        </div>

        {/* Achievements Section - 2 columns on mobile */}
        <aside 
          className="bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 relative overflow-hidden shadow-lg"
          aria-label="Recognition and Achievements"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-600/5 to-pink-500/5" aria-hidden="true"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" aria-hidden="true"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-lg" aria-hidden="true"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Recognition & Achievements
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">Industry recognition and platform achievements</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                      {achievement.icon}
                    </div>
                    <h4 className="text-gray-900 font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-blue-600 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 font-medium">
                      {achievement.platform}
                    </p>
                    <p className="text-gray-700 text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Stats Summary */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-purple-50/30 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-600/5 to-pink-500/5" aria-hidden="true"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" aria-hidden="true"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-lg" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-10 lg:mb-12 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certification Impact
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-blue-600 mb-1 sm:mb-2">6+</div>
                    <div className="text-gray-700 text-xs sm:text-base lg:text-xl font-semibold">Active Certifications</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Trophy className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-purple-600 mb-1 sm:mb-2">4+</div>
                    <div className="text-gray-700 text-xs sm:text-base lg:text-xl font-semibold">Platform Recognitions</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-pink-600 mb-1 sm:mb-2">100%</div>
                    <div className="text-gray-700 text-xs sm:text-base lg:text-xl font-semibold">Verification Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;