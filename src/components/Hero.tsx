import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const heatmap = Array.from({ length: 100 }, () => Math.random());

  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-indigo-950/10 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,380px] xl:grid-cols-[1fr,420px] items-center gap-6 sm:gap-8 lg:gap-14">

          {/* Left — text */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 lg:mb-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-medium rounded-full border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Available for work
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-gray-400 dark:text-gray-500">
                <MapPin size={11} /> Bangalore, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[5rem] font-bold text-gray-900 dark:text-white tracking-tight leading-[1.08] mb-3 lg:mb-5">
              Shiv Kumar
              <br />
              <span className="bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-600 bg-clip-text text-transparent">Sharma</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-[22px] text-gray-500 dark:text-gray-400 font-medium mb-3 sm:mb-5 lg:mb-6">
              Full Stack Software Engineer
            </p>

            <p className="text-sm sm:text-[15px] lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-5 sm:mb-8 max-w-lg">
              I build scalable backend systems, real-time applications, and cloud-native deployments.
              2.5+ years shipping production code with Node.js, React/Next.js, and GCP.
            </p>

            {/* CTAs — accent color */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
              <a href="#projects" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 dark:bg-blue-500 rounded-lg text-white text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors text-center shadow-sm shadow-blue-600/20 dark:shadow-blue-500/20">
                View Work
              </a>
              <a href="#contact" className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center">
                Get in Touch
              </a>
              <a href="https://res.cloudinary.com/dyiso4ohk/image/upload/v1766899151/BACKEND_ENGINEER_uxavna.pdf" download className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Download size={14} /> Resume
              </a>
            </div>

            {/* Social + tech */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1">
                {[
                  { icon: Github, href: "https://github.com/iAmShivaySharma", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:shivaysharmachemistry@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="p-2 sm:p-2.5 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors" aria-label={label}>
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                ))}
              </div>
              <span className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-700" />
              <div className="hidden sm:flex flex-wrap gap-1.5">
                {["Node.js", "React", "TypeScript", "GCP", "Docker"].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded-md bg-white/80 dark:bg-white/5">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Bento grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            <div className="card-lift bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col justify-between">
              <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Experience</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">2.5<span className="text-blue-400 dark:text-blue-500">+</span></p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">years building production systems</p>
            </div>
            <div className="card-lift bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col justify-between">
              <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Users Served</p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">50K<span className="text-blue-400 dark:text-blue-500">+</span></p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">monthly active users at scale</p>
            </div>
            <div className="col-span-2 card-lift bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-gray-800 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Activity</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">365 contributions in the last year</p>
              </div>
              <div className="grid grid-cols-20 gap-[3px]">
                {heatmap.map((v, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${v > 0.8 ? 'bg-blue-600 dark:bg-blue-500' : v > 0.6 ? 'bg-blue-400 dark:bg-blue-600' : v > 0.35 ? 'bg-blue-300 dark:bg-blue-800' : v > 0.15 ? 'bg-blue-200 dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-800'}`} />
                ))}
              </div>
            </div>
            <div className="col-span-2 card-lift bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-gray-800 p-5">
              <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS", "React", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "GCP", "Kubernetes", "GitHub Actions"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t}</span>
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
