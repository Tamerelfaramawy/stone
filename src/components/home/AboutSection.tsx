import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  "Premium quality stone materials",
  "Expert craftsmanship and installation",
  "Custom design solutions",
  "Sustainable sourcing practices",
];

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg" 
                alt="Craftsman working on marble" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-12 -right-6 lg:-right-12 w-32 h-32 bg-accent-500 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 lg:-bottom-12 -left-6 lg:-left-12 w-48 h-48 bg-primary-900 rounded-lg z-0"></div>
          </div>
          
          {/* Content Side */}
          <div>
            <p className="text-accent-600 uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Crafting Excellence in Stone Since 1995
            </h2>
            <p className="text-primary-600 mb-6">
              Stone Style has been at the forefront of the premium stone industry for over 25 years. 
              We are dedicated to sourcing the finest marble, granite, and natural stone materials 
              from around the world to create stunning architectural and design elements.
            </p>
            <p className="text-primary-600 mb-8">
              Our team of skilled craftsmen combines traditional techniques with modern technology 
              to transform raw stone into beautiful, functional pieces that enhance any space.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-accent-600 mt-1 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              to="/about" 
              className="inline-flex items-center bg-primary-800 text-white px-6 py-3 rounded hover:bg-primary-900 transition-colors duration-300"
            >
              Learn More About Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;