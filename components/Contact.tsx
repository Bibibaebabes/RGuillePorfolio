import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../constants';
import { Phone, Mail, Facebook, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">
                Get in <br />
                <span className="text-teal-500">Touch.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md">
                Ready to start your next project? Let's discuss how we can build 
                something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-8 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:border-teal-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <p className="text-xl font-black text-white">{DEVELOPER_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:border-teal-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-xl font-black text-white">{DEVELOPER_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Connect with me</p>
              <div className="flex gap-4">
                <a href={DEVELOPER_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 text-white flex items-center justify-center hover:bg-teal-600 transition-all border border-white/5">
                  <Facebook size={24} />
                </a>
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 text-white flex items-center justify-center hover:bg-teal-600 transition-all border border-white/5">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] border border-white/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600 font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600 font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500 transition-all resize-none placeholder:text-slate-600 font-bold"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-teal-700 transition-all shadow-2xl shadow-teal-600/20 flex items-center justify-center gap-3 group">
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
