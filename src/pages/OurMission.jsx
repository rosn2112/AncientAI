import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe } from 'lucide-react';

const OurMission = () => {
  const missions = [
    {
      icon: <Target className="text-vedic-orange" size={32} />,
      title: "Decide Your Destiny",
      description: "To empower individuals to take control of their karmic algorithms and rewrite their future."
    },
    {
      icon: <Zap className="text-vedic-gold" size={32} />,
      title: "Upgrade Consciousness",
      description: "To provide the tools and knowledge necessary for a complete system reboot of the human mind."
    },
    {
      icon: <Globe className="text-cyber-purple" size={32} />,
      title: "Universal Connection",
      description: "To build a global network of awakened souls, united by the pursuit of absolute truth."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE MISSION</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-vedic-gold via-white to-cyber-purple mb-6">
          System Reboot
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Our prime directive is simple: To liberate consciousness from the matrix of illusion.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {missions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-cyber-panel p-8 rounded-2xl border border-white/5 hover:border-vedic-gold/30 transition-colors group"
          >
            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-tech">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
