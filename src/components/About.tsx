import SectionLabel from './SectionLabel';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="01">About</SectionLabel>

        {/* Statement — words light up as it scrolls through the viewport */}
        <p data-highlight className="text-[1.75rem] leading-[1.18] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.1] font-medium tracking-[-0.03em] text-gray-900 dark:text-white max-w-5xl mb-14 sm:mb-20 lg:mb-28">
          I build the parts of a product you never see but always feel — <span className="code-accent">fast APIs,</span> real-time pipelines and cloud infrastructure that stay calm when thousands of people show up at once.
        </p>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-gray-100 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-800 mb-14 lg:mb-20">
          {[
            { value: "2.5+", label: "Years Experience" },
            { value: "50K+", label: "Users Served" },
            { value: "40%", label: "Faster Processing" },
            { value: "8x", label: "Deploy Speedup" },
            { value: "500+", label: "Concurrent Conn." },
          ].map((m, i) => (
            <div key={i} data-reveal className="py-6 sm:py-8 px-3 sm:px-4 text-left bg-white dark:bg-[#111] last:col-span-2 sm:last:col-span-1">
              <p data-counter className="tabular-nums text-3xl sm:text-[1.75rem] md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white tracking-[-0.04em]">{m.value}</p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500 mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 data-split className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white mb-4 sm:mb-6">What I <span className="code-accent">bring()</span></h2>
            <p data-reveal className="text-sm sm:text-[15px] text-gray-500 dark:text-gray-400 leading-[1.75] mb-4 sm:mb-6">
              Full Stack Software Engineer with 2.5+ years building scalable backend systems,
              real-time applications, and cloud-native deployments. I've shipped production systems
              handling 50K+ MAU, set up CI/CD pipelines that cut deploy times by 8x, and designed
              microservice architectures serving thousands of concurrent users.
            </p>
            <p data-reveal className="text-sm sm:text-[15px] text-gray-500 dark:text-gray-400 leading-[1.75]">
              I focus on writing clean, production-ready code with proper testing and documentation.
              Experienced in Agile/Scrum workflows, code reviews, and mentoring junior developers.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 mb-4">Education</p>
            <div className="space-y-3 sm:space-y-4">
              <div data-reveal className="border-l-2 border-gray-200 dark:border-gray-700 hover:border-gray-900 transition-colors pl-3 sm:pl-4">
                <p className="text-sm sm:text-[15px] font-semibold text-gray-900 dark:text-white">Full Stack Development</p>
                <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">AlmaBetter &middot; Grade: A</p>
                <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 mt-0.5">JavaScript & Blockchain &middot; 2023</p>
              </div>
              <div data-reveal className="border-l-2 border-gray-200 dark:border-gray-700 hover:border-gray-900 transition-colors pl-3 sm:pl-4">
                <p className="text-sm sm:text-[15px] font-semibold text-gray-900 dark:text-white">Bachelor of Science</p>
                <p className="text-xs sm:text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Durgapur Government College</p>
                <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 mt-0.5">West Bengal &middot; 2020-2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
