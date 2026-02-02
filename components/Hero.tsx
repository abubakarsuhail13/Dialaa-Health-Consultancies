import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" 
        />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
          alt="Dubai Medical Landscape" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="w-12 h-0.5 bg-teal-600 rounded-full"></span>
            <span className="text-teal-600 text-xs font-black tracking-[0.25em] uppercase">Healthcare Specialist & Licensing Consultant</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
          >
            Expert Guidance for your <span className="text-teal-600">UAE Medical Presence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl font-medium"
          >
            Led by a team of <span className="text-slate-900 font-bold underline decoration-teal-500/30">DHA Licensed Specialists</span>, we bridge clinical practice with high-level business management to ensure your facility's success.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:bg-teal-700 transition-all shadow-2xl shadow-teal-600/30"
            >
              Start Conversation
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#about" 
              className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:border-teal-600 transition-all shadow-lg"
            >
              Executive Bio
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex items-center space-x-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900">DHA</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Licensed Practitioners</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-900">UAE</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Healthcare Specialists</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;