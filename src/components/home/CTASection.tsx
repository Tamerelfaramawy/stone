import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Transform Your Space with Premium Stone Solutions
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Whether you're renovating a home or working on a commercial project,
            our team is ready to help you select the perfect stone materials and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent border border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded transition-colors duration-300"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;