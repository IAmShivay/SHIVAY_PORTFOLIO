import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  // Simple contribution heatmap data (5 rows x 20 cols)
  const heatmap = Array.from({ length: 100 }, () => Math.random());

  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,380px] xl:grid-cols-[1fr,420px] items-center gap-10 lg:gap-14">

          {/* Left — text */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-6 lg:mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Available for work
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={12} /> Bangalore, India
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold text-gray-900 tracking-tight leading-[1.08] mb-4 lg:mb-5">
              Shiv Kumar
              <br />
              <span className="text-gray-300">Sharma</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-[22px] text-gray-500 font-medium mb-5 lg:mb-6">
              Full Stack Software Engineer
            </p>

            <p className="text-[15px] lg:text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
              I build scalable backend systems, real-time applications, and cloud-native deployments.
              2.5+ years shipping production code with Node.js, React/Next.js, and GCP.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#projects" className="px-6 py-3 bg-gray-900 rounded-lg text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors">
                Get in Touch
              </a>
              <a href="https://res.cloudinary.com/dyiso4ohk/image/upload/v1766899151/BACKEND_ENGINEER_uxavna.pdf" download className="inline-flex items-center gap-1.5 px-6 py-3 border border-gray-200 rounded-lg text-gray-600 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors">
                <Download size={14} /> Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/iAmShivaySharma", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shivaysharmachemistry@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="p-2.5 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-lg transition-colors" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Bento grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {/* Years */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3">Experience</p>
              <p className="text-4xl font-bold text-gray-900 tracking-tight">2.5<span className="text-gray-300">+</span></p>
              <p className="text-xs text-gray-500 mt-1">years building production systems</p>
            </div>

            {/* Users */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3">Users Served</p>
              <p className="text-4xl font-bold text-gray-900 tracking-tight">50K<span className="text-gray-300">+</span></p>
              <p className="text-xs text-gray-500 mt-1">monthly active users at scale</p>
            </div>

            {/* Contribution heatmap */}
            <div className="col-span-2 bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">Activity</p>
                <p className="text-[11px] text-gray-400">365 contributions in the last year</p>
              </div>
              <div className="grid grid-cols-20 gap-[3px]">
                {heatmap.map((v, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${
                      v > 0.8 ? 'bg-gray-900' :
                      v > 0.6 ? 'bg-gray-600' :
                      v > 0.35 ? 'bg-gray-400' :
                      v > 0.15 ? 'bg-gray-300' :
                      'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="col-span-2 bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS", "React", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "GCP", "Kubernetes", "GitHub Actions"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-gray-600 bg-white rounded-md border border-gray-200">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
