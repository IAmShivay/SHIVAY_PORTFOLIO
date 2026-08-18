import { Mail, Send, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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
    <section id="contact" className="py-14 lg:py-20 border-t border-gray-100 bg-gray-50/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-sm text-gray-500 mb-8 max-w-lg">
          Currently open to new opportunities. Whether you have a project, a role, or just want to connect — I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 lg:items-stretch">
          {/* Left — contact details + form */}
          <div className="space-y-5 flex flex-col">
            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              <a href="mailto:shivaysharmachemistry@gmail.com" className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-gray-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-[13px] text-gray-700 truncate">shivaysharmachemistry@gmail.com</p>
                </div>
              </a>
              <a href="tel:+918918349445" className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors flex-shrink-0">
                  <Phone size={16} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest">Phone</p>
                  <p className="text-[13px] text-gray-700">+91 8918349445</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0">
                  <MapPin size={16} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest">Location</p>
                  <p className="text-[13px] text-gray-700">Bangalore, Karnataka, India</p>
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
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="p-2.5 text-gray-400 hover:text-gray-700 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 flex-1">
              <p className="text-[13px] font-semibold text-gray-900 mb-4">Send a message</p>
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send size={14} />
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                </button>
                {status === 'sent' && <p className="text-xs text-emerald-600 text-center">Thanks! I'll get back to you soon.</p>}
                {status === 'error' && <p className="text-xs text-red-500 text-center">Something went wrong. Try emailing me directly.</p>}
              </form>
            </div>
          </div>

          {/* Right — map + address */}
          <div className="flex flex-col gap-4">
            {/* Map — fills remaining height */}
            <div className="rounded-xl overflow-hidden border border-gray-100 bg-white flex-1 min-h-[300px]">
              <iframe
                title="Location - Bangalore, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.884539903!2d77.49085452149588!3d12.954517009498942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address text */}
            <div className="bg-white p-5 rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Bangalore, Karnataka<br />
                    India — 560001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Bangalore,Karnataka,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 mt-2 transition-colors"
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
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-gray-400">&copy; 2025 Shiv Kumar Sharma</p>
          <p className="text-xs text-gray-400">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
