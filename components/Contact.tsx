import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../constants';
import { Phone, Mail, Facebook, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-black relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                Get in <br />
                <span className="text-teal-500">Touch.</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-400 max-w-md">
                Ready to start your next project? Let's discuss how we can build 
                something amazing together.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-4 md:p-8 bg-white/5 rounded-2xl md:rounded-[2.5rem] border border-white/5 group hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={24} className="md:size-7" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <p className="text-lg md:text-xl font-black text-white">{DEVELOPER_INFO.phone}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-4 md:p-8 bg-white/5 rounded-2xl md:rounded-[2.5rem] border border-white/5 group hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={24} className="md:size-7" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-lg md:text-xl font-black text-white break-all">{DEVELOPER_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Connect with me</p>
              <div className="flex gap-3 md:gap-4">
                <a href={DEVELOPER_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 text-white flex items-center justify-center hover:bg-teal-600 transition-all border border-white/5">
                  <Facebook size={20} className="md:size-6" />
                </a>
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 text-white flex items-center justify-center hover:bg-teal-600 transition-all border border-white/5">
                  <Linkedin size={20} className="md:size-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-12 rounded-2xl md:rounded-[3rem] border border-white/5"
          >
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 md:px-8 py-3 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600 font-bold text-sm md:text-base"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 md:px-8 py-3 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600 font-bold text-sm md:text-base"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 md:px-8 py-3 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all resize-none placeholder:text-slate-600 font-bold text-sm md:text-base"
                ></textarea>
              </div>
              <button className="w-full py-4 md:py-6 bg-teal-600 text-white font-black uppercase tracking-widest text-xs md:text-xs rounded-xl md:rounded-2xl hover:bg-teal-700 transition-all shadow-2xl shadow-teal-600/20 flex items-center justify-center gap-3 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
