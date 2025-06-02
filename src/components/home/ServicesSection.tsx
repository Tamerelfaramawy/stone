import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Design Consultation",
    description: "Our experts work with you to select the perfect stone materials that match your design vision and functional requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
  },
  {
    id: 2,
    title: "Custom Fabrication",
    description: "Transform raw stone into custom countertops, flooring, wall cladding, and architectural elements with precision cutting and finishing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    image: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg"
  },
  {
    id: 3,
    title: "Professional Installation",
    description: "Our skilled installation teams ensure perfect fit and finish for all stone products, from complex commercial projects to residential renovations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    image: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg"
  },
  {
    id: 4,
    title: "Maintenance & Restoration",
    description: "Extend the life and beauty of your stone surfaces with our professional maintenance, cleaning, and restoration services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    image: "https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg"
  }
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-400 uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-primary-300 max-w-2xl mx-auto">
            We provide comprehensive stone solutions from design to installation and maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService.id === service.id 
                    ? 'bg-primary-800 border-l-4 border-accent-500' 
                    : 'bg-primary-800/50 hover:bg-primary-800/80'
                }`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-full mr-4 ${
                    activeService.id === service.id ? 'bg-accent-600' : 'bg-primary-700'
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                    <p className="text-primary-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <a 
              href="/contact" 
              className="inline-flex items-center mt-4 text-accent-400 hover:text-accent-300 transition-colors duration-300"
            >
              Contact us about our services <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Service Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-serif font-semibold mb-2">{activeService.title}</h3>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-white transition-colors duration-300 mt-4"
              >
                Request This Service <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;