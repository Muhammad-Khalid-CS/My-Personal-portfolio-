import { useState } from 'react';
import { Linkedin, Facebook, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatusMessage('Message prepared! Opening your mail client...');

    const mailtoUrl = `mailto:${PERSONAL_INFO.social.email.replace('mailto:', '')}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.number}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading matching Usman's site */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-white mb-8 tracking-tight">
          Contact <span className="glow-span">Me</span>
        </h2>

        {/* Social / Direct Reach Icons (Icon approach only, no open text email or phone) */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-icon-usman"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="social-icon-usman"
            title="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="social-icon-usman"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.social.email}
            aria-label="Email"
            className="social-icon-usman"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Form matching Usman's form structure */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-5 text-base sm:text-lg text-white bg-[#131313] rounded-2xl border-2 border-[var(--main-color)] focus:outline-hidden focus:shadow-[0_0_20px_var(--main-color)] transition-all placeholder:text-white/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-5 text-base sm:text-lg text-white bg-[#131313] rounded-2xl border-2 border-[var(--main-color)] focus:outline-hidden focus:shadow-[0_0_20px_var(--main-color)] transition-all placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="w-full p-5 text-base sm:text-lg text-white bg-[#131313] rounded-2xl border-2 border-[var(--main-color)] focus:outline-hidden focus:shadow-[0_0_20px_var(--main-color)] transition-all placeholder:text-white/40 font-mono"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-5 text-base sm:text-lg text-white bg-[#131313] rounded-2xl border-2 border-[var(--main-color)] focus:outline-hidden focus:shadow-[0_0_20px_var(--main-color)] transition-all placeholder:text-white/40"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={8}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-5 text-base sm:text-lg text-white bg-[#131313] rounded-2xl border-2 border-[var(--main-color)] focus:outline-hidden focus:shadow-[0_0_20px_var(--main-color)] transition-all placeholder:text-white/40 resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="btn-usman px-12 py-4 text-lg font-semibold"
            >
              Send Message
            </button>
          </div>

          {statusMessage && (
            <p className="text-center text-sm font-semibold text-emerald-400 mt-3 animate-fade-in">
              {statusMessage}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
