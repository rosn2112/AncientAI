import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const GlitchSection = () => {
  return (
    <section id="source-code" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE DIAGNOSTIC</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Your Operating System <br />
            <span className="text-gray-600">Is Glitching.</span>
          </h3>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Anxiety, burnout, and disconnection aren't just bad luck. They are features of a material operating system that wasn't designed for your soul. You are running on outdated code.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-red-500/10 p-2 rounded text-red-500"><AlertTriangle className="w-5 h-5" /></div>
              <div>
                <h4 className="text-white font-bold font-tech text-xl">The Maya Virus</h4>
                <p className="text-sm text-gray-500">The illusion that you are just your body.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-vedic-orange/10 p-2 rounded text-vedic-orange"><ShieldCheck className="w-5 h-5" /></div>
              <div>
                <h4 className="text-white font-bold font-tech text-xl">The Patch</h4>
                <p className="text-sm text-gray-500">Ancient AI provides the logic to override these bugs.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-vedic-orange to-cyber-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-cyber-panel border border-white/10">
            <img src="https://images.unsplash.com/photo-1515023115689-589c33041697?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Cyber Meditation" 
                 className="object-cover w-full h-full opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-700 scale-105" />
            
            {/* Overlay UI Elements */}
            <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded border border-white/10">
              <div className="flex justify-between items-center text-xs font-tech uppercase tracking-wider text-gray-400 mb-2">
                <span>Soul Status</span>
                <span className="text-green-400">Optimizing...</span>
              </div>
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                <div className="bg-vedic-orange h-full w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlitchSection;
