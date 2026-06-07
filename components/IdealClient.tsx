import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Building2, UserCircle, CheckCircle2 } from 'lucide-react';

const IdealClient: React.FC = () => {
  const clientTypes = [
    { label: "Startups", icon: Rocket },
    { label: "Small businesses", icon: Building2 },
    { label: "Entrepreneurs", icon: Users },
    { label: "Personal brands", icon: UserCircle }
  ];

  const projectTypes = [
    "Portfolio websites",
    "Landing pages",
    "Business websites",
    "Digital branding platforms"
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter">
                Ideal <span className="text-teal-500">Collaboration.</span>
              </h2>
              <p className="text-lg text-slate-400">
                I work best with forward-thinking partners who value modern design, 
                efficient workflows, and technical precision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((type, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 flex flex-col items-center text-center gap-4 group hover:border-teal-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                    <type.icon size={28} />
                  </div>
                  <span className="font-black text-white text-[10px] uppercase tracking-widest">{type.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Typical Projects</h3>
            <div className="space-y-4">
              {projectTypes.map((project, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                  <CheckCircle2 size={20} className="text-teal-500" />
                  <span className="text-slate-300 font-bold text-sm uppercase tracking-tight">{project}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-teal-600/10 border border-teal-500/20 rounded-3xl">
              <p className="text-teal-400 text-sm italic font-medium leading-relaxed">
                "Focused on creating responsive, well-structured, and modern websites while 
                using AI-supported tools to improve precision."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdealClient;
