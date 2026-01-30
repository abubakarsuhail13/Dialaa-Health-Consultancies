
import React from 'react';
import { motion } from 'framer-motion';

const Competencies: React.FC = () => {
  const comps = [
    {
      title: "Strategy & Governance",
      desc: "Robust frameworks for facility growth and long-term sustainability.",
      icon: "📊",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Clinical Insight",
      desc: "Direct dentist perspective ensuring the highest patient care standards.",
      icon: "🦷",
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Compliance Mastery",
      desc: "Unrivaled expertise in DHA, MOH, and DOH regulatory navigation.",
      icon: "⚖️",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Operation Logic",
      desc: "Optimized patient flows and staff management systems.",
      icon: "⚙️",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
        <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {comps.map((comp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors group"
          >
            <div className={`w-16 h-16 ${comp.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:shadow-lg transition-all`}>
              {comp.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{comp.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{comp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Competencies;
