import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Sparkles, Music, Home, BookOpen } from 'lucide-react';
import EventModal from '../components/EventModal';

const Outreach = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sections = [
    {
      title: "Upcoming Festive Celebrations",
      icon: <Sparkles className="w-6 h-6 text-vedic-orange" />,
      description: "Celebrate the divine festivals with grandeur and devotion.",
      events: [
        {
          title: "Janmashtami Grand Celebration",
          date: "Aug 15, 2025",
          location: "Main Temple Hall",
          image: "https://images.unsplash.com/photo-1629217325539-75618b056525?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          type: "Festival",
          price: "Free Entry"
        },
        {
          title: "Radhastami Feast",
          date: "Sep 02, 2025",
          location: "Community Center",
          image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          type: "Festival",
          price: "Free Entry"
        }
      ]
    },
    {
      title: "Sunday Soulful Sessions",
      icon: <Music className="w-6 h-6 text-vedic-gold" />,
      description: "Recharge your week with kirtan, wisdom, and prasadam.",
      events: [
        {
          title: "Weekly Satsang & Kirtan",
          date: "Every Sunday, 5:00 PM",
          location: "Temple Auditorium",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          type: "Weekly Gathering",
          price: "Free"
        }
      ]
    },
    {
      title: "Folk Residency",
      icon: <Home className="w-6 h-6 text-cyber-purple" />,
      description: "Experience the monastic life. Live, serve, and grow with the community.",
      events: [
        {
          title: "Weekend Monk Experience",
          date: "Monthly (1st Weekend)",
          location: "Ashram Block A",
          image: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          type: "Residency",
          price: "Donation Based"
        }
      ]
    },
    {
      title: "Ancient AI Workshops",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      description: "Deep dive into Vedic wisdom and modern application.",
      events: [
        {
          title: "Gita Decoded: Chapter 1-6",
          date: "Oct 10, 2025",
          location: "Seminar Hall / Online",
          image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          type: "Workshop",
          price: "₹500"
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-vedic-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">COMMUNITY SERVICE</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange mb-6">
          Outreach & Mentorship
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Extending the wisdom of the Vedas to every corner of society. Join our initiatives to learn, serve, and grow.
        </p>
      </motion.div>

      <div className="space-y-24">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="relative">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <div className="p-3 rounded-full bg-white/5 border border-white/10">
                {section.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white font-tech">{section.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{section.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.events.map((event, eventIdx) => (
                <motion.div
                  key={eventIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: eventIdx * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-orange/50 to-cyber-purple/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative bg-cyber-panel rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-panel via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                        {event.type}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 font-tech group-hover:text-vedic-orange transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="mt-auto space-y-2 pt-4">
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                          <Calendar size={12} className="text-vedic-gold" /> {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                          <MapPin size={12} className="text-cyber-purple" /> {event.location}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                         <span className="text-white font-bold">{event.price}</span>
                         <span className="text-vedic-orange text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                           Details <ArrowRight size={12} />
                         </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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

export default Outreach;
