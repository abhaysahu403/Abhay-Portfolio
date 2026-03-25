import { motion } from 'framer-motion';
import { Trophy, Medal, Code2, Cloud, Award, Users } from 'lucide-react';
import { achievements, certifications } from '../data/portfolio';

const iconMap = { Trophy, Medal, Code2, Cloud, Award, Users };

const colorConfigs = {
  gold: { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.2)', icon: '#eab308', glow: 'rgba(234,179,8,0.1)' },
  blue: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#3b82f6', glow: 'rgba(59,130,246,0.1)' },
  cyan: { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', icon: '#22d3ee', glow: 'rgba(34,211,238,0.1)' },
  red: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', icon: '#ef4444', glow: 'rgba(239,68,68,0.1)' },
  green: { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', icon: '#22c55e', glow: 'rgba(34,197,94,0.1)' },
  purple: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', icon: '#8b5cf6', glow: 'rgba(139,92,246,0.1)' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-subtitle">// proof of work</p>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            const colors = colorConfigs[achievement.color] || colorConfigs.blue;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3, boxShadow: `0 0 30px ${colors.glow}` }}
                className="glass-card p-5 flex items-start gap-4 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
                  <Icon size={20} style={{ color: colors.icon }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm mb-0.5" style={{ color: '#e2e8f0' }}>
                    {achievement.title}
                  </h3>
                  <p className="font-mono text-xs mb-1" style={{ color: colors.icon }}>
                    {achievement.subtitle}
                  </p>
                  <p className="text-xs" style={{ color: '#64748b' }}>
                    {achievement.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="font-display font-semibold text-sm" style={{ color: '#e2e8f0' }}>
              Licenses & Certifications
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-2 p-3 rounded-xl"
                style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.08)' }}
              >
                <span style={{ color: '#22d3ee', marginTop: 1, flexShrink: 0 }}>◆</span>
                <span className="text-xs font-mono leading-relaxed" style={{ color: '#94a3b8' }}>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
