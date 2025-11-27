import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Headphones, Video, Download, Sparkles } from 'lucide-react';

const FreeResources = () => {
  const resources = [
    {
      icon: <BookOpen size={32} className="text-vedic-orange" />,
      title: "The Gita for Begineers",
      type: "E-Book",
      description: "A concise guide to the Bhagavad Gita, interpreted for the modern practitioners."
    },
    {
      icon: <Headphones size={32} className="text-vedic-gold" />,
      title: "Morning Mantra Meditation Circle",
      type: "Audio",
      description: "Join us everyday from 6:30 AM to 7:00 AM to practice mantra meditation online, it will help you to align your frequencies before you start your day."
    },
    {
      icon: <Video size={32} className="text-cyber-purple" />,
      title: "Reading Circle",
      type: "Videos",
      description: "Register with us and get access to premium unmatched reading club."
    },
    {
      icon: <Download size={32} className="text-white" />,
      title: "Vedic Wallpapers",
      type: "Digital Assets",
      description: "High-resolution 4K resources featuring the famous deities of ISKCON Bangalore and group of temples and quotes."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vedic-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vedic-orange/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">OPEN SOURCE</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange">
          Free Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Open source wisdom for the benefit of all beings. Download, share, and upgrade.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-gold via-white to-vedic-orange rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
            
            <div className="relative flex gap-6 p-6 rounded-2xl bg-cyber-panel border border-white/10 h-full">
              <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-white/10 group-hover:border-vedic-gold/30">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">{item.type}</span>
                  <button className="text-vedic-gold hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                    <Download size={18} />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-tech group-hover:text-vedic-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FreeResources;
