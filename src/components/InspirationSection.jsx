import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const InspirationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vedic-gold/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-vedic-gold via-vedic-orange to-cyber-purple rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://www.atmatattva.com/wp-content/uploads/2015/04/prabhupada-01.jpg" 
                  alt="HDG A.C. Bhaktivedanta Swami Prabhupada" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-vedic-gold font-mono text-sm mb-1">Founder-Acharya</p>
                  <h3 className="text-2xl font-bold text-white font-tech">HDG A.C. Bhaktivedanta Swami Prabhupada</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2 uppercase">
              The Source Code
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ancient Wisdom,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vedic-gold to-vedic-orange">
                Timeless Inspiration
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Everything we build is inspired by the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He brought the timeless Vedic knowledge to the Western world, providing the ultimate manual for the human machine.
            </p>
            
            <Link 
              to="/inspiration"
              className="inline-flex items-center gap-2 text-vedic-gold font-bold font-tech uppercase tracking-wider hover:gap-4 transition-all group"
            >
              Read Our Story <ArrowRight className="group-hover:text-vedic-orange" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
