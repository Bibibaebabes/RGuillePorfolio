import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../constants';
import { Terminal, MapPin, Briefcase, Cpu, Zap, Award } from 'lucide-react';

const IdentityModule: React.FC = () => {
  return (
    <section id="identity" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-black to-black scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
                <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.6em]">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                  About Me
                </span>
              </div>

              <h2 className="text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Turning Ideas Into <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Digital Reality</span>
              </h2>

              <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                {DEVELOPER_INFO.bio}
              </p>
            </motion.div>

            {/* Philosophy Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white/5 to-white/2 border border-teal-500/20 rounded-3xl relative overflow-hidden group hover:border-teal-500/40 transition-all duration-500"
            >
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                  <Zap size={16} className="text-teal-400" />
                </div>
                <p className="text-[10px] font-black text-teal-400 uppercase tracking-[0.3em]">My Philosophy</p>
              </div>

              <p className="text-slate-200 text-base font-medium leading-relaxed relative z-10">
                <span className="text-teal-400 font-mono mr-3">→</span>
                "Great software isn't built in isolation—it's crafted with users in mind, optimized for performance, and designed for scale. Every line of code tells a story of problem-solving and innovation."
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Status: ACTIVELY DEVELOPING</span>
                </div>
                <div className="text-[9px] font-mono text-teal-500/60">v2.4.1</div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Development Stack</p>
                  <Cpu size={16} className="text-teal-400/60 group-hover:text-teal-400 transition-colors" />
                </div>
                <p className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">5+ Technologies Mastered</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Education</p>
                  <Award size={16} className="text-teal-400/60 group-hover:text-teal-400 transition-colors" />
                </div>
                <p className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">BS IT — June 2026</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Code Editor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl"></div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1a1a1a] to-[#141414] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-green-500 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="h-8 px-4 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-t-lg flex items-center gap-2 border-x border-t border-white/5 -mb-[17px] relative z-10">
                    <Terminal size={12} className="text-teal-400" />
                    <span className="text-[11px] font-mono text-slate-300 tracking-wider">developer.ts</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-mono text-slate-500">UTF-8</span>
                  <span className="text-[9px] font-mono text-teal-400/70">TypeScript</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 font-mono text-[12px] md:text-[13px] leading-relaxed overflow-x-auto">
                <div className="flex gap-6">
                  <div className="flex flex-col text-slate-600/50 text-right select-none min-w-[24px]">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <span key={i} className="h-6">{String(i + 1).padStart(2, '0')}</span>
                    ))}
                  </div>
                  <div className="flex-1 space-y-0">
                    <div><span className="text-purple-400">export const</span> <span className="text-blue-400">profile</span> = {`{`}</div>
                    <div className="pl-4"><span className="text-teal-400">name</span>: <span className="text-amber-200">"{DEVELOPER_INFO.name}"</span>,</div>
                    <div className="pl-4"><span className="text-teal-400">role</span>: <span className="text-amber-200">"{DEVELOPER_INFO.role}"</span>,</div>
                    <div className="pl-4"><span className="text-teal-400">status</span>: <span className="text-green-400">"Ready for Hire"</span>,</div>
                    <div className="pl-4"><span className="text-teal-400">graduation</span>: <span className="text-amber-200">"June 2026"</span>,</div>
                    <div className="pl-4"><span className="text-teal-400">expertise</span>: [</div>
                    <div className="pl-8">
                      {DEVELOPER_INFO.specializations.map((spec, i) => (
                        <div key={i}>
                          <span className="text-amber-200">"{spec}"</span>
                          {i < DEVELOPER_INFO.specializations.length - 1 ? ',' : ''}
                        </div>
                      ))}
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4"><span className="text-teal-400">tools</span>: [</div>
                    <div className="pl-8">
                      {DEVELOPER_INFO.environment.slice(0, 3).map((env, i) => (
                        <div key={i}>
                          <span className="text-amber-200">"{env}"</span>
                          {i < 2 ? ',' : ''}
                        </div>
                      ))}
                    </div>
                    <div className="pl-4">]</div>
                    <div>{`}`};</div>

                    {/* Blinking cursor */}
                    <motion.div 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="w-2 h-6 bg-teal-400/70 inline-block align-text-bottom ml-1"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-[#1a1a1a] to-[#141414] px-6 py-3 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500/70 animate-pulse"></div>
                    <span className="text-[9px] font-mono text-slate-400">main</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">Ln 17, Col 15</span>
                </div>
                <span className="text-[9px] font-mono text-teal-500/50">RG_PORTFOLIO_v3.2.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdentityModule;
