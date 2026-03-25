import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Brain, Shield, GitBranch, Map, Bot, Box, AlertTriangle, Wand2, Globe, Layers, Users, Lock } from 'lucide-react';
import ArchDiagram from './ArchDiagram';

const iconMap = { Zap, Brain, Shield, GitBranch, Map, Bot, Box, AlertTriangle, Wand2, Globe, Layers, Users };

const tagColorMap = {
  blue: 'tag',
  cyan: 'tag tag-cyan',
};

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const { caseStudy, title, subtitle, stack, tags, tagStyle, highlight } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto modal-backdrop"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative w-full max-w-4xl my-8"
          onClick={e => e.stopPropagation()}
          style={{
            background: 'rgba(2, 6, 23, 0.97)',
            border: '1px solid rgba(34,211,238,0.15)',
            borderRadius: '20px',
            boxShadow: '0 0 60px rgba(34,211,238,0.06), 0 40px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="p-8 pb-0">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className={tagColorMap[tagStyle] || 'tag'}>{tag}</span>
              ))}
            </div>

            <h2 className="font-display font-bold text-3xl mb-1" style={{ color: '#e2e8f0' }}>{title}</h2>
            <p className="font-mono text-sm mb-3" style={{ color: '#94a3b8' }}>{subtitle}</p>
            {highlight && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6"
                style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
                {highlight}
              </div>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {stack.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', color: '#93c5fd' }}>
                  {tech}
                </span>
              ))}
            </div>

            <hr style={{ borderColor: 'rgba(148,163,184,0.08)' }} />
          </div>

          {/* Body */}
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              {/* Problem */}
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#ef4444' }}>
                  // Problem
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                  {caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#22d3ee' }}>
                  // Solution
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                  {caseStudy.solution}
                </p>
              </div>

              {/* Tech Deep Dive */}
              {caseStudy.techDeep && (
                <div>
                  <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#8b5cf6' }}>
                    // Technical Deep-Dive
                  </h3>
                  <p className="text-xs leading-relaxed font-mono p-3 rounded-lg"
                    style={{ color: '#7c8ca1', background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}>
                    {caseStudy.techDeep}
                  </p>
                </div>
              )}

              {/* Results */}
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#22c55e' }}>
                  // Results
                </h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#94a3b8' }}>
                      <span style={{ color: '#22c55e', marginTop: 2 }}>▸</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Architecture */}
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#f97316' }}>
                  // Architecture
                </h3>
                <ArchDiagram
                  components={caseStudy.architecture.components}
                  connections={caseStudy.architecture.connections}
                />
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>
                  // Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {caseStudy.keyFeatures.map((feature) => {
                    const Icon = iconMap[feature.icon] || Zap;
                    return (
                      <div key={feature.title} className="p-3 rounded-xl"
                        style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.1)' }}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon size={13} style={{ color: '#3b82f6' }} />
                          <span className="font-display font-semibold text-xs" style={{ color: '#e2e8f0' }}>{feature.title}</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 pb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#475569' }}>
              <Lock size={12} />
              Code available upon request — abhaysahucse@gmail.com
            </div>
            <button onClick={onClose} className="btn-outline text-xs px-4 py-2">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
