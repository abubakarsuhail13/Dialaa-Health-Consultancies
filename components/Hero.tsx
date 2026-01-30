
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
          className="absolute inset-0 bg-gradient-to-r from-teal-50/95 via-teal-50/70 to-transparent z-10" 
        />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern UAE Clinic" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase mb-6"
          >
            Experts in UAE Healthcare Licensing
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6"
          >
            Pioneering Your <span className="text-teal-600">Medical Success</span> in Dubai
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl"
          >
            Under the strategic leadership of <span className="font-semibold text-slate-900">Dr. Maryam Ibraheem</span>, we navigate the complexities of UAE healthcare regulations to bring your vision to life.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-center hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200"
            >
              Our Solutions
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-white text-teal-700 border-2 border-teal-600 rounded-xl font-bold text-center hover:bg-teal-50 transition-all shadow-md"
            >
              Book Consultation
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center space-x-8 text-slate-500"
          >
            <div className="group cursor-default">
              <p className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">DHA / MOH</p>
              <p className="text-sm">Licensed Consultant</p>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="group cursor-default">
              <p className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">7+ Years</p>
              <p className="text-sm">Dubai Market Expertise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
