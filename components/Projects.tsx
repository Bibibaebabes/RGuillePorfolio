import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, CheckCircle2, Zap, Target } from 'lucide-react';

const Projects: React.FC = () => {
  const getStatusColor = (status: string) => {
    if (status === 'Completed') return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30';
    return 'from-cyan-500/20 to-teal-500/20 border-cyan-500/30';
  };

  const getStatusBadgeColor = (status: string) => {
    if (status === 'Completed') return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-black to-black scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
            <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.6em]">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
              Featured Works
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-teal-500 to-transparent"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-7xl font-black text-white tracking-tighter"
          >
            Showcase of <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Innovation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Real-world projects demonstrating full-stack development expertise, from conception through production deployment.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getStatusColor(project.status)} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-teal-500/50 overflow-hidden transition-all duration-500 flex flex-col">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

                {/* Image Section */}
                <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-black/50 to-black/20">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Status Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-sm ${getStatusBadgeColor(project.status)}`}
                  >
                    {project.status}
                  </motion.div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    {project.link && project.link !== '#' ? (
                      <motion.a 
                        whileHover={{ scale: 1.15 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:shadow-teal-500/50 transition-all"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    ) : null}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col gap-6">
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Key Features</p>
                    <div className="space-y-2">
                      {project.features?.slice(0, 2).map((feature, j) => (
                        <motion.div 
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 + j * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-xs text-slate-300 font-bold"
                        >
                          <CheckCircle2 size={12} className="text-teal-400 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <div className="pt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 flex items-start gap-3">
                      <Target size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-teal-200 font-medium">{project.impact}</p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/10 flex-1 flex flex-col justify-end">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, j) => (
                        <motion.span 
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.15 + j * 0.05 + 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-teal-500/30 hover:border-teal-500/60 transition-all duration-300 cursor-pointer"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 group"
          >
            Discuss Your Next Project
            <Zap size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
