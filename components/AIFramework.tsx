import React from 'react';
import { motion } from 'framer-motion';
import { AI_FRAMEWORK } from '../constants';
import * as Icons from 'lucide-react';

const AIFramework: React.FC = () => {
  return (
    <section id="ai-framework" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-teal-500/50"></div>
              <span className="text-[9px] font-black text-teal-500 uppercase tracking-[0.4em]">Intelligence</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none"
            >
              AI <span className="text-teal-500">FRAMEWORK.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-[10px] leading-relaxed font-medium"
          >
            Supercharging the development lifecycle with custom AI protocols 
            that ensure maximum precision and rapid deployment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {AI_FRAMEWORK.map((item, i) => {
            const IconComponent = (Icons as any)[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="h-full glass-card p-6 rounded-[1.5rem] border border-white/5 relative overflow-hidden group-hover:border-teal-500/30 transition-all duration-500">
                  {/* Background Accent */}
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-colors"></div>
                  
                  <div className="absolute top-5 right-5 text-teal-500/10 font-black text-3xl group-hover:text-teal-500/20 transition-colors select-none">
                    0{i + 1}
                  </div>
                  
                  <div className="w-12 h-12 rounded-lg bg-teal-600/5 flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 group-hover:bg-teal-600/10 transition-all duration-500">
                    {IconComponent && <IconComponent size={20} />}
                  </div>

                  <h3 className="text-base font-black text-white mb-2 uppercase tracking-widest leading-tight">{item.stage}</h3>
                  <p className="text-slate-400 text-[9px] leading-relaxed mb-5 font-medium">{item.description}</p>
                  
                  <div className="pt-5 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-1 rounded-full bg-teal-500"></div>
                      <p className="text-[7px] font-black text-teal-500 uppercase tracking-[0.2em]">Deliverable</p>
                    </div>
                    <p className="text-[11px] font-bold text-white tracking-tight">{item.outcome}</p>
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

export default AIFramework;
