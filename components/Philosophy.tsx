import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-teal-500/50"></div>
                <span className="text-[10px] font-black text-teal-500 uppercase tracking-[0.4em]">Core Methodology</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
                DEVELOPMENT <br />
                <span className="text-teal-500">PHILOSOPHY.</span>
              </h2>
              <p className="text-base text-slate-400 max-w-xl leading-relaxed font-medium">
                I don't just build websites; I architect digital systems. My approach combines 
                technical precision with strategic automation to create assets that drive growth.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Precision Engineering", desc: "Every line of code serves a specific business objective." },
                { title: "Scalable Architecture", desc: "Systems designed to grow alongside your international reach." },
                { title: "AI-Enhanced Speed", desc: "Leveraging advanced AI to deliver high-quality results faster." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-teal-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/5 flex items-center justify-center text-teal-500 shrink-0 group-hover:bg-teal-500/10 transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-teal-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="h-8 px-4 bg-[#2a2a2a] rounded-t-lg flex items-center gap-2 border-x border-t border-white/5 -mb-[13px] relative z-10">
                    <Terminal size={12} className="text-teal-400" />
                    <span className="text-[10px] font-mono text-slate-300 tracking-wider">philosophy_core.ts</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-slate-500">UTF-8</span>
                  <span className="text-[10px] font-mono text-teal-500/50">TypeScript</span>
                </div>
              </div>
              
              {/* Editor Content */}
              <div className="p-6 md:p-8 font-mono text-[11px] md:text-[13px] leading-relaxed overflow-x-auto">
                <div className="flex gap-6">
                  <div className="flex flex-col text-slate-600 text-right select-none min-w-[20px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 mb-4">
                      <span className="text-teal-500">#</span>
                      <span className="text-teal-500 font-bold uppercase tracking-widest text-[11px]">DEVELOPMENT_PHILOSOPHY</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">mindset</span> = <span className="text-amber-200">"User-First Architecture"</span>;
                      </div>
                      <div>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">principle</span> = <span className="text-amber-200">"Performance over Fluff"</span>;
                      </div>
                      <div>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">workflow</span> = [<span className="text-amber-200">"AI-Enhanced"</span>, <span className="text-amber-200">"Human-Refined"</span>];
                      </div>
                      <div className="pt-4">
                        <span className="text-purple-400">function</span> <span className="text-teal-400">buildExceptionalWeb</span>() {'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-400">prioritizeAccessibility</span>();
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-400">ensureScalability</span>();
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-400">optimizePerformance</span>();
                      </div>
                      <div>
                        {'}'}
                      </div>
                    </div>
                    
                    {/* Cursor Simulation */}
                    <motion.div 
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-5 bg-teal-500/50 inline-block align-middle ml-1 mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Editor Footer */}
              <div className="bg-[#1a1a1a] px-6 py-2 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[9px] font-mono text-slate-400">Main Branch</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">Ln 8, Col 32</span>
                </div>
                <div className="text-[9px] font-mono text-teal-500">RG_SYSTEM_v2.4</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
