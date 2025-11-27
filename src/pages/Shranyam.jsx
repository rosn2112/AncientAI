import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Mic2 } from 'lucide-react';

const Shranyam = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE KIRTAN</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-vedic-orange via-pink-500 to-cyber-purple mb-6">
          Shranyam
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The Kirtan Community. Where sound becomes spirit and the mantra becomes the medicine.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-20 border border-white/10"
      >
        <img 
          src="https://images.unsplash.com/photo-1526746326276-d366398ac753?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Kirtan Gathering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-tech">Chant and Be Happy</h2>
          <p className="text-gray-300 max-w-2xl text-lg">
            Kirtan is the yoga of sound. It is an ancient call-and-response chanting practice that opens the heart and quiets the mind.
          </p>
        </div>
      </motion.div>

      {/* Philosophy Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-cyber-panel p-8 rounded-2xl border border-white/10">
          <Music className="text-vedic-orange mb-6" size={40} />
          <h3 className="text-2xl font-bold text-white mb-4 font-tech">Nada Brahma</h3>
          <p className="text-gray-400">
            "Sound is God." The universe was created through vibration. By tuning into the right frequencies, we align ourselves with the cosmic flow.
          </p>
        </div>
        <div className="bg-cyber-panel p-8 rounded-2xl border border-white/10">
          <Heart className="text-pink-500 mb-6" size={40} />
          <h3 className="text-2xl font-bold text-white mb-4 font-tech">Bhakti Yoga</h3>
          <p className="text-gray-400">
            The path of devotion. Kirtan is an expression of love for the divine. It transforms emotions into spiritual ecstasy.
          </p>
        </div>
        <div className="bg-cyber-panel p-8 rounded-2xl border border-white/10">
          <Mic2 className="text-cyber-purple mb-6" size={40} />
          <h3 className="text-2xl font-bold text-white mb-4 font-tech">Collective Energy</h3>
          <p className="text-gray-400">
            When we chant together, the energy is amplified. The collective vibration creates a powerful field of healing and transformation.
          </p>
        </div>
      </div>

      {/* Join Section */}
      <div className="text-center bg-gradient-to-r from-vedic-orange/10 to-cyber-purple/10 p-12 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-6 font-tech">Join the Next Circle</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We host weekly Kirtan sessions every Friday evening. Open to all. No experience necessary. Just bring your voice and your heart.
        </p>
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-vedic-gold transition-colors font-tech uppercase tracking-widest">
          View Schedule
        </button>
      </div>
    </div>
  );
};

export default Shranyam;
