import React from 'react';
import Hero from '../components/Hero';
import GlitchSection from '../components/GlitchSection';
import ArchitectureSection from '../components/ArchitectureSection';
import SanghaSection from '../components/SanghaSection';
import CTASection from '../components/CTASection';
import InspirationSection from '../components/InspirationSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
  return (
    <>
      <Hero />
      <GlitchSection />
      <ArchitectureSection />
      <TestimonialSection />
      <InspirationSection />
      <CTASection />
    </>
  );
};

export default Home;
