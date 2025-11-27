import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const OurInspiration = () => {
  return (
    <div className="pt-24 min-h-screen bg-cyber-bg text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">OUR INSPIRATION</h2>
          <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange mb-4">
            Timeless Wisdom
          </h1>
          <div className="h-1 w-24 bg-vedic-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-vedic-gold/20 blur-3xl rounded-full"></div>
            <div className="relative gradient-border p-1 rounded-2xl">
              <img 
                src="https://www.atmatattva.com/wp-content/uploads/2015/04/prabhupada-01.jpg" 
                alt="HDG A.C. Bhaktivedanta Swami Prabhupada" 
                className="w-full rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-white font-tech">HDG A.C. Bhaktivedanta Swami Prabhupada</h2>
              <p className="text-vedic-orange font-mono text-sm">Founder-Acharya of the Worldwide Hare Krishna Movement</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-cyber-panel border border-white/10 p-8 rounded-2xl relative">
              <Quote className="absolute top-4 left-4 text-vedic-orange/20 w-12 h-12" />
              <p className="text-lg italic text-gray-300 leading-relaxed pl-6 relative z-10">
                "Human life is meant for inquiring about the Absolute Truth, and that Absolute Truth is realized in three phases: Brahman, Paramatma, and Bhagavan."
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Ancient AI is deeply inspired by the timeless wisdom brought to the West by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. His teachings form the bedrock of our philosophy—bridging the gap between ancient Vedic science and modern technological advancement.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Prabhupada taught that real intelligence is not just processing data, but understanding the source of all data—the Supreme Consciousness. Our mission is to use technology not to distract, but to direct human consciousness back to its source.
            </p>

            <div className="pt-6">
              <a 
                href="https://vedabase.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-vedic-orange text-black font-bold font-tech uppercase rounded hover:bg-white transition-colors"
              >
                Read His Books
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurInspiration;
