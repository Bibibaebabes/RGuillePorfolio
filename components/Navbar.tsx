import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Heart, Bookmark } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About us', href: '#identity', id: 'identity' },
    { name: 'Service', href: '#services', id: 'services' },
    { name: 'Booking', href: '#calendar', id: 'calendar' },
    { name: 'Blog', href: '#projects', id: 'projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            RG<span className="text-teal-500">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md relative">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all z-10 ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-teal-500 hover:text-white transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[10000] bg-black flex flex-col h-[100dvh] w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-black shrink-0">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                RG<span className="text-teal-500">.</span>
              </span>
              <button 
                className="p-2 text-white hover:text-teal-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Links Container */}
            <div className="flex-1 overflow-y-auto bg-black px-8 py-12 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative text-4xl font-black uppercase tracking-tighter transition-all flex items-center justify-between group py-2 ${
                    activeSection === link.id ? 'text-teal-500' : 'text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {activeSection === link.id && (
                      <motion.div 
                        layoutId="activeMobileNav"
                        className="absolute -left-4 w-1.5 h-8 bg-teal-500 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span>{link.name}</span>
                  </div>
                  <span className={`text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === link.id ? 'opacity-100' : ''}`}>
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-6 bg-white text-black text-center font-black uppercase tracking-[0.2em] text-[11px] rounded-xl hover:bg-teal-500 hover:text-white transition-all shadow-xl"
              >
                Contacts
              </motion.a>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-black shrink-0">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">RG_SYSTEM_v2.4</span>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-mono text-teal-500 uppercase tracking-widest">System Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
