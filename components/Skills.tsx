import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const getProficiencyColor = (level: string) => {
    switch(level) {
      case 'Expert': return 'from-emerald-400 to-teal-400';
      case 'Advanced': return 'from-teal-400 to-cyan-400';
      default: return 'from-cyan-400 to-blue-400';
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-black to-black scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              Professional Stack
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
            Technical <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Capabilities</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit developed through rigorous academic training and real-world project experience.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, i) => {
            const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Code2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getProficiencyColor(category.proficiency)} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative h-full p-8 lg:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-teal-500/50 transition-all duration-500 overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

                  {/* Header with icon and proficiency */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:border-teal-400/60 transition-all duration-500 shadow-lg"
                    >
                      <IconComponent size={28} />
                    </motion.div>
                    
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-gradient-to-r ${getProficiencyColor(category.proficiency)} bg-clip-text text-transparent border border-white/10`}
                    >
                      {category.proficiency}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <motion.span 
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + j * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-2 bg-gradient-to-br from-white/10 to-white/5 text-slate-200 text-[11px] font-bold uppercase tracking-widest rounded-lg border border-white/10 group-hover:border-teal-500/50 group-hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
