import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8918349445",
      href: "tel:+918918349445"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shivaysharma77893@gmail.com",
      href: "mailto:shivaysharma77893@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Durgapur, West Bengal",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/iAmShivay"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/iamshivay"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "Portfolio",
      href: "https://Shiva-y.live"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-label="Contact Information"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" aria-hidden="true"></div>
      
      {/* Animated Tech Stack Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Row 1 - Top with different white shades */}
        <div className="absolute top-[10%] left-[5%] animate-float">
          <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/60 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">⚛️</span>
          </div>
        </div>
        <div className="absolute top-[15%] right-[8%] animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/70 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🔷</span>
          </div>
        </div>
        <div className="absolute top-[25%] left-[15%] animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/50 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">⚡</span>
          </div>
        </div>
        
        {/* Row 2 - Middle with different white shades */}
        <div className="absolute top-[40%] right-[12%] animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-18 h-18 bg-white/45 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/65 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🎨</span>
          </div>
        </div>
        <div className="absolute top-[50%] left-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-16 h-16 bg-white/35 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/55 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🚀</span>
          </div>
        </div>
        <div className="absolute top-[35%] right-[25%] animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/45 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🔄</span>
          </div>
        </div>
        
        {/* Row 3 - Bottom with different white shades */}
        <div className="absolute bottom-[20%] left-[12%] animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-20 h-20 bg-white/55 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/75 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">☁️</span>
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[15%] animate-float" style={{ animationDelay: '0.3s' }}>
          <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/60 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🐳</span>
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[5%] animate-float" style={{ animationDelay: '1.8s' }}>
          <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/50 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">⚙️</span>
          </div>
        </div>
        <div className="absolute bottom-[25%] left-[20%] animate-float" style={{ animationDelay: '2.2s' }}>
          <div className="w-18 h-18 bg-white/48 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/68 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🍃</span>
          </div>
        </div>
        
        {/* Extra scattered icons with different white shades */}
        <div className="absolute top-[60%] left-[30%] animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="w-12 h-12 bg-white/28 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/48 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">📦</span>
          </div>
        </div>
        <div className="absolute top-[70%] right-[30%] animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="w-16 h-16 bg-white/42 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/62 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🟨</span>
          </div>
        </div>
        
        {/* Additional decorative icons */}
        <div className="absolute top-[45%] left-[25%] animate-float" style={{ animationDelay: '1.7s' }}>
          <div className="w-14 h-14 bg-white/38 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/58 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">💎</span>
          </div>
        </div>
        <div className="absolute top-[55%] right-[20%] animate-float" style={{ animationDelay: '2.3s' }}>
          <div className="w-16 h-16 bg-white/32 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/52 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">🔥</span>
          </div>
        </div>
        <div className="absolute bottom-[40%] left-[35%] animate-float" style={{ animationDelay: '0.9s' }}>
          <div className="w-12 h-12 bg-white/26 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-xl border border-white/46 group-hover:scale-110 transition-all duration-500">
            <span className="filter drop-shadow-lg">✨</span>
          </div>
        </div>
      </div>
      
      {/* Multiple floating gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-500"
        style={{
          right: mousePosition.x * 0.5,
          top: mousePosition.y * 0.3,
        }}
        aria-hidden="true"
      />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" aria-hidden="true"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" aria-hidden="true" />
              <span className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">Let's Connect</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" aria-hidden="true" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-2">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in hearing about new opportunities, creative projects,
                or just having a friendly chat about technology and development.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02] transform group shadow-md hover:shadow-xl"
                  >
                    <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 p-2 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Follow Me</span>
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 transform text-gray-700 hover:text-blue-600 shadow-md hover:shadow-xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Send a Message
            </h3>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:scale-[1.02] transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 text-base sm:text-lg group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-20 sm:mt-24">
          <div className="bg-gradient-to-r from-gray-50 via-blue-50/30 to-purple-50/30 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-600/5 to-pink-500/5" aria-hidden="true"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl" aria-hidden="true"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-lg" aria-hidden="true"></div>
            
            <div className="relative z-10 text-center">
              <p className="text-gray-700 text-base sm:text-lg font-medium">
                © 2025 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Shiv Kumar Sharma</span>
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;