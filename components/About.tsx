import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-600/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
              alt="Lead Consultant" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-10">
              <p className="text-white font-black text-3xl tracking-tight">[Founder Name]</p>
              <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] mt-2">Founder & Executive Director</p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 top-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block z-20"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Expert Status</p>
                <p className="text-sm font-bold text-slate-800">Licensed Consultant</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">Expert Profile</div>
          <h2 className="text-4xl font-black text-slate-900 mb-8 leading-[1.15]">
            Bridging the Gap Between <br/>
            <span className="text-teal-600">Clinical Practice & Strategic Business</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
            <p>
              Our leadership brings a unique dual perspective to healthcare. With deep roots in clinical practice, we've transitioned into high-level consultancy to address the complex regulatory environment in the UAE.
            </p>
            <p>
              We provide expert guidance for healthcare professionals and international investors seeking to establish a premier medical presence in the region. Our methodology combines rigorous clinical standards with data-driven strategic planning.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Clinical Standards", desc: "Expert knowledge of UAE medical practice protocols." },
              { title: "Business Strategy", desc: "Specializing in health-tech and facility optimization." },
              { title: "Regulatory Mastery", desc: "Smooth navigation of DHA/MOH/DOH licensing." },
              { title: "Operational Power", desc: "Driving efficiency in healthcare delivery systems." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;