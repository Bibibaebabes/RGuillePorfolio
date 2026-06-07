import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { STATS } from '../constants';

const Counter = ({ value }: { value: string | number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) || 0 : value;
  const suffix = typeof value === 'string' ? value.replace(/[0-9]/g, '') : '';

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [numericValue]);

  return <span>{displayValue.toString().padStart(2, '0')}{suffix}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-teal-600/5 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                <Counter value={stat.value} />
                <span className="text-teal-500">.</span>
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
