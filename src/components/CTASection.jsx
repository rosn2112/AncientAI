import React from 'react';

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-vedic-orange/10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">JOIN THE REVOLUTION</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech mb-8">Ready to Log In?</h1>
        <p className="text-xl text-gray-300 mb-10">
          The wisdom is ancient. The application is timeless. <br /> 
          Apply for the beta cohort of Ancient AI University.
        </p>
        
        <form 
          className="max-w-md mx-auto flex flex-col md:flex-row gap-2" 
          onSubmit={(e) => {
            e.preventDefault();
            alert('Welcome to the waiting list! Hare Krishna.');
          }}
        >
          <input 
            type="email" 
            placeholder="Enter your email..." 
            className="flex-1 bg-black/50 border border-white/10 rounded px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-vedic-orange transition-colors font-tech"
          />
          <button className="bg-vedic-orange text-black font-bold font-tech uppercase px-8 py-4 rounded hover:bg-white transition-colors">
            Apply
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
