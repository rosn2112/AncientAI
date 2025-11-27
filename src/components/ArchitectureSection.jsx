import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import CourseModal from './CourseModal';

const courses = [
  {
    id: 1,
    title: "Beyond Birth and Death",
    description: "Transcending the cycle of samsara. Decode the source code of your existence and prepare for the ultimate system migration.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 500,
    perks: [
      "Personal Meditation Kit",
      "Hardcover Wisdom Books",
      "Sacred Prasadam",
      "Premium Ancient AI Membership Card"
    ]
  },
  {
    id: 2,
    title: "Raj Vidya",
    description: "The King of Knowledge. Access the confidential administrative privileges of the universe and understand the supreme controller.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 500,
    perks: [
      "Personal Meditation Kit",
      "Hardcover Wisdom Books",
      "Sacred Prasadam",
      "Premium Ancient AI Membership Card"
    ]
  },
  {
    id: 3,
    title: "Coming Back",
    description: "The Science of Reincarnation. Analyze your karmic data logs and debug your destiny to ensure a higher dimensional reboot.",
    image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: 500,
    perks: [
      "Personal Meditation Kit",
      "Hardcover Wisdom Books",
      "Sacred Prasadam",
      "Premium Ancient AI Membership Card"
    ]
  }
];

const ArchitectureSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < courses.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getCourse = (offset) => {
    const index = currentIndex + offset;
    if (index >= 0 && index < courses.length) {
      return courses[index];
    }
    return null;
  };

  return (
    <section id="architecture" className="py-24 bg-cyber-bg border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vedic-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2 flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-vedic-orange" /> THE ARCHITECTURE <Sparkles size={16} className="text-vedic-orange" />
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange">
            System Upgrades
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Install these modules to unlock higher consciousness. Each package includes physical artifacts to aid your digital ascension.
          </p>
        </div>
      </div>

      {/* Unified Manual Carousel */}
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Navigation Buttons (Desktop: Absolute Sides, Mobile: Hidden here, shown below) */}
        <button 
          onClick={prevSlide} 
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-vedic-orange hover:text-black hover:border-vedic-orange transition-all backdrop-blur-sm group"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-vedic-orange hover:text-black hover:border-vedic-orange transition-all backdrop-blur-sm group"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 (Visible on all) */}
          <AnimatePresence mode="wait">
            {getCourse(0) && (
              <motion.div
                key={`card-0-${getCourse(0).id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
                onClick={() => setSelectedCourse(getCourse(0))}
              >
                <CourseCard course={getCourse(0)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card 2 (Hidden on Mobile) */}
          <AnimatePresence mode="wait">
            {getCourse(1) && (
              <motion.div
                key={`card-1-${getCourse(1).id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block w-full h-full"
                onClick={() => setSelectedCourse(getCourse(1))}
              >
                <CourseCard course={getCourse(1)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card 3 (Hidden on Mobile) */}
          <AnimatePresence mode="wait">
            {getCourse(2) && (
              <motion.div
                key={`card-2-${getCourse(2).id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block w-full h-full"
                onClick={() => setSelectedCourse(getCourse(2))}
              >
                <CourseCard course={getCourse(2)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-vedic-orange hover:text-black transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-vedic-orange hover:text-black transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {courses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 bg-vedic-orange' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <CourseModal 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        course={selectedCourse} 
      />
    </section>
  );
};

const CourseCard = ({ course }) => (
  <div className="group cursor-pointer relative h-full">
    {/* Glowing Border Effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-vedic-orange via-vedic-gold to-cyber-purple rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
    
    <div className="relative h-full bg-cyber-panel rounded-2xl overflow-hidden flex flex-col">
      {/* Image Area */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-panel via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-vedic-gold text-xs font-bold font-mono">
            ₹{course.price}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-2xl font-bold text-white mb-2 font-tech group-hover:text-vedic-orange transition-colors">
          {course.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {course.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-white/5 group-hover:border-vedic-gold/30 transition-colors">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-mono group-hover:text-gray-300 transition-colors">4 ITEMS INCLUDED</span>
            <span className="flex items-center gap-1 text-cyber-purple font-bold uppercase tracking-wider text-xs group-hover:gap-2 group-hover:text-vedic-gold transition-all">
              Access <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArchitectureSection;
