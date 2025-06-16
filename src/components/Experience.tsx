
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Scraft Studio",
      role: "Full Stack Web Developer",
      duration: "Jan 2025 – Present",
      location: "Gujarat, Ahmedabad",
      type: "Current Position",
      achievements: [
        "Leading multiple projects from conception to completion",
        "Implementing modern web technologies and best practices",
        "Collaborating with cross-functional teams for optimal results"
      ]
    },
    {
      company: "Durgapur Education Foundation",
      role: "Full Stack Web Developer",
      duration: "Feb 2024 – Jan 2025",
      location: "Durgapur, West Bengal",
      type: "Full-time",
      achievements: [
        "Independently led 3+ projects from conception to completion",
        "Successfully delivered more than 5 projects during tenure",
        "Consistently met objectives and deadlines while maintaining quality standards",
        "Demonstrated strong leadership and project management capabilities"
      ]
    },
    {
      company: "Rekonsile",
      role: "Software Engineer Intern",
      duration: "March 2023 – Aug 2023",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Engineered RESTful APIs for e-commerce platform integration, improving system interoperability by 40%",
        "Optimized MongoDB queries and implemented strategic indexing, achieving 30% improvement in database performance",
        "Collaborated with senior developers on complex technical challenges"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300">
            Building exceptional web solutions across different industries and scales
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

              <div className="ml-16 md:ml-0 bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    exp.type === 'Current Position' ? 'bg-green-500/20 text-green-400' :
                    exp.type === 'Full-time' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Building size={16} />
                  <span className="font-semibold">{exp.company}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
