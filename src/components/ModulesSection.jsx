import React from 'react';
import { BrainCircuit, Code, Wifi, ChevronRight } from 'lucide-react';

const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-cyber-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE ARCHITECTURE</h2>
          <h3 className="text-4xl font-bold">Select Your Module</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="gradient-border p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded bg-vedic-orange/10 border border-vedic-orange/20 flex items-center justify-center text-vedic-orange mb-6">
              <BrainCircuit />
            </div>
            <h4 className="text-2xl font-bold font-tech mb-3 text-white">Mind Control</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mantra meditation is the ultimate firewall. Learn to hack your focus, silence internal noise, and reboot your mental state using sound vibration technology.
            </p>
            <a href="#" className="text-vedic-orange text-sm font-bold font-tech uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
              Initialize <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="gradient-border p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded bg-cyber-accent/10 border border-cyber-accent/20 flex items-center justify-center text-cyber-accent mb-6">
              <Code />
            </div>
            <h4 className="text-2xl font-bold font-tech mb-3 text-white">Karma Logic</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Understand the cause-and-effect algorithms that govern reality. Decode the Gita to make decisions that free you rather than bind you.
            </p>
            <a href="#" className="text-cyber-accent text-sm font-bold font-tech uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
              Initialize <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="gradient-border p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Wifi />
            </div>
            <h4 className="text-2xl font-bold font-tech mb-3 text-white">The Uplink</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bhakti Yoga is the connection protocol to the Divine. Shift from being an isolated user to an integrated part of the Universal Network.
            </p>
            <a href="#" className="text-blue-400 text-sm font-bold font-tech uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
              Initialize <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
