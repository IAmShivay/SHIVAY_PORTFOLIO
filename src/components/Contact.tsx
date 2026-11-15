import { Mail, Send, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import Marquee from './motion/Marquee';
import Magnetic from './motion/Magnetic';
import { scrollToId } from '@/lib/motion';
import SectionLabel from './SectionLabel';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  // Google Maps pulls ~1MB of scripts; only load it when asked.
  const [mapOn, setMapOn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://crm.formiqstudio.in/api/webhooks/receive/6a8499f505014786ec333e93', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="pt-12 sm:pt-14 lg:pt-20 border-t border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-white/[0.02] overflow-hidden">
      <a href="mailto:shivaysharmachemistry@gmail.com" data-cursor="Say hi" className="block mb-10 sm:mb-14 lg:mb-20 group" aria-label="Email me — let's build something">
        <Marquee speed={30}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex items-center text-6xl sm:text-8xl lg:text-[10rem] font-bold tracking-[-0.05em] leading-[1.1] pb-[0.14em] text-gray-900 dark:text-white">
              Let’s build something
              <span className="mx-6 sm:mx-10 inline-flex items-center justify-center w-[0.8em] h-[0.8em] rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[0.35em] transition-transform duration-700 group-hover:rotate-45">↗</span>
            </span>
          ))}
        </Marquee>
      </a>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="05">Contact</SectionLabel>
        <h2 data-split className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white mb-3">Get in <span className="code-accent">touch()</span></h2>
        <p data-reveal className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-lg">
          Currently open to new opportunities. Whether you have a project, a role, or just want to connect — I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 lg:items-stretch">
          {/* Left — contact details + form */}
          <div data-reveal className="flex flex-col gap-4 sm:gap-5">
            {/* Contact info */}
            <div className="grid grid-cols-1 gap-2.5">
              <a href="mailto:shivaysharmachemistry@gmail.com" className="flex items-center gap-3 bg-white dark:bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors group">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 truncate">shivaysharmachemistry@gmail.com</p>
                </div>
              </a>
              <a href="tel:+918918349445" className="flex items-center gap-3 bg-white dark:bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors group">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Phone size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Phone</p>
                  <p className="text-xs sm:text-[13px] text-gray-700 dark:text-gray-300">+91 8918349445</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white dark:bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-lg flex-shrink-0">
                  <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-xs sm:text-[13px] text-gray-700 dark:text-gray-300">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/iAmShivaySharma", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shivaysharmachemistry@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, i) => (
                <Magnetic key={i} strength={0.5}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="p-3 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-gray-800 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-colors" aria-label={label}>
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-white/[0.03] p-4 sm:p-5 rounded-xl border border-gray-100 dark:border-gray-800 flex-1">
              <p className="text-xs sm:text-[13px] font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Send a message</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-1 uppercase tracking-widest">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-gray-900 dark:focus:border-white focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-1 uppercase tracking-widest">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-gray-900 dark:focus:border-white focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-1 uppercase tracking-widest">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={3} className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-gray-900 dark:focus:border-white focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-colors resize-none sm:[rows:4]" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors shadow-sm shadow-black/15 dark:shadow-white/10 disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send size={14} />
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                </button>
                {status === 'sent' && <p className="text-xs text-gray-900 dark:text-white text-center">Thanks! I'll get back to you soon.</p>}
                {status === 'error' && <p className="text-xs text-red-500 dark:text-red-400 text-center">Something went wrong. Try emailing me directly.</p>}
              </form>
            </div>
          </div>

          {/* Right — map + address */}
          <div data-reveal className="flex flex-col gap-3 sm:gap-4">
            <div className="relative rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111] flex-1 min-h-[220px] sm:min-h-[280px]">
              {mapOn ? (
                <iframe
                  title="Location - Bangalore, India"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.884539903!2d77.49085452149588!3d12.954517009498942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="absolute inset-0 w-full h-full map-embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button onClick={() => setMapOn(true)} className="group absolute inset-0 w-full text-left cursor-pointer" data-cursor="Load map" aria-label="Load interactive map of Bangalore">
                  {/* Monochrome placeholder: survey grid, contour rings and a pin */}
                  <svg className="absolute inset-0 w-full h-full text-gray-900 dark:text-white" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 280" aria-hidden="true">
                    <defs>
                      <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity=".07" /></pattern>
                    </defs>
                    <rect width="400" height="280" fill="url(#map-grid)" />
                    <path d="M-10 190 C 80 150, 140 220, 230 170 S 360 120, 420 150" fill="none" stroke="currentColor" strokeOpacity=".14" strokeWidth="6" />
                    <path d="M120 -10 C 150 80, 110 160, 170 290" fill="none" stroke="currentColor" strokeOpacity=".1" strokeWidth="3" />
                    <path d="M260 -10 L 300 120 L 280 290" fill="none" stroke="currentColor" strokeOpacity=".1" strokeWidth="2" />
                    {[24, 48, 76, 108].map((r) => <circle key={r} cx="210" cy="140" r={r} fill="none" stroke="currentColor" strokeOpacity={0.16 - r / 900} strokeDasharray="2 5" />)}
                    <circle cx="210" cy="140" r="5" fill="currentColor" />
                    <circle cx="210" cy="140" r="5" fill="none" stroke="currentColor">
                      <animate attributeName="r" values="5;26" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values=".6;0" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">12.9716° N · 77.5946° E</span>
                  <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium transition-transform group-hover:scale-[1.03] group-active:scale-95">
                    <MapPin size={13} /> Load interactive map
                  </span>
                </button>
              )}
            </div>

            <div className="bg-white dark:bg-white/[0.03] p-4 sm:p-5 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-lg flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] font-semibold text-gray-900 dark:text-white mb-1">Address</p>
                  <p className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    Bangalore, Karnataka<br />
                    India — 560001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Bangalore,Karnataka,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mt-1.5 sm:mt-2 transition-colors"
                  >
                    Open in Google Maps
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500">&copy; {new Date().getFullYear()} Shiv Kumar Sharma</p>
          <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500">Built with React, Three.js & GSAP</p>
          <button onClick={() => scrollToId('home')} className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white link-underline cursor-pointer">Back to top ↑</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden pt-4" aria-hidden="true">
        <p data-split className="text-[15.5vw] lg:text-[13.25rem] font-bold tracking-[-0.06em] leading-[0.78] text-gray-900/[0.06] dark:text-white/[0.05] select-none whitespace-nowrap translate-y-[8%]">{"Shiv Sharma".split("").map((c, i) => <span key={i} className="footer-char">{c === " " ? " " : c}</span>)}</p>
      </div>
    </section>
  );
};

export default Contact;
