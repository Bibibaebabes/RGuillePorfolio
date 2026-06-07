import React from 'react';
import { motion } from 'framer-motion';
import { WORKFLOW_STEPS } from '../constants';
import * as Icons from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-teal-500/50"></div>
              <span className="text-[9px] font-black text-teal-500 uppercase tracking-[0.4em]">Workflow</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
            >
              SYSTEM <span className="text-teal-500">BLUEPRINT.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-xs leading-relaxed font-medium"
          >
            A high-velocity technical framework designed to transform complex 
            requirements into high-performance digital architectures.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 relative">
          {/* Connection Line with Glow */}
          <div className="absolute top-10 left-0 w-full h-px bg-white/5 hidden md:block">
            <div className="absolute inset-0 bg-teal-500/10 blur-sm"></div>
          </div>
          
          {WORKFLOW_STEPS.map((step, i) => {
            const IconComponent = (Icons as any)[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Icon Capsule - Refined "App" Style */}
                <div className="flex flex-col items-center mb-4">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-teal-500/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-16 h-16 rounded-[1.25rem] bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-teal-500 relative z-10 group-hover:border-teal-500/50 transition-all duration-500 group-hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-lg bg-teal-600/5 flex items-center justify-center group-hover:bg-teal-600/20 transition-colors">
                        {IconComponent && <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-500" />}
                      </div>
                    </div>
                  </div>
                  {/* Phase Number Accent */}
                  <div className="absolute -top-4 text-[32px] font-black text-white/[0.03] select-none transition-colors group-hover:text-teal-500/[0.05]">
                    {i + 1}
                  </div>
                </div>
                
                {/* Content Card - Premium Glassmorphism */}
                <div className="p-5 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[1.5rem] group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-1 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>
                    <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.3em]">Phase 0{i + 1}</span>
                  </div>
                  <h3 className="text-[11px] font-black text-white mb-2 uppercase tracking-widest leading-tight">{step.title}</h3>
                  <p className="text-slate-400 text-[9px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                  
                  {/* Decorative Bottom Accent */}
                  <div className="mt-auto pt-3 flex justify-end">
                    <div className="w-4 h-0.5 bg-teal-500/20 rounded-full group-hover:w-8 group-hover:bg-teal-500 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Vertical Connector for Mobile */}
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div className="h-10 w-px bg-white/5 mx-auto md:hidden my-4"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Technical Footer Accent */}
        <div className="mt-20 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Core Status: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Protocol: RG_v2.4</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/10"></div>
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
              Encrypted Connection // Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
