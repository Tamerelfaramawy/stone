import React, { useState, useEffect } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Luxury Villa Kitchen",
    category: "Kitchen",
    description: "Custom marble countertops and island for a beachfront villa.",
    image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    location: "Phuket, Thailand"
  },
  {
    id: 2,
    title: "Modern Bathroom Design",
    category: "Bathroom",
    description: "Complete marble bathroom with custom shower and vanity.",
    image: "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg",
    location: "Bangkok, Thailand"
  },
  {
    id: 3,
    title: "Hotel Lobby Flooring",
    category: "Commercial",
    description: "Large-scale marble installation for a five-star hotel lobby.",
    image: "https://images.pexels.com/photos/6207823/pexels-photo-6207823.jpeg",
    location: "Chiang Mai, Thailand"
  },
  {
    id: 4,
    title: "Restaurant Feature Wall",
    category: "Commercial",
    description: "Custom stone accent wall for an upscale restaurant.",
    image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg",
    location: "Hua Hin, Thailand"
  },
  {
    id: 5,
    title: "Luxury Condo Renovation",
    category: "Living Space",
    description: "Complete stone flooring and wall cladding for a high-end condominium.",
    image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
    location: "Bangkok, Thailand"
  },
  {
    id: 6,
    title: "Outdoor Pool Deck",
    category: "Outdoor",
    description: "Travertine pool surround and deck for a private residence.",
    image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
    location: "Koh Samui, Thailand"
  },
  {
    id: 7,
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Granite reception desk and marble flooring for corporate headquarters.",
    image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg",
    location: "Bangkok, Thailand"
  },
  {
    id: 8,
    title: "Spa Retreat",
    category: "Commercial",
    description: "Natural stone elements throughout a luxury spa facility.",
    image: "https://images.pexels.com/photos/3612182/pexels-photo-3612182.jpeg",
    location: "Krabi, Thailand"
  },
  {
    id: 9,
    title: "Modern Kitchen Island",
    category: "Kitchen",
    description: "Statement kitchen island in dramatic marble with waterfall edges.",
    image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
    location: "Pattaya, Thailand"
  },
  {
    id: 10,
    title: "Luxury Master Bathroom",
    category: "Bathroom",
    description: "Full marble master bathroom with custom tub surround and shower.",
    image: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
    location: "Hua Hin, Thailand"
  },
  {
    id: 11,
    title: "Contemporary Fireplace",
    category: "Living Space",
    description: "Floor-to-ceiling stone fireplace surround for a modern residence.",
    image: "https://images.pexels.com/photos/4113266/pexels-photo-4113266.jpeg",
    location: "Chiang Rai, Thailand"
  },
  {
    id: 12,
    title: "Retail Store Design",
    category: "Commercial",
    description: "Luxury retail space featuring premium stone finishes throughout.",
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    location: "Bangkok, Thailand"
  }
];

const categories = ["All", "Kitchen", "Bathroom", "Living Space", "Commercial", "Outdoor"];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    document.title = 'Gallery - Stone Style';
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mb-12">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-400 uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-primary-100 text-lg">
              Explore our portfolio of completed stone installations and projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-800 text-white'
                    : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md relative"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-white mb-1">{item.title}</h3>
                    {item.location && (
                      <p className="text-primary-100 text-sm mb-2">{item.location}</p>
                    )}
                    <p className="text-primary-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Items Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600 text-lg">
                No gallery items found in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl relative">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent-400 z-10"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-400 z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-400 z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              
              {/* Caption */}
              <div className="bg-black bg-opacity-70 p-4 absolute bottom-0 left-0 right-0">
                <h3 className="text-xl font-serif font-semibold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-primary-100 text-sm">{selectedImage.category} | {selectedImage.location}</p>
                <p className="text-primary-100 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-100 mb-6">
                Whether you're renovating a home, designing a commercial space, or working on a custom project,
                our team is ready to bring your vision to life with the perfect stone solutions.
              </p>
              <p className="text-primary-100 mb-8">
                Contact us today to schedule a consultation or visit our showroom to see our stone selection in person.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg" 
                  alt="Stone installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg" 
                  alt="Stone craftsman" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;