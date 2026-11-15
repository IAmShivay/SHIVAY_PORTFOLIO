import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/motion';
import SectionLabel from './SectionLabel';

const Experience = () => {
  const list = useRef<HTMLDivElement>(null);

  // A progress rail draws down the list as you read through it.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo('[data-rail]', { scaleY: 0 }, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: list.current, start: 'top 70%', end: 'bottom 60%', scrub: 0.5 },
    });
  }, { scope: list });

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
    <section id="experience" className="py-12 sm:py-14 lg:py-20 bg-gray-50/60 dark:bg-white/[0.02] border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="02">Experience</SectionLabel>
        <h2 data-split className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white mb-6 sm:mb-10">Work <span className="code-accent">history[]</span></h2>

        <div ref={list} className="relative space-y-0 divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <span data-rail className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-900 dark:bg-white origin-top" aria-hidden="true" />
          {experiences.map((exp, index) => (
            <div key={index} data-reveal className="exp-row grid lg:grid-cols-[260px,1fr] gap-2 sm:gap-4 lg:gap-8 p-4 sm:p-5 lg:p-6 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white text-[10px] font-medium rounded border border-gray-200 dark:border-gray-500">
                      <span className="w-1 h-1 bg-gray-900 rounded-full" /> Now
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400">{exp.company}</p>
                <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 mt-0.5">{exp.duration} &middot; {exp.location}</p>
              </div>
              <ul className="space-y-1 sm:space-y-1.5 mt-2 lg:mt-0">
                {exp.achievements.map((a, idx) => (
                  <li key={idx} className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed pl-3 sm:pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] sm:before:top-[8px] before:w-1.5 before:h-1.5 before:bg-gray-400 dark:before:bg-white before:rounded-full">
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
