
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    subtitle: "React & Full Stack Web Apps",
    description: "Modern, responsive web applications built with React, Node.js, and scalable backends. Optimized for performance and user experience.",
    icon: Layout,
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
  {
    title: "Mobile App Development",
    subtitle: "Cross-Platform Solutions",
    description: "Native and cross-platform mobile apps using Flutter. Fast deployment, beautiful UI, and seamless functionality across devices.",
    icon: Smartphone,
    gradient: "from-cyan-500/20 to-emerald-500/20"
  },
  {
    title: "Full Stack Solutions",
    subtitle: "End-to-End Development",
    description: "Complete application architecture from frontend to database. Firebase integration, real-time systems, and scalable infrastructure.",
    icon: Code,
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-black to-black scroll-mt-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-20 items-start"
        >
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
              <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.6em]">
                <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                What I Build
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            >
              APP & WEB <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">SOLUTIONS</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              I create end-to-end solutions across web and mobile platforms. From concept to deployment, building applications that scale and perform.
            </p>
            <a 
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 group"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Gradient Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-teal-500/50 transition-all duration-500 overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

                {/* Icon Container */}
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center group-hover:border-teal-400/60 transition-all duration-500 shadow-lg"
                >
                  <service.icon size={32} className="text-teal-400 group-hover:text-cyan-400 transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-xs lg:text-sm font-bold text-teal-400 uppercase tracking-widest mb-5 group-hover:text-cyan-400 transition-colors">
                  {service.subtitle}
                </p>
                
                <p className="text-sm lg:text-base text-slate-300 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors">
                  {service.description}
                </p>

                {/* CTA Link */}
                <motion.a 
                  whileHover={{ x: 4 }}
                  href="#contact" 
                  className="inline-flex items-center gap-3 text-xs lg:text-sm font-black text-teal-400 uppercase tracking-widest hover:text-cyan-400 transition-colors group/link"
                >
                  Explore More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
