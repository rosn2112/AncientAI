import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Share2, Sparkles } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-vedic-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">CONTRIBUTE</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange">
          Get Involved
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The revolution of consciousness requires active participation. Here is how you can contribute to the mission.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-orange to-cyber-purple rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
          <div className="relative bg-cyber-panel p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col items-center">
            <div className="w-20 h-20 mx-auto bg-vedic-orange/10 rounded-full flex items-center justify-center mb-6 text-vedic-orange group-hover:scale-110 transition-transform duration-500 border border-vedic-orange/20">
              <Heart size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-tech">Volunteer</h3>
            <p className="text-gray-400 mb-6 flex-1">
              Offer your skills in design, coding, writing, or organizing. Help us build the infrastructure for the new age.
            </p>
            <button className="px-6 py-2 border border-vedic-orange text-vedic-orange rounded hover:bg-vedic-orange hover:text-black transition-colors font-tech font-bold uppercase tracking-widest w-full">
              Apply Now
            </button>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-gold to-vedic-orange rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
          <div className="relative bg-cyber-panel p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col items-center">
            <div className="w-20 h-20 mx-auto bg-vedic-gold/10 rounded-full flex items-center justify-center mb-6 text-vedic-gold group-hover:scale-110 transition-transform duration-500 border border-vedic-gold/20">
              <Users size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-tech">Join the Sangha</h3>
            <p className="text-gray-400 mb-6 flex-1">
              Become a member of our community. Participate in weekly satsangs, reading groups, and meditation circles.
            </p>
            <button className="px-6 py-2 border border-vedic-gold text-vedic-gold rounded hover:bg-vedic-gold hover:text-black transition-colors font-tech font-bold uppercase tracking-widest w-full">
              Join Discord
            </button>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-purple to-white rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
          <div className="relative bg-cyber-panel p-8 rounded-2xl border border-white/10 text-center h-full flex flex-col items-center">
            <div className="w-20 h-20 mx-auto bg-cyber-purple/10 rounded-full flex items-center justify-center mb-6 text-cyber-purple group-hover:scale-110 transition-transform duration-500 border border-cyber-purple/20">
              <Share2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-tech">Spread the Word</h3>
            <p className="text-gray-400 mb-6 flex-1">
              Share the wisdom. Amplify the signal. Help us reach the seekers who are waiting for this knowledge.
            </p>
            <button className="px-6 py-2 border border-cyber-purple text-cyber-purple rounded hover:bg-cyber-purple hover:text-white transition-colors font-tech font-bold uppercase tracking-widest w-full">
              Media Kit
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;
