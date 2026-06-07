
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CalendarEmbed from './components/CalendarEmbed';
import IdentityModule from './components/IdentityModule';
import Philosophy from './components/Philosophy';
import AIFramework from './components/AIFramework';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import IdealClient from './components/IdealClient';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'identity', 'services', 'calendar', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Reduced offset for better precision with scroll-mt

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if the scroll position is within the section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <CalendarEmbed />
        <IdentityModule />
        <Philosophy />
        <AIFramework />
        <Skills />
        <Projects />
        <Process />
        <IdealClient />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
