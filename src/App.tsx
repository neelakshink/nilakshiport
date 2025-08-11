import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if available
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-midnight-navy text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-deep-space bg-cyber-grid bg-grid opacity-20 z-0"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-teal rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-electric-orange rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-cyber-blue rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-plasma-purple rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-midnight-navy via-deep-space to-midnight-navy opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Blog />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;