
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SALES CRM",
      description: "A comprehensive full-stack lead collection system with advanced features including team invitation role-based access, AI integration with Together AI API, and seamless Cloudinary integration.",
      technologies: ["TypeScript", "Next.js", "React", "Redux Toolkit Query", "Tailwind CSS", "Supabase"],
      features: [
        "Full-stack lead collection system",
        "Team invitation with role-based access control",
        "Together AI API integration for flexible data structure support",
        "Comprehensive Next.js Serverless SaaS Tool",
        "Razorpay Payment Gateway integration",
        "Clerk multi-authentication support"
      ],
      liveDemo: "#", // Replace with actual live demo URL
      github: "#", // Replace with actual GitHub URL
      featured: true
    },
    {
      title: "Currency Formatter NPM Package",
      description: "A TypeScript-based NPM package for formatting currency values with support for multiple numbering systems. Published on NPM registry with consistent positive user feedback.",
      technologies: ["TypeScript", "NPM", "JavaScript"],
      features: [
        "Support for multiple numbering systems",
        "TypeScript support with full type definitions",
        "Lightweight and tree-shakable",
        "500+ weekly downloads",
        "Comprehensive documentation"
      ],
      npmLink: "https://www.npmjs.com/package/currency-formatter", // Replace with actual NPM URL
      github: "#", // Replace with actual GitHub URL
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">
            Showcasing my expertise in full-stack development and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                          <Star size={14} />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.npmLink && (
                    <a
                      href={project.npmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      <ExternalLink size={18} />
                      NPM Package
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-white">Project Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">₹1Cr+</div>
                <div className="text-gray-300">Deal Closed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">NPM Downloads/Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
