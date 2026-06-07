import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STATS, DEVELOPER_INFO } from '../constants';
import { ArrowRight, Zap, Facebook, Linkedin, Mail, ChevronDown, Plus } from 'lucide-react';

const Hero: React.FC = () => {
  const [showMoreTools, setShowMoreTools] = useState(false);

  const mainTools = [
    { name: "React", url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Flutter", url: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Node.js", url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" }
  ];

  const moreTools = [
    { name: "Redux", url: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "TypeScript", url: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Firebase", url: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-black via-black to-emerald-950/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
            {/* Left Side: Content */}
            <div className="space-y-8 z-20 order-2 lg:order-1">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
                  <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.6em] relative">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                    Crafting Digital Excellence
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl lg:text-7xl font-black text-white leading-[1.15] tracking-tight"
                >
                  Every Line of Code <br />
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Tells a Story</span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                    I build scalable, high-performance applications that solve real problems. From reactive frontends to robust backends, every solution is crafted with precision and purpose.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-teal-500/30 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-teal-400 transition-all duration-300 flex items-center gap-3 group"
                >
                  View My Work
                  <Zap size={16} className="text-teal-400 group-hover:rotate-12 transition-transform" />
                </a>
              </motion.div>



              {/* Social Links Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-6"
              >
                <div className="w-16 h-px bg-gradient-to-r from-teal-500 via-cyan-500 to-transparent"></div>
                <div className="flex gap-5">
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    href="#" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Facebook size={18} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    href="#" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    href="#contact" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Mail size={18} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    href="#" 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Zap size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative flex justify-center items-center order-1 lg:order-2 min-h-[500px]"
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-emerald-900/10 to-transparent rounded-3xl blur-2xl -z-10 opacity-80"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative w-full max-w-[380px] aspect-[3/4] group">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 via-emerald-500/20 to-transparent rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                  src={DEVELOPER_INFO.profileImage} 
                  alt={DEVELOPER_INFO.name}
                  className="w-full h-full object-cover object-top rounded-3xl shadow-2xl border border-white/20 group-hover:border-teal-400/50 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tech Stack Section - Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 z-20 mb-4 mr-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-1 items-center justify-end"
                >
                  {/* Main Tech Icons */}
                  {mainTools.map((tool, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.6, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15 }}
                      className="relative group"
                    >
                      <div className="relative w-14 h-14 bg-black border-3 border-teal-500/80 rounded-full p-2.5 flex items-center justify-center shadow-lg backdrop-blur-sm hover:border-teal-400 transition-all cursor-pointer"
                        style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 15px rgba(16, 185, 129, 0.15)' }}
                      >
                        <img src={tool.url} alt={tool.name} className="w-6 h-6 object-contain filter drop-shadow-lg" />
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -top-9 right-0 bg-black border border-teal-500/60 text-white text-xs font-semibold px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg"
                      >
                        {tool.name}
                      </motion.span>
                    </motion.div>
                  ))}

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => setShowMoreTools(!showMoreTools)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15 }}
                    className="relative group"
                  >
                    <div className="relative w-14 h-14 bg-black border-3 border-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:border-teal-400 transition-all"
                      style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 15px rgba(16, 185, 129, 0.15)' }}
                    >
                      <Plus size={20} className="text-teal-500" />
                    </div>
                    <motion.span 
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -top-9 right-0 bg-black border border-teal-500/60 text-white text-xs font-semibold px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg"
                    >
                      {showMoreTools ? "Less" : "More"}
                    </motion.span>
                  </motion.button>
                </motion.div>

                {/* Expanded Tools - Below */}
                <AnimatePresence>
                  {showMoreTools && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-1 justify-end mt-2"
                    >
                      {moreTools.map((tool, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08 }}
                          whileHover={{ scale: 1.15 }}
                          className="relative group"
                        >
                          <div className="relative w-14 h-14 bg-black border-3 border-teal-500/80 rounded-full p-2.5 flex items-center justify-center backdrop-blur-sm hover:border-teal-400 transition-all cursor-pointer"
                            style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 15px rgba(16, 185, 129, 0.15)' }}
                          >
                            <img src={tool.url} alt={tool.name} className="w-6 h-6 object-contain filter drop-shadow-lg" />
                          </div>
                          <motion.span 
                            initial={{ opacity: 0, y: 5 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="absolute -top-9 right-0 bg-black border border-teal-500/60 text-white text-xs font-semibold px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg"
                          >
                            {tool.name}
                          </motion.span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>




        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
