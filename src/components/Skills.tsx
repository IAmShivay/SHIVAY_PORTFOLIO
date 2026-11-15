import Marquee from './motion/Marquee';
import SectionLabel from './SectionLabel';

const BAND_A = ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Kubernetes"];
const BAND_B = ["React", "Next.js", "Docker", "GCP", "BullMQ", "WebSockets"];

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
    <section id="skills" className="py-12 sm:py-14 lg:py-20 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="mb-10 sm:mb-14 lg:mb-20 space-y-1 sm:space-y-2 -rotate-2 scale-105" aria-hidden="true">
        <Marquee speed={38}>
          {BAND_A.map((t) => (
            <span key={t} className="flex items-center text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-[-0.04em] leading-[1.1] pb-[0.12em] text-gray-900 dark:text-white">
              {t}<span className="mx-5 sm:mx-8 text-gray-900 dark:text-white text-[0.5em]">✦</span>
            </span>
          ))}
        </Marquee>
        <Marquee speed={44} reverse>
          {BAND_B.map((t) => (
            <span key={t} className="flex items-center text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-[-0.04em] leading-[1.1] pb-[0.12em] text-outline">
              {t}<span className="mx-5 sm:mx-8 text-gray-300 dark:text-gray-700 text-[0.5em]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="03">Skills</SectionLabel>
        <h2 data-split className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white mb-6 sm:mb-10">Technical <span className="code-accent">stack{}</span></h2>

        <div className="space-y-4 sm:space-y-6">
          {categories.map((cat, i) => (
            <div key={i} data-reveal className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest sm:w-28 lg:w-32 sm:text-right flex-shrink-0 sm:pt-2">{cat.title}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="chip px-3 py-1.5 bg-gray-50 dark:bg-white/[0.03] text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 rounded-full border border-gray-100 dark:border-gray-800 cursor-default">
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
