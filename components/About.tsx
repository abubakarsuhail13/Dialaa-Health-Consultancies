
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-72 h-72 bg-teal-100 rounded-full -z-10 blur-3xl opacity-60" 
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-50 rounded-3xl -z-10" />
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Maryam Ibraheem" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white font-bold text-2xl">Dr. Maryam Ibraheem</p>
              <p className="text-teal-300 text-sm font-medium tracking-wide">Founder & Executive Director</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Bridging Clinical Excellence with <span className="text-teal-600">Strategic Healthcare Leadership</span></h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              I am a healthcare leader with a unique dual background in clinical practice and business management. After years as an active Dentist, I pivoted to consultancy to solve the structural and regulatory hurdles facing practitioners in the UAE.
            </p>
            <p>
              Today, Dialaa Health Consultancies stands as a beacon for professionals and investors entering the Dubai medical landscape. We don't just process paperwork; we build the foundations of your future practice.
            </p>
          </div>
          
          <div className="mt-10 space-y-6">
            {[
              { title: "DHA Licensed Specialist", desc: "First-hand clinical understanding of UAE standards." },
              { title: "Licensing Strategist", desc: "Navigating DHA, MOH, and DOH with 100% compliance." },
              { title: "Business Architect", desc: "From solo clinics to multi-speciality hospitals." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start space-x-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
