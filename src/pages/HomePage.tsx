import React, { useEffect } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AboutSection from '../components/home/AboutSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stone Style - Premium Stone and Marble Solutions';
  }, []);

  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <FeaturedProducts />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;