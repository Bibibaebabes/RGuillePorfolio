
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Globe } from 'lucide-react';

const CalendarEmbed: React.FC = () => {
  return (
    <section id="calendar" className="py-16 md:py-24 bg-black relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-teal-500/50"></div>
                <span className="text-[10px] font-black text-teal-500 uppercase tracking-[0.4em]">Booking Module</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
                BOOK A <br /> <span className="text-teal-500">DISCOVERY CALL.</span>
              </h2>
              <p className="text-base text-slate-400 max-w-xl leading-relaxed font-medium">
                Ready to take your project to the next level? Select a time that works for you 
                and let's discuss how we can build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 group hover:border-teal-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-teal-500/5 rounded-xl flex items-center justify-center group-hover:bg-teal-500/10 transition-colors">
                  <Clock size={20} className="text-teal-500" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Duration</p>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">30 Minutes Strategy Session</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-6 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 group hover:border-teal-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-teal-500/5 rounded-xl flex items-center justify-center group-hover:bg-teal-500/10 transition-colors">
                  <Globe size={20} className="text-teal-500" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">Google Meet / Zoom</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg mx-auto lg:ml-auto"
          >
            <div className="absolute -inset-1 bg-teal-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              {/* Editor-style Header */}
              <div className="bg-[#1a1a1a] px-6 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={12} className="text-teal-500" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Schedule_v2.0</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              
              {/* Content Area - Responsive Height */}
              <div className="p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[350px] md:min-h-[400px]">
                <div className="relative mb-8 md:mb-10">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-teal-500/10 rounded-2xl flex items-center justify-center border border-teal-500/20">
                    <CalendarIcon size={28} className="text-teal-500 md:size-32" />
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">Calendar Integration</h3>
                  <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-[220px] md:max-w-[240px] mx-auto font-medium">
                    Select a slot from my synchronized schedule to initiate a technical discovery session.
                  </p>
                </div>

                <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-10 md:hover:pr-12 active:scale-95">
                  <span className="relative z-10">Open Calendar</span>
                  <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </div>
                </button>
              </div>

              {/* Footer */}
              <div className="bg-[#1a1a1a] px-6 py-2 border-t border-white/5 flex justify-between items-center">
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Status: Ready_to_sync</span>
                <span className="text-[8px] font-mono text-teal-500/50 uppercase tracking-widest">Secure Connection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalendarEmbed;
