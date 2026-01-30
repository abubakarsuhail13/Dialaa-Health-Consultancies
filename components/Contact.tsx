
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 leading-tight">Let's Build Your <span className="text-teal-400">Legacy</span></h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
            Ready to secure your medical license or open your next clinic? Our expert consultants are just a message away from helping you succeed in the UAE.
          </p>
          
          <div className="space-y-10">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-6 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-teal-500 text-xs uppercase font-black tracking-widest mb-1">Direct Call</p>
                <a href="tel:0557198392" className="text-2xl font-bold tracking-tight">055 719 8392</a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-6 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-teal-500 text-xs uppercase font-black tracking-widest mb-1">Location</p>
                <p className="text-2xl font-bold tracking-tight">Dubai, UAE</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-2xl text-slate-900 relative"
        >
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-wider">Full Name</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 transition-all font-medium" placeholder="Dr. Sarah Johnson" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-wider">Email</label>
                <input type="email" className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 transition-all font-medium" placeholder="sarah@medical.ae" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider">Consultation Type</label>
              <select className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 transition-all font-medium appearance-none">
                <option>DHA Licensing Application</option>
                <option>New Clinic Establishment</option>
                <option>Multi-speciality Hospital Setup</option>
                <option>License Transfer/Activation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-wider">Project Details</label>
              <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border-b-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 transition-all font-medium resize-none" placeholder="Tell us about your healthcare vision..."></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-teal-600 text-white font-bold py-5 rounded-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-100"
            >
              Request Strategic Session
            </motion.button>
          </form>
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
