import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-900/50">H</div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white uppercase tracking-wider">HEALTHCARE</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-teal-500 font-black">Consultancy Group</span>
              </div>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-6">
              Empowering healthcare visionaries to establish world-class medical facilities in the heart of the UAE. Your success is our regulatory mission.
            </p>
            <div className="flex space-x-5">
              {['LinkedIn', 'Instagram', 'X'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">DHA Licensing</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">MOH Approvals</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Clinic Setup</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Exam Prep</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Executive Bio</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-medium tracking-wide uppercase">
          <p>© {new Date().getFullYear()} Healthcare Consultancy Group. UAE Healthcare Specialist.</p>
          <div className="flex items-center space-x-2 text-slate-400 group">
            <span>Powered by</span>
            <a 
              href="https://www.nexaforgetech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-500 font-bold hover:text-teal-400 transition-colors flex items-center"
            >
              Nexaforge Technologies
              <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;