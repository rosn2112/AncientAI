import React from 'react';
import { Slack } from 'lucide-react';
import { Link } from 'react-router-dom';

const SanghaSection = () => {
  return (
    <section id="sangha" className="py-24 bg-cyber-bg relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-vedic-orange/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">THE SANGHA</h2>
          <h3 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange">Join The Network</h3>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 h-auto md:h-[500px]">
          {/* Large Item */}
          <Link to="/outreach" className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group cursor-pointer min-h-[300px] md:min-h-0 block">
            <img src="https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Outreach" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-vedic-orange font-tech uppercase text-sm tracking-wider mb-2">Community Service</div>
              <h4 className="text-3xl font-bold text-white mb-2">Outreach & Mentorship</h4>
              <p className="text-gray-300 text-sm max-w-md">Empowering the next generation through spiritual guidance and community service initiatives.</p>
            </div>
          </Link>

          {/* Small Item 1 */}
          <Link to="/events" className="rounded-xl overflow-hidden relative group cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Retreats" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="text-xl font-bold text-white">Retreats & Events</h4>
              <p className="text-xs text-gray-400">Eco-Villages & Monasteries</p>
            </div>
          </Link>

          {/* Small Item 2 */}
          <Link to="/shranyam" className="rounded-xl overflow-hidden relative group cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Shranyam" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="text-xl font-bold text-white font-cursive">Sharanyam</h4>
              <p className="text-xs text-gray-400">Our own <i>Bhajan Clubbing Initiative</i></p>
            </div>
          </Link>

          {/* Wide Short Item */}
          <Link to="/get-involved" className="md:col-span-2 rounded-xl overflow-hidden relative group cursor-pointer bg-cyber-panel border border-white/5 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-vedic-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-center p-8 relative z-10">
              <Slack className="w-10 h-10 text-vedic-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white group-hover:text-vedic-orange transition-colors">Get Involved</h4>
              <p className="text-sm text-gray-400 mt-2">Join the revolution. Volunteer, contribute, and serve.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SanghaSection;
