
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expert in MERN stack with proven experience in building scalable applications"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Optimization",
      description: "Achieved 30% performance improvement through MongoDB query optimization"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Integration",
      description: "Engineered RESTful APIs improving system interoperability by 40%"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating exceptional user experiences across all devices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer specializing in MERN stack development with proven expertise in creating 
            responsive web applications and RESTful APIs. Strong problem-solving skills with a commitment 
            to delivering high-quality code and exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Professional Journey</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-white">Full Stack Development Certification</p>
                  <p className="text-gray-400">AlmaBetter Institute - MERN Stack</p>
                </div>
                <div>
                  <p className="font-medium text-white">Bachelor of Science in Chemistry</p>
                  <p className="text-gray-400">Government College of Science & Arts, Durgapur</p>
                  <p className="text-sm text-gray-500">CGPA: 7.6/10</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Closed 1+ crore deal within first week of employment</li>
                <li>• Delivered 2 high-priority projects ahead of schedule</li>
                <li>• Successfully completed 5+ projects maintaining quality standards</li>
                <li>• Created NPM package with 500+ weekly downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
