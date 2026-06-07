import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Phone } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';

const Collaboration: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Every great website begins <br className="hidden md:block" /> with a <span className="text-teal-500">strong idea.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Let's collaborate to build modern, efficient, and well-designed digital experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <a 
                href="#calendar"
                className="px-10 py-5 bg-teal-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-teal-700 transition-all shadow-2xl shadow-teal-600/20 flex items-center gap-3"
              >
                <Send size={18} />
                Start a Project
              </a>
              <a 
                href="#contact"
                className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <MessageSquare size={18} />
                Send a Message
              </a>
              <a 
                href={`https://wa.me/${DEVELOPER_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] text-white rounded-full font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all flex items-center gap-3"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
