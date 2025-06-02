import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Stone Style';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mb-12">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3773571/pexels-photo-3773571.png')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-400 uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-primary-100 text-lg">
              Dedicated to excellence in stone craftsmanship since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our Journey Through Time
              </h2>
              <p className="text-primary-600 mb-6">
                Stone Style was founded in 1995 by master craftsman Somchai Pattana with a vision to bring the finest 
                stone materials and craftsmanship to Thailand. What began as a small workshop has grown into one of 
                the country's premier stone suppliers and fabricators.
              </p>
              <p className="text-primary-600 mb-6">
                Over the past 25+ years, we have had the privilege of working on some of Thailand's most prestigious 
                projects, from luxury residences and five-star hotels to commercial landmarks and heritage restorations.
              </p>
              <p className="text-primary-600">
                Today, Stone Style continues to be at the forefront of stone innovation, combining traditional craftsmanship 
                with cutting-edge technology to deliver exceptional results for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6758774/pexels-photo-6758774.jpeg" 
                  alt="Stone craftsman working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7061664/pexels-photo-7061664.jpeg" 
                  alt="Stone workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg" 
                  alt="Finished stone product" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent-600 uppercase tracking-widest mb-2">Our Core Values</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              What We Stand For
            </h2>
            <p className="text-primary-600">
              Our values guide everything we do, from sourcing materials to completing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                description: "We source only the finest stone materials and maintain rigorous quality standards throughout our process.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24\" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                )
              },
              {
                title: "Craftsmanship",
                description: "Our artisans combine generations of traditional stoneworking knowledge with modern techniques.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                )
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible sourcing and production practices.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously explore new technologies and techniques to enhance our stone products.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: "Client Focus",
                description: "We prioritize understanding our clients' needs and exceeding their expectations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "We operate with honesty and transparency in all our business dealings.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-6 text-accent-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent-600 uppercase tracking-widest mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Meet The Experts
            </h2>
            <p className="text-primary-600">
              Our team combines decades of experience with a passion for excellence in stone craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Somchai Pattana",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
                bio: "With over 30 years in the stone industry, Somchai founded Stone Style with a vision for exceptional quality."
              },
              {
                name: "Malee Singtong",
                position: "Design Director",
                image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg",
                bio: "Malee leads our design team with her innovative approach and eye for combining aesthetics with functionality."
              },
              {
                name: "Ananda Ratana",
                position: "Production Manager",
                image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
                bio: "Ananda oversees all aspects of stone fabrication, ensuring precision and quality in every piece."
              },
              {
                name: "Supachai Wong",
                position: "Installation Supervisor",
                image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg",
                bio: "Supachai leads our installation teams, bringing over 15 years of experience to ensure perfect results."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 relative group">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                <p className="text-accent-600 mb-3">{member.position}</p>
                <p className="text-primary-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-100 mb-8">
              Contact our team today to discuss your stone and marble needs. We're here to bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded transition-colors duration-300"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;