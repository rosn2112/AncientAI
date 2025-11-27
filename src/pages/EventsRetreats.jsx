import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import EventModal from '../components/EventModal';

const EventsRetreats = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "A Sacred Trip to Navadwip. Birthplace of Sri Chaitanya Mahaprabhu!",
      date: "Dec 25-Jan 02, 2025-26",
      location: "Navadwip, India",
      image: "https://krishna.org/wp-content/uploads/2002/12/ISKCON-Mayapur-Plan-620x350.jpg",
      type: "Retreat",
      price: "₹10,000"
    },
    {
      title: "Trip to Hyderabad!",
      date: "Feb 25, 2026",
      location: "Hyderbad, India",
      image: "https://temple.yatradham.org/public/Product/temple/temple_7wykbsqw_202508241506170.webp",
      type: "Workshop",
      price: "₹2,500"
    },
    {
      title: "Kirtan Under the Stars",
      date: "Dec 12, 2025",
      location: "Vrindavan, India",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Gathering",
      price: "Free"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-vedic-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">GATHERINGS</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange mb-6">
          Events & Retreats
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Join us in the physical and digital realms. Experience the energy of the Sangha in real-time.
        </p>
      </motion.div>

      <div className="grid gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-orange via-vedic-gold to-cyber-purple rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
            
            <div className="relative bg-cyber-panel rounded-2xl overflow-hidden border border-white/10">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="h-64 md:h-auto overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-panel via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>
                
                <div className="p-8 md:col-span-2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-vedic-orange/10 text-vedic-orange text-xs font-bold uppercase tracking-wider border border-vedic-orange/20">
                      {event.type}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                      <Calendar size={14} className="text-vedic-gold" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                      <MapPin size={14} className="text-cyber-purple" /> {event.location}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 font-tech group-hover:text-vedic-gold transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white font-tech">
                      {event.price}
                    </div>
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="flex items-center gap-2 text-cyber-purple font-bold uppercase tracking-widest hover:gap-4 transition-all group/btn"
                    >
                      Reserve Spot <ArrowRight size={16} className="group-hover/btn:text-vedic-orange" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <EventModal 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
        event={selectedEvent} 
      />
    </div>
  );
};

export default EventsRetreats;
