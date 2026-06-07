import React from 'react';
import { DEVELOPER_INFO } from '../constants';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal-500">
              <Terminal size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-none">RG.</span>
              <span className="text-[8px] font-black text-teal-500 uppercase tracking-[0.4em] mt-1">Architect</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-3">
            <p className="text-white font-black uppercase tracking-widest text-xs">Built by {DEVELOPER_INFO.name}</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              Web Architect using AI-Supported Development Systems
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} RG Systems. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-slate-600 hover:text-teal-500 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-teal-500 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-teal-500 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
