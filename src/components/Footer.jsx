import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Twitter, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: 'rgba(148,163,184,0.06)', background: 'rgba(2,6,23,0.5)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Terminal size={12} className="text-white" />
            </div>
            <span className="font-display font-bold text-base" style={{ color: '#e2e8f0' }}>
              abhay<span style={{ color: '#22d3ee' }}>.</span>dev
            </span>
          </div>

          {/* Credit */}
          <p className="font-mono text-xs flex items-center gap-1.5" style={{ color: '#334155' }}>
            Built with <Heart size={10} style={{ color: '#ef4444' }} fill="#ef4444" /> by Abhay Sahu · {new Date().getFullYear()}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, Icon: Github },
              { href: personalInfo.linkedin, Icon: Linkedin },
              { href: personalInfo.twitter, Icon: Twitter },
              { href: personalInfo.leetcode, Icon: Code2 },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-600 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
