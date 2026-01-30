
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Competencies from './components/Competencies';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-24 bg-white">
          <About />
        </section>

        <section id="services" className="py-24 bg-slate-50">
          <Services />
        </section>

        <section id="competencies" className="py-24 bg-white">
          <Competencies />
        </section>

        <section id="contact" className="py-24 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
