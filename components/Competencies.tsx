import React from 'react';
import { motion } from 'framer-motion';

const Competencies: React.FC = () => {
  const comps = [
    {
      title: "Healthcare Strategy",
      desc: "High-level management and strategic planning for established medical facilities and startups.",
      icon: "🏢",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Clinical Care",
      desc: "Deep expertise in Clinical Dentistry and patient care standards across the UAE.",
      icon: "🩺",
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Regulatory Licensing",
      desc: "End-to-end facility licensing and DHA/MOH regulatory compliance expertise.",
      icon: "📜",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Operational Excellence",
      desc: "Optimizing healthcare operations for maximum efficiency and patient satisfaction.",
      icon: "📈",
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
        <p className="text-teal-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">What we do best</p>
        <h2 className="text-4xl font-black text-slate-900 mb-6">Core Competencies</h2>
        <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {comps.map((comp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
          >
            <div className={`w-20 h-20 ${comp.color} rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
              {comp.icon}
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-4 tracking-tight leading-tight">{comp.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">{comp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Competencies;