const Skills = () => {
  const categories = [
    { title: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Bash/Shell", "SQL"] },
    { title: "Frontend", skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5/CSS3"] },
    { title: "Backend", skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "WebSockets"] },
    { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "TypeORM", "Drizzle", "Mongoose"] },
    { title: "Cloud & DevOps", skills: ["GCP", "Docker", "Kubernetes", "Nginx", "CI/CD", "GitHub Actions"] },
    { title: "Tools", skills: ["BullMQ", "Socket.io", "Kafka", "RabbitMQ", "Jest", "Jira", "Postman"] },
  ];

  return (
    <section id="skills" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Skills</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Technical Stack</h2>
          </div>
        </div>

        {/* Flat inline layout — no card boxes, just headers + tags flowing naturally */}
        <div className="space-y-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest sm:w-32 sm:text-right flex-shrink-0 sm:pt-1.5">{cat.title}</p>
              <div className="flex flex-wrap gap-2 flex-1">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-gray-50 text-[13px] text-gray-700 rounded-lg border border-gray-100 hover:border-gray-300 hover:text-gray-900 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
