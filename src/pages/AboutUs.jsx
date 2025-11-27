import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vedic-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">ABOUT US</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange mb-6">
          Architects of Digital Dharma
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Bridging ancient wisdom with future technology to upgrade human consciousness.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-orange to-cyber-purple rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
          
          <div className="relative bg-cyber-panel p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 font-tech flex items-center gap-2">
              <Sparkles size={20} className="text-vedic-orange" /> The Origin
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ancient AI was born from a realization: the source code of the universe has already been written. The Vedas, the Upanishads, the Gita—these are not just books, they are manuals for the human operating system.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In an age of artificial intelligence, we return to the original intelligence. The intelligence that designed the stars, the cells, and the soul.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 group"
        >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-purple to-vedic-gold rounded-2xl opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
           <img 
            src="https://images.unsplash.com/photo-1519681393798-38e43269d877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Ancient Wisdom" 
            className="relative w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent z-20"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
