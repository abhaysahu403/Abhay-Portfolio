import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, FileText, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import CaseStudyModal from './CaseStudyModal';

const tagColorMap = {
  blue: 'tag',
  cyan: 'tag tag-cyan',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-subtitle">// what I've built</p>
          <div className="flex items-end gap-4">
            <h2 className="section-title">Projects</h2>
            <div className="mb-2 pb-1 flex items-center gap-2 text-xs font-mono" style={{ color: '#475569' }}>
              <Lock size={11} />
              Repos private · Case studies below
            </div>
          </div>
          <p className="text-sm mt-2 max-w-xl" style={{ color: '#64748b' }}>
            I build systems, not just code. Each project is a production-grade engineering decision — here's the thinking behind each one.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className={tagColorMap[project.tagStyle] || 'tag'}>{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(148,163,184,0.05)', color: '#475569', border: '1px solid rgba(148,163,184,0.08)' }}>
                  <Lock size={10} />
                  private
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors"
                style={{ color: '#e2e8f0' }}>
                {project.title}
              </h3>
              <p className="font-mono text-xs mb-3" style={{ color: '#64748b' }}>{project.subtitle}</p>

              {/* Highlight */}
              {project.highlight && (
                <div className="mb-4 text-xs font-mono py-1.5 px-2.5 rounded-lg"
                  style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.12)', color: '#22d3ee' }}>
                  {project.highlight}
                </div>
              )}

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#94a3b8' }}>
                {project.description}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.slice(0, 4).map(tech => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: 'rgba(59,130,246,0.07)', color: '#64748b', border: '1px solid rgba(59,130,246,0.1)' }}>
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: 'rgba(59,130,246,0.07)', color: '#64748b' }}>
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-display font-medium transition-all duration-300 group/btn"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(34,211,238,0.1))',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: '#93c5fd'
                  }}
                >
                  <FileText size={12} />
                  View Case Study
                  <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 text-xs font-mono"
          style={{ color: '#334155' }}
        >
          All project source code is available upon request — reach out at{' '}
          <a href="mailto:abhaysahucse@gmail.com" className="text-blue-500 hover:text-cyan-400 transition-colors">
            abhaysahucse@gmail.com
          </a>
        </motion.p>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
