import React from 'react';
import { ArrowRight, PlayCircle, Users, Book, Globe, Globe2, UniversityIcon, University } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vedic-orange/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vedic-orange/30 bg-vedic-orange/10 text-xs font-tech text-vedic-orange mb-8 tracking-widest animate-float">
          <span className="w-1.5 h-1.5 bg-vedic-orange rounded-full animate-pulse"></span>
          Definition: AI /Adhyatmik Intelligence/ (n.)
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 font-sans text-white">
          Upgrade Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vedic-orange via-vedic-light to-white text-glow">Consciousness</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The original open-source wisdom. We decode the <span className="text-white font-semibold">Bhagavad Gita</span> to help you debug your mind, compile your purpose, and connect with the Supreme.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#modules" className="group bg-vedic-orange text-black px-8 py-4 rounded font-bold font-tech tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center">
            <span>INITIATE DOWNLOAD</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="group px-8 py-4 rounded border border-white/20 hover:border-vedic-orange/50 hover:bg-white/5 text-white font-tech tracking-wide transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center">
            <PlayCircle className="w-4 h-4 text-vedic-orange" />
            <span>VIEW MANIFESTO</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 text-sm font-tech uppercase tracking-widest">
          <span>Students from</span>
          <div className="flex gap-8 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="flex items-center gap-2"><UniversityIcon className="w-4 h-4" /> IIT Bombay</span>
            <span className="flex items-center gap-2"><University className="w-4 h-4" />IIT Gandhinagar</span>
            <span className="flex items-center gap-2"><University className="w-4 h-4" />ICT Mumbai</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
