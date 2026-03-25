import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Code2, ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:abhaysahucse@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socials = [
    { href: personalInfo.github, Icon: Github, label: 'GitHub', handle: 'abhaysahu-cse' },
    { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn', handle: 'abhay-sahu-222226232' },
    { href: personalInfo.twitter, Icon: Twitter, label: 'Twitter/X', handle: 'SahuAbhay93' },
    { href: personalInfo.leetcode, Icon: Code2, label: 'LeetCode', handle: 'Abhay_Sahu_Cse' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">// let's connect</p>
          <h2 className="section-title text-center">Let's Build Something Scalable</h2>
          <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: '#64748b' }}>
            Open to backend engineering roles, AI/ML integration projects, and interesting problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email CTA */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <Mail size={18} style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm" style={{ color: '#e2e8f0' }}>Email</div>
                  <a href={`mailto:${personalInfo.email}`}
                    className="font-mono text-xs hover:text-cyan-400 transition-colors"
                    style={{ color: '#3b82f6' }}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm font-display font-medium transition-colors hover:text-cyan-400 group"
                style={{ color: '#94a3b8' }}>
                Send an email
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-2">
              <MapPin size={14} style={{ color: '#475569' }} />
              <span className="font-mono text-xs" style={{ color: '#475569' }}>
                {personalInfo.location} · Open to remote worldwide
              </span>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="font-mono text-xs mb-4" style={{ color: '#475569' }}>// find me at</p>
              <div className="space-y-3">
                {socials.map(({ href, Icon, label, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all group hover:bg-slate-900/50"
                    style={{ border: '1px solid transparent' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(34,211,238,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.1)' }}>
                      <Icon size={15} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <div className="font-display text-xs font-medium" style={{ color: '#94a3b8' }}>{label}</div>
                      <div className="font-mono text-xs" style={{ color: '#475569' }}>@{handle}</div>
                    </div>
                    <ArrowRight size={12} className="ml-auto text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4"
              >
                <CheckCircle size={40} style={{ color: '#22c55e' }} />
                <p className="font-display font-semibold text-lg" style={{ color: '#e2e8f0' }}>Opening mail client...</p>
                <p className="font-mono text-xs" style={{ color: '#64748b' }}>Your message is ready to send.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#64748b' }}>Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.1)',
                      color: '#e2e8f0',
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#64748b' }}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.1)',
                      color: '#e2e8f0',
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#64748b' }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.1)',
                      color: '#e2e8f0',
                    }}
                    placeholder="Tell me about the project or opportunity..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight size={15} />
                </button>
                <p className="text-center font-mono text-xs" style={{ color: '#334155' }}>
                  Or email directly: {personalInfo.email}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
