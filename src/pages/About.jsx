import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe, Sparkles } from 'lucide-react';

const About = () => {
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

  const team = [
    {
      name: "Arjuna Das",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sita Devi",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Krishna Kirtan",
      role: "Community Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-cyber-bg text-gray-200">
      
      {/* About Us Section */}
      <section className="px-6 max-w-7xl mx-auto py-12">
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-vedic-orange to-cyber-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-cyber-panel p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 font-tech">The Origin</h2>
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
            className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
             <img 
              src="https://images.unsplash.com/photo-1519681393798-38e43269d877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Ancient Wisdom" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-black/50 py-24 border-y border-white/5">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2 flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-vedic-orange" /> OUR MISSION <Sparkles size={16} className="text-vedic-orange" />
            </h2>
            <h3 className="text-4xl font-bold text-white">The Prime Directive</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              To liberate consciousness from the matrix of illusion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
      </section>

      {/* Team Section */}
      <section className="px-6 max-w-7xl mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE SANGHA LEADERS</h2>
          <h3 className="text-4xl font-bold text-white">Meet The Team</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-tech">{member.name}</h4>
                  <p className="text-vedic-gold text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
