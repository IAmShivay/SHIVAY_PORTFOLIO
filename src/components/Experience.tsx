const Experience = () => {
  const experiences = [
    { company: "GoSuperEdtech Pvt. Ltd.", role: "SDE-1 (Full Stack)", duration: "Feb 2026 - Present", location: "Bangalore", current: true, achievements: [
      "Async image processing pipeline (NestJS, BullMQ, Sharp) — 40% faster media processing",
      "Real-time upload tracking via WebSockets with Redis state — 500+ concurrent connections",
      "Stateless horizontal scaling across K8s pods with shared GCS storage — zero data loss",
      "CI/CD with GitHub Actions, Docker builds — deploy cycle reduced from 2hrs to 15min",
    ]},
    { company: "Maity Innovations Pvt. Ltd.", role: "Backend Engineer", duration: "Sep 2025 - Jan 2026", location: "Durgapur", achievements: [
      "Node.js/Express backend for 1,000+ concurrent users — MongoDB REST APIs, Docker scaling",
      "35% query speedup via indexing, aggregation optimization, Redis caching — 40+ Swagger docs",
      "RBAC with JWT + bcrypt — rate limiting, structured logging middleware",
    ]},
    { company: "Scraft Studio", role: "Junior Software Engineer", duration: "Oct 2024 - Aug 2025", location: "Ahmedabad", achievements: [
      "MERN e-commerce platform — 50K+ MAU, Checkbook payout & Visa gateway integration",
      "30% page load improvement — code splitting, lazy loading, GCP Cloud CDN deployment",
      "Admin panel — inventory management, order tracking, webhook payment reconciliation",
    ]},
    { company: "Rekonsile", role: "Software Engineer Intern", duration: "Feb 2024 - May 2024", location: "Bangalore", achievements: [
      "RESTful APIs for Flipkart/Amazon/Myntra refund reconciliation — 50% latency reduction",
      "Automated daily reports with cron jobs — internal refund tracking dashboard",
    ]}
  ];

  return (
    <section id="experience" className="py-14 lg:py-20 bg-gray-50/60 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Experience</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Work History</h2>

        {/* Table-like layout — distinct from card grids */}
        <div className="space-y-0 divide-y divide-gray-200 bg-white rounded-xl border border-gray-100 overflow-hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-[280px,1fr] gap-4 lg:gap-8 p-5 sm:p-6 hover:bg-gray-50/50 transition-colors">
              {/* Left — metadata */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-semibold text-gray-900">{exp.role}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded border border-emerald-200">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" /> Now
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-gray-500">{exp.company}</p>
                <p className="text-xs text-gray-400 mt-1">{exp.duration} &middot; {exp.location}</p>
              </div>
              {/* Right — achievements */}
              <ul className="space-y-1">
                {exp.achievements.map((a, idx) => (
                  <li key={idx} className="text-[13px] text-gray-600 leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
