const About = () => {
  return (
    <section id="about" className="py-14 lg:py-20 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics strip — full width, no cards, just numbers */}
        <div className="flex flex-wrap justify-between gap-y-6 mb-12 lg:mb-16">
          {[
            { value: "2.5+", label: "Years of Experience" },
            { value: "50K+", label: "Users Served" },
            { value: "40%", label: "Faster Processing" },
            { value: "8x", label: "Deploy Speedup" },
            { value: "500+", label: "Concurrent Connections" },
          ].map((m, i) => (
            <div key={i} className="text-center px-2">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{m.value}</p>
              <p className="text-xs text-gray-400 mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column asymmetric layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — 3/5 width, narrative */}
          <div className="lg:col-span-3">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">About</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">What I Bring</h2>
            <p className="text-[15px] text-gray-500 leading-[1.75] mb-6">
              Full Stack Software Engineer with 2.5+ years building scalable backend systems,
              real-time applications, and cloud-native deployments. I've shipped production systems
              handling 50K+ MAU, set up CI/CD pipelines that cut deploy times by 8x, and designed
              microservice architectures serving thousands of concurrent users.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.75]">
              I focus on writing clean, production-ready code with proper testing and documentation.
              Experienced in Agile/Scrum workflows, code reviews, and mentoring junior developers.
            </p>
          </div>

          {/* Right — 2/5 width, education stacked */}
          <div className="lg:col-span-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Education</p>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-[15px] font-semibold text-gray-900">Full Stack Development</p>
                <p className="text-[13px] text-gray-500 mt-0.5">AlmaBetter &middot; Grade: A</p>
                <p className="text-xs text-gray-400 mt-0.5">JavaScript & Blockchain &middot; 2023</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-[15px] font-semibold text-gray-900">Bachelor of Science</p>
                <p className="text-[13px] text-gray-500 mt-0.5">Durgapur Government College</p>
                <p className="text-xs text-gray-400 mt-0.5">West Bengal &middot; 2020-2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
