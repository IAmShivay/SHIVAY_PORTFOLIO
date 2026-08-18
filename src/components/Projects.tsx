import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CRM SaaS Platform", year: "2025",
      description: "Multi-tenant CRM SaaS with lead collection, pipeline management, and real-time notifications. Containerized with Docker Compose and integrated n8n workflow automations.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker", "n8n"],
      highlights: ["Reduced manual follow-up by 60% with n8n automations", "Role-based dashboards with analytics and deal tracking", "Real-time notifications via WebSockets", "Team collaboration features"],
      github: "https://github.com/iAmShivaySharma",
    },
    {
      title: "Furniture E-Commerce Platform", year: "2024",
      description: "Full-featured furniture store with product catalog, cart, order management, and multi-gateway payments serving 50K+ MAU. Deployed via Docker on GCP with CI/CD.",
      tech: ["MERN Stack", "Tailwind CSS", "GCP", "Docker", "Checkbook API", "SendGrid"],
      highlights: ["Product search with filters, wishlist, and review system", "Multi-gateway payments (Visa, Checkbook payout API)", "Responsive mobile-first UI with email notifications", "Deployed on GCP with Cloud CDN and Nginx"],
      github: "https://github.com/iAmShivaySharma",
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-20 bg-gray-50/60 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Projects</p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Selected Work</h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-[1fr,280px] xl:grid-cols-[1fr,320px]">
                {/* Left — content */}
                <div className="p-4 sm:p-5 lg:p-8">
                  <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-0.5">{project.title}</h3>
                      <p className="text-[11px] sm:text-xs text-gray-400">{project.year}</p>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-2 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-lg transition-colors" aria-label="Code"><Github size={15} /></a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-2 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-lg transition-colors" aria-label="Demo"><ExternalLink size={15} /></a>
                    </div>
                  </div>
                  <p className="text-xs sm:text-[13px] lg:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                  <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs sm:text-[13px] text-gray-500 pl-3 sm:pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] sm:before:top-[8px] before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">{h}</li>
                    ))}
                  </ul>
                  {/* Tech inline on mobile */}
                  <div className="flex flex-wrap gap-1.5 lg:hidden">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[11px] sm:text-xs rounded border border-gray-100">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Right — tech sidebar (desktop only) */}
                <div className="hidden lg:flex bg-gray-50 p-6 lg:p-8 border-l border-gray-100 flex-col justify-center">
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white text-[13px] text-gray-600 rounded-md border border-gray-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a href="https://github.com/iAmShivaySharma" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            View more on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
