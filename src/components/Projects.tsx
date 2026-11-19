import { useRef } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { gsap, useGSAP, prefersReducedMotion, isFinePointer } from '@/lib/motion';
import SectionLabel from './SectionLabel';
import ProjectMedia, { type ProjectVideo } from './ProjectMedia';

type Project = {
  title: string; year: string; description: string; tech: string[]; highlights: string[];
  github: string; live?: string; url: string; variant: 'crm' | 'shop' | 'ai';
  /** Drop a screen recording in /public/videos and reference it here to replace the schematic. */
  video?: ProjectVideo;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "CRM SaaS Platform", year: "2025",
      description: "Multi-tenant CRM SaaS with lead collection, pipeline management, and real-time notifications. Containerized with Docker Compose and integrated n8n workflow automations.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker", "n8n"],
      highlights: ["Reduced manual follow-up by 60% with n8n automations", "Role-based dashboards with analytics and deal tracking", "Real-time notifications via WebSockets", "Team collaboration features"],
      github: "https://github.com/IAmShivay",
      url: "crm-saas › pipeline", variant: "crm",
    },
    {
      title: "Furniture E-Commerce Platform", year: "2024",
      description: "Full-featured furniture store with product catalog, cart, order management, and multi-gateway payments serving 50K+ MAU. Deployed via Docker on GCP with CI/CD.",
      tech: ["MERN Stack", "Tailwind CSS", "GCP", "Docker", "Checkbook API", "SendGrid"],
      highlights: ["Product search with filters, wishlist, and review system", "Multi-gateway payments (Visa, Checkbook payout API)", "Responsive mobile-first UI with email notifications", "Deployed on GCP with Cloud CDN and Nginx"],
      github: "https://github.com/IAmShivay",
      url: "furniture-store › living-room", variant: "shop",
    },
    {
      title: "AI Notes — Document Assistant", year: "2025",
      description: "AI-powered document assistant with workspace-based RAG retrieval, tool-calling LLM loop, and local TF-IDF embeddings. Built with Next.js full-stack, sql.js for zero-dependency SQLite, and Groq LLM for chat and function calling.",
      tech: ["Next.js", "TypeScript", "sql.js", "Groq API", "TF-IDF", "Railway"],
      highlights: ["Workspace-scoped RAG with pre-filtered vector search for tenant isolation", "Tool-calling loop with strict schema validation, capped at 5 rounds", "Local TF-IDF embeddings (2048-dim) — no external API dependency", "Pure JS SQLite via sql.js for cross-platform zero-config deployment"],
      github: "https://github.com/IAmShivay",
      live: "https://doc-assistant-production-da91.up.railway.app/",
      url: "ai-notes › workspace chat", variant: "ai",
    }
  ];

  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const cards = gsap.utils.toArray<HTMLElement>('[data-card]');
    const mm = gsap.matchMedia();

    // Desktop: cards pin in a deck; each one recedes as the next slides over it.
    mm.add('(min-width: 1024px)', () => {
      cards.slice(0, -1).forEach((card, i) => {
        const pin = 96 + i * 28;
        const scrollTrigger = {
          trigger: card, start: `top ${pin}`,
          endTrigger: cards[i + 1], end: `top ${pin + 28}`, scrub: 0.5,
        };
        gsap.to(card.querySelector('[data-card-body]'), { scale: 0.92 - (cards.length - 2 - i) * 0.02, ease: 'none', scrollTrigger });
        gsap.to(card.querySelector('[data-card-shade]'), { opacity: 1, ease: 'none', scrollTrigger });
      });
    });

    if (!isFinePointer()) return;
    const cleanups = cards.map((card) => {
      const tilt = card.querySelector<HTMLElement>('[data-card-tilt]')!;
      gsap.set(tilt, { transformPerspective: 1200 });
      const rx = gsap.quickTo(tilt, 'rotateX', { duration: 0.6, ease: 'power3' });
      const ry = gsap.quickTo(tilt, 'rotateY', { duration: 0.6, ease: 'power3' });
      const move = (e: PointerEvent) => {
        const r = tilt.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 5);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 5);
      };
      const leave = () => { rx(0); ry(0); };
      tilt.addEventListener('pointermove', move);
      tilt.addEventListener('pointerleave', leave);
      return () => { tilt.removeEventListener('pointermove', move); tilt.removeEventListener('pointerleave', leave); };
    });
    return () => cleanups.forEach((c) => c());
  }, { scope: root });

  return (
    <section ref={root} id="projects" className="py-12 sm:py-14 lg:py-20 bg-gray-50/60 dark:bg-white/[0.02] border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="04">Projects</SectionLabel>
        <h2 data-split className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white mb-6 sm:mb-10">Selected <span className="code-accent">&lt;work /&gt;</span></h2>

        <div className="space-y-4 lg:space-y-[12vh]">
          {projects.map((project, index) => (
            <div key={index} data-card data-reveal className="lg:sticky" style={{ top: `calc(96px + ${index * 28}px)` }}>
            <div data-card-body className="relative origin-top will-change-transform">
            <div data-card-shade className="absolute inset-0 z-10 rounded-2xl bg-white/60 dark:bg-black/55 opacity-0 pointer-events-none" />
            <div data-card-tilt data-cursor="Explore" className="group bg-white dark:bg-[#161616] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-500/50 transition-colors overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="grid lg:grid-cols-[1fr,1.05fr] items-center">
                {/* Media — first on phones, right column on desktop */}
                <div className="order-first lg:order-last p-3 sm:p-4 lg:p-6 lg:pl-0">
                  <ProjectMedia url={project.url} variant={project.variant} video={project.video} />
                </div>
                <div className="p-4 pt-1 sm:p-5 sm:pt-1 lg:p-8">
                  <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <span className="font-mono text-xs sm:text-sm text-gray-400 dark:text-gray-500 pt-1 sm:pt-2">{String(index + 1).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl lg:text-[1.9rem] font-semibold tracking-[-0.03em] leading-tight text-gray-900 dark:text-white mb-1">{project.title}</h3>
                        <p className="font-mono text-[11px] text-gray-400 dark:text-gray-500">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-9 sm:h-9 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white rounded-full transition-colors active:scale-90" aria-label={`${project.title} source code`}><Github size={15} /></a>
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-9 sm:h-9 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white rounded-full transition-colors active:scale-90" aria-label={`${project.title} live demo`}><ExternalLink size={15} /></a>}
                    </div>
                  </div>
                  <p className="text-[13px] lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                  <ul className="space-y-1.5 mb-4 sm:mb-5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="text-[13px] text-gray-600 dark:text-gray-400 pl-4 relative before:content-['→'] before:absolute before:left-0 before:top-0 before:font-mono before:text-[11px] before:text-gray-400 dark:before:text-gray-600">{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/[0.03]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-10 text-center">
          <a href="https://github.com/IAmShivay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors link-underline">
            View more on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
