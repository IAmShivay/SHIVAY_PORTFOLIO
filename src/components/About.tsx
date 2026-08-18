const About = () => {
  return (
    <section id="about" className="py-12 sm:py-14 lg:py-20 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 mb-10 lg:mb-16">
          {[
            { value: "2.5+", label: "Years Experience" },
            { value: "50K+", label: "Users Served" },
            { value: "40%", label: "Faster Processing" },
            { value: "8x", label: "Deploy Speedup" },
            { value: "500+", label: "Concurrent Conn." },
          ].map((m, i) => (
            <div key={i} className="text-center py-3 sm:py-0">
              <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight">{m.value}</p>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">About</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">What I Bring</h2>
            <p className="text-sm sm:text-[15px] text-gray-500 leading-[1.75] mb-4 sm:mb-6">
              Full Stack Software Engineer with 2.5+ years building scalable backend systems,
              real-time applications, and cloud-native deployments. I've shipped production systems
              handling 50K+ MAU, set up CI/CD pipelines that cut deploy times by 8x, and designed
              microservice architectures serving thousands of concurrent users.
            </p>
            <p className="text-sm sm:text-[15px] text-gray-500 leading-[1.75]">
              I focus on writing clean, production-ready code with proper testing and documentation.
              Experienced in Agile/Scrum workflows, code reviews, and mentoring junior developers.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Education</p>
            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-2 border-gray-200 pl-3 sm:pl-4">
                <p className="text-sm sm:text-[15px] font-semibold text-gray-900">Full Stack Development</p>
                <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">AlmaBetter &middot; Grade: A</p>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">JavaScript & Blockchain &middot; 2023</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-3 sm:pl-4">
                <p className="text-sm sm:text-[15px] font-semibold text-gray-900">Bachelor of Science</p>
                <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">Durgapur Government College</p>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">West Bengal &middot; 2020-2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
