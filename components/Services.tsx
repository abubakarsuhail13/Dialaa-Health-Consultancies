
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const licensingServices = [
    "New license application processing",
    "License activation & transfer",
    "Dataflow verification support",
    "Exam booking (Prometric/VUE)",
    "Comprehensive exam prep"
  ];

  const facilityServices = [
    "Medical Centers",
    "Dental Clinics",
    "Aesthetic Centers",
    "Hospitals",
    "Pharmacies",
    "Laboratories",
    "Medical Stores",
    "Daycare Centers"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Solutions</h2>
        <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mb-8" />
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Precision-driven services designed to accelerate your entry into the UAE healthcare market.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Licensing Card */}
        <motion.div 
          variants={itemVariants}
          className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.835 1.39 9.347 3.8 13.179a11.952 11.952 0 0013.636 0c2.41-3.832 3.8-8.344 3.8-13.179z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Professional Licensing</h3>
          <ul className="space-y-5">
            {licensingServices.map((service, idx) => (
              <li key={idx} className="flex items-center space-x-4 text-slate-600 group/item">
                <div className="w-2 h-2 bg-teal-500 rounded-full group-hover/item:scale-150 transition-transform" />
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Facility Card */}
        <motion.div 
          variants={itemVariants}
          className="group bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-800 hover:shadow-2xl transition-all duration-500 text-white"
        >
          <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8 transform group-hover:-rotate-6 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-8">Facility Establishment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {facilityServices.map((service, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-slate-300 text-sm group/sub">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover/sub:bg-white transition-colors" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-3xl p-10 text-center text-white shadow-2xl overflow-hidden relative"
      >
        <div className="relative z-10">
          <h4 className="text-3xl font-bold mb-4">Launch Your Practice Today</h4>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto text-lg font-light">
            Skip the trial and error. Leverage our proven framework for medical licensing in Dubai and throughout the UAE.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView()} 
            className="bg-white text-teal-800 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
          >
            Get a Free Quote
          </motion.button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />
      </motion.div>
    </div>
  );
};

export default Services;
