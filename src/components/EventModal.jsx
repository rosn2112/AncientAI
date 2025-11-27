import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const EventModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image & Info */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <h2 className="text-3xl font-bold text-white mb-2 font-tech leading-tight">{event.title}</h2>
              <p className="text-vedic-orange font-mono mb-6 text-xl">{event.price}</p>

              {/* Image */}
              <div className="relative w-full aspect-video bg-black/50 rounded-xl overflow-hidden mb-6 border border-white/10 shadow-inner">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 space-y-2">
                   <div className="flex items-center gap-2 text-white text-sm font-mono">
                      <Calendar size={14} className="text-vedic-gold" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm font-mono">
                      <MapPin size={14} className="text-cyber-purple" /> {event.location}
                    </div>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">What to Expect:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-vedic-orange shrink-0" />
                    <span>Immersive spiritual experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-vedic-orange shrink-0" />
                    <span>Community connection</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-vedic-orange shrink-0" />
                    <span>Guided sessions by experts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-black/20 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Express Interest</h3>
                <p className="text-sm text-gray-400">Reserve your spot for this gathering.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vedic-orange/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vedic-orange/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vedic-orange/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-vedic-orange to-orange-600 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 font-tech tracking-wider">
                  CONFIRM REGISTRATION
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  We will contact you with further details and payment instructions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
