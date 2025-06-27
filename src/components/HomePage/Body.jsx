import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

const Body = () => {
  const { handleContactSubmit } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <AboutUs />
      <Features />
      <CTA onSubmit={handleContactSubmit} />
      <Footer />
    </div>
  );
};

export default Body;