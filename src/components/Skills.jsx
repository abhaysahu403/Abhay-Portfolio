import { motion } from 'framer-motion';
import { Server, Brain, Database, Code2 } from 'lucide-react';
import { skills } from '../data/portfolio';

const iconMap = { Server, Brain, Database, Code2 };

const colorMap = {
  blue: {
    icon: '#3b82f6',
    bar: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    bg: 'rgba(59,130,246,0.05)',
    border: 'rgba(59,130,246,0.15)',
    glow: 'rgba(59,130,246,0.2)',
  },
  cyan: {
    icon: '#22d3ee',
    bar: 'linear-gradient(90deg, #22d3ee, #818cf8)',
    bg: 'rgba(34,211,238,0.05)',
    border: 'rgba(34,211,238,0.15)',
    glow: 'rgba(34,211,238,0.2)',
  },
  purple: {
    icon: '#8b5cf6',
    bar: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
    bg: 'rgba(139,92,246,0.05)',
    border: 'rgba(139,92,246,0.15)',
    glow: 'rgba(139,92,246,0.2)',
  },
  green: {
    icon: '#22c55e',
    bar: 'linear-gradient(90deg, #22c55e, #06b6d4)',
    bg: 'rgba(34,197,94,0.05)',
    border: 'rgba(34,197,94,0.15)',
    glow: 'rgba(34,197,94,0.2)',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-subtitle">// my arsenal</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-sm mt-2" style={{ color: '#64748b' }}>
            Tools I reach for when building production systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => {
            const colors = colorMap[skillGroup.color] || colorMap.blue;
            const Icon = iconMap[skillGroup.icon] || Server;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group"
                style={{ '--hover-glow': colors.glow }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
                    <Icon size={16} style={{ color: colors.icon }} />
                  </div>
                  <h3 className="font-display font-semibold text-sm" style={{ color: '#e2e8f0' }}>
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-mono text-xs" style={{ color: '#94a3b8' }}>
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs" style={{ color: colors.icon }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(148,163,184,0.1)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: groupIndex * 0.1 + i * 0.05, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: colors.bar }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 glass-card"
        >
          <p className="font-mono text-xs mb-4" style={{ color: '#475569' }}>// also proficient in</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Hibernate', 'JDBC', 'MongoDB', 'MySQL', 'Oracle Cloud', 'CI/CD',
              'System Design', 'RESTful APIs', 'Pytest', 'Three.js', 'React.js',
              'HTML5', 'CSS3', 'Data Structures', 'Algorithms'
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-mono transition-colors hover:text-cyan-400 cursor-default"
                style={{ background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.08)', color: '#64748b' }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
