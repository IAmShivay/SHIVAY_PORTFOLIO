import { Mail, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        {/* Dark CTA banner */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-10 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Let's work together</h2>
              <p className="text-sm text-gray-400 max-w-md">
                Currently open to new opportunities. Have a project or role in mind? Let's talk.
              </p>
            </div>
            <a
              href="mailto:shivaysharmachemistry@gmail.com?subject=Hello%20Shiv"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <Mail size={16} />
              Send an Email
              <ArrowUpRight size={14} className="text-gray-400" />
            </a>
          </div>
        </div>

        {/* Contact details + form side by side */}
        <div className="grid lg:grid-cols-[280px,1fr] gap-8 lg:gap-12">
          {/* Left — details */}
          <div className="space-y-5">
            {[
              { label: "Email", value: "shivaysharmachemistry@gmail.com", href: "mailto:shivaysharmachemistry@gmail.com" },
              { label: "Phone", value: "+91 8918349445", href: "tel:+918918349445" },
              { label: "Location", value: "Bangalore, India" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-[13px] text-gray-700 hover:text-gray-900 transition-colors">{item.value}</a>
                ) : (
                  <p className="text-[13px] text-gray-700">{item.value}</p>
                )}
              </div>
            ))}
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2">Socials</p>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/iAmShivaySharma", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/iamshivay", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-md transition-colors" aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-5 sm:p-6 rounded-xl border border-gray-100 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-widest">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              <Send size={15} />
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="text-xs text-emerald-600 text-center">Thanks! I'll get back to you soon.</p>}
            {status === 'error' && <p className="text-xs text-red-500 text-center">Something went wrong. Please try again or email me directly.</p>}
          </form>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-gray-400">&copy; 2025 Shiv Kumar Sharma</p>
          <p className="text-xs text-gray-400">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
