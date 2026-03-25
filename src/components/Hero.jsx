import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Code2, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const roles = [
  "Backend Engineer",
  "AI Systems Builder",
  "Microservices Architect",
  "ML Pipeline Developer",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ roleIndex: 0, isDeleting: false, charIndex: 0 });

  useEffect(() => {
    let timeout;
    const tick = () => {
      const s = stateRef.current;
      const current = roles[s.roleIndex];
      if (!s.isDeleting) {
        if (s.charIndex < current.length) {
          s.charIndex += 1;
          setDisplayText(current.slice(0, s.charIndex));
          timeout = setTimeout(tick, 80);
        } else {
          s.isDeleting = true;
          timeout = setTimeout(tick, 2000);
        }
      } else {
        if (s.charIndex > 0) {
          s.charIndex -= 1;
          setDisplayText(current.slice(0, s.charIndex));
          timeout = setTimeout(tick, 40);
        } else {
          s.isDeleting = false;
          s.roleIndex = (s.roleIndex + 1) % roles.length;
          timeout = setTimeout(tick, 300);
        }
      }
    };
    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono"
                style={{ borderColor: 'rgba(34,211,238,0.3)', background: 'rgba(34,211,238,0.05)', color: '#67e8f9' }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="font-mono text-sm text-blue-400 mb-2 tracking-widest uppercase">
                Hi, I'm
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                <span style={{ color: '#e2e8f0' }}>Abhay</span>
                <br />
                <span className="gradient-text">Sahu</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="mb-6 h-8">
              <span className="font-mono text-lg" style={{ color: '#94a3b8' }}>
                {displayText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: '#94a3b8' }}
            >
              {personalInfo.tagline}{' '}
              <span style={{ color: '#e2e8f0' }}>Real systems, real impact.</span>
            </motion.p>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-8">
              {[
                { value: '3+', label: 'Production Projects' },
                { value: '250+', label: 'DSA Problems' },
                { value: '5', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl" style={{ color: '#22d3ee' }}>{stat.value}</div>
                  <div className="font-mono text-xs" style={{ color: '#64748b' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Projects
                <ArrowDown size={14} />
              </a>
              <a href={personalInfo.resumeUrl} className="btn-outline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <Download size={14} />
                Resume
              </a>
              <a href="mailto:abhaysahucse@gmail.com" className="btn-outline flex items-center gap-2">
                <Mail size={14} />
                Contact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { href: personalInfo.github, Icon: Github, label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: personalInfo.twitter, Icon: Twitter, label: 'Twitter' },
                { href: personalInfo.leetcode, Icon: Code2, label: 'LeetCode' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
              />

              {/* Avatar container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 md:w-80 md:h-80"
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-3 rounded-full border border-blue-500/20" />

                {/* Profile photo */}
                <div
                  className="absolute inset-6 rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(34,211,238,0.4)',
                    boxShadow: '0 0 50px rgba(34,211,238,0.2), 0 0 100px rgba(59,130,246,0.1), inset 0 0 20px rgba(0,0,0,0.3)'
                  }}
                >
                  <img
                    src="/abhay.png"
                    alt="Abhay Sahu"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-2 -right-2 glass-card px-3 py-2 text-xs font-mono"
                  style={{ background: 'rgba(2,6,23,0.9)' }}
                >
                  <span style={{ color: '#22d3ee' }}>⚡ sub-30ms</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -bottom-2 -left-2 glass-card px-3 py-2 text-xs font-mono"
                  style={{ background: 'rgba(2,6,23,0.9)' }}
                >
                  <span style={{ color: '#86efac' }}>🥇 National Winner</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  className="absolute top-1/2 -right-10 glass-card px-3 py-2 text-xs font-mono"
                  style={{ background: 'rgba(2,6,23,0.9)' }}
                >
                  <span style={{ color: '#93c5fd' }}>OCI Certified</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: '#475569' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} style={{ color: '#475569' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
