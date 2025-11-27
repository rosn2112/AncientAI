import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Random Mataji",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Ancient AI has completely transformed my design process. The wisdom integration is subtle yet profound. It's not just a tool; it's a companion for creative evolution."
  },
  {
    id: 2,
    name: "Random Prabhuji",
    role: "Software Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "I was skeptical at first, but the 'Karma Logic' module helped me debug my own decision-making patterns. The clarity I've gained is invaluable for my high-stakes work."
  },
  {
    id: 3,
    name: "Random Prabhuji",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Finally, a platform that bridges the gap between technology and spirituality without diluting either. The community support in the Sangha is unmatched."
  },
  {
    id: 4,
    name: "Random Prabhuji",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The 'Beyond Birth and Death' course gave me a perspective on legacy that I couldn't find in any business school. It's deep, practical, and visually stunning."
  },
  {
    id: 5,
    name: "Random Mataji",
    role: "Digital Artist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The aesthetic of Ancient AI alone is inspiring. But the content? It's like upgrading your soul's operating system. Highly recommended for any creator."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-cyber-bg relative overflow-hidden">
      {/* Vibrant Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vedic-orange/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vedic-gold/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">COMMUNITY VOICES</h2>
          <h3 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-vedic-orange">
            Trancendental Testimonials!
          </h3>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-vedic-orange hover:text-black hover:border-vedic-orange transition-all backdrop-blur-sm group"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-vedic-orange hover:text-black hover:border-vedic-orange transition-all backdrop-blur-sm group"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-3xl mx-auto"
              >
                {/* Image & Quote Icon */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-r from-vedic-orange via-vedic-gold to-cyber-purple">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover rounded-full border-4 border-black"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-vedic-orange rounded-full flex items-center justify-center text-black shadow-lg">
                    <Quote size={18} fill="currentColor" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 text-vedic-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-white font-tech tracking-wide">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-vedic-orange font-mono text-sm mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-vedic-orange' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
