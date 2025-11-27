import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, CheckCircle2 } from 'lucide-react';

const CourseModal = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

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

            {/* Left Side: Video & Info */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <h2 className="text-3xl font-bold text-white mb-2 font-tech">{course.title}</h2>
              <p className="text-vedic-orange font-mono mb-6">₹{course.price}</p>

              {/* Video Placeholder */}
              <div className="relative w-full aspect-video bg-black/50 rounded-xl overflow-hidden mb-6 group cursor-pointer border border-white/10 shadow-inner">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-vedic-orange/90 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-xs font-mono text-white/80 bg-black/60 px-2 py-1 rounded">
                  PREVIEW MERITS
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Includes:</h4>
                <ul className="space-y-2">
                  {course.perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-black/20 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Secure Your Spot</h3>
                <p className="text-sm text-gray-400">Join the ancient wisdom network.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vedic-orange/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="Arjuna Das"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vedic-orange/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="arjuna@kurukshetra.com"
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

                <button className="w-full mt-4 bg-gradient-to-r from-vedic-orange to-orange-600 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0">
                  INITIATE REGISTRATION
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Secure payment gateway encrypted by 256-bit karma-free protocols.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
