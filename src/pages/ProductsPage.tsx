import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "White Carrara Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/3773571/pexels-photo-3773571.png",
    description: "Classic Italian white marble with soft gray veining, perfect for elegant interiors.",
    features: ["Soft white background with gray veining", "Medium hardness", "Polished, honed, or brushed finish available"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding"]
  },
  {
    id: 2,
    name: "Absolute Black Granite",
    category: "Granite",
    image: "https://images.pexels.com/photos/3048528/pexels-photo-3048528.jpeg",
    description: "Deep black granite with consistent color and texture, ideal for bold, striking designs.",
    features: ["Uniform black appearance", "High density and durability", "Heat and scratch resistant"],
    applications: ["Kitchen countertops", "Commercial spaces", "Flooring", "Exterior applications"]
  },
  {
    id: 3,
    name: "Travertine Classic",
    category: "Travertine",
    image: "https://images.pexels.com/photos/6419332/pexels-photo-6419332.jpeg",
    description: "Natural beige travertine with distinctive veining patterns, bringing warmth to any space.",
    features: ["Natural beige tones", "Distinctive pitted surface", "Can be filled or unfilled"],
    applications: ["Flooring", "Wall cladding", "Patio surfaces", "Bathroom features"]
  },
  {
    id: 4,
    name: "Blue Pearl Granite",
    category: "Granite",
    image: "https://images.pexels.com/photos/220320/pexels-photo-220320.jpeg",
    description: "Elegant dark blue granite with pearl-like inclusions, creating a unique cosmic appearance.",
    features: ["Dark blue-gray base with iridescent specks", "Highly durable", "Takes a brilliant polish"],
    applications: ["Premium countertops", "Accent walls", "Flooring", "Commercial spaces"]
  },
  {
    id: 5,
    name: "Calacatta Gold Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
    description: "Luxurious white marble with dramatic gold veining, the epitome of elegance.",
    features: ["Bright white background with gold veining", "Dramatic movement in pattern", "Luxurious appearance"],
    applications: ["Feature walls", "Luxury bathrooms", "Kitchen islands", "High-end commercial spaces"]
  },
  {
    id: 6,
    name: "Desert Gold Limestone",
    category: "Limestone",
    image: "https://images.pexels.com/photos/8130274/pexels-photo-8130274.jpeg",
    description: "Warm gold limestone with unique natural patterns, perfect for creating a cozy atmosphere.",
    features: ["Warm golden tones", "Consistent texture", "Good weather resistance"],
    applications: ["Flooring", "Wall cladding", "Outdoor features", "Fireplace surrounds"]
  },
  {
    id: 7,
    name: "Emperador Dark Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg",
    description: "Rich brown marble with lighter veining, bringing warmth and sophistication to interiors.",
    features: ["Rich brown background", "Distinctive veining pattern", "Takes a beautiful polish"],
    applications: ["Feature walls", "Flooring", "Countertops", "Commercial spaces"]
  },
  {
    id: 8,
    name: "Crema Marfil Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg",
    description: "Soft beige marble with subtle veining, creating a warm and inviting atmosphere.",
    features: ["Cream to beige background", "Subtle veining", "Versatile in application"],
    applications: ["Flooring", "Wall cladding", "Countertops", "Bathroom features"]
  },
  {
    id: 9,
    name: "Baltic Brown Granite",
    category: "Granite",
    image: "https://images.pexels.com/photos/4004384/pexels-photo-4004384.jpeg",
    description: "Distinctive brown granite with black and gold mineral deposits, creating a rich, earthy appearance.",
    features: ["Brown base with black and gold minerals", "Extremely durable", "Resistant to staining"],
    applications: ["Kitchen countertops", "Commercial surfaces", "Flooring", "Exterior applications"]
  },
  {
    id: 10,
    name: "Jura Beige Limestone",
    category: "Limestone",
    image: "https://images.pexels.com/photos/5490636/pexels-photo-5490636.jpeg",
    description: "Fine-grained beige limestone with distinctive fossil patterns, ideal for a natural aesthetic.",
    features: ["Beige background with fossils", "Consistent color", "Available in various finishes"],
    applications: ["Flooring", "Wall cladding", "Exterior facades", "Countertops"]
  },
  {
    id: 11,
    name: "Statuario Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/1776582/pexels-photo-1776582.jpeg",
    description: "Premium white marble with dramatic gray veining, a timeless choice for luxury interiors.",
    features: ["Bright white background", "Bold gray veining", "Highly sought-after luxury stone"],
    applications: ["Premium countertops", "Luxury bathrooms", "Feature walls", "High-end flooring"]
  },
  {
    id: 12,
    name: "Silver Travertine",
    category: "Travertine",
    image: "https://images.pexels.com/photos/5490635/pexels-photo-5490635.jpeg",
    description: "Cool gray travertine with silver undertones, offering a contemporary natural stone option.",
    features: ["Gray to silver coloration", "Natural pitted texture", "Cool, contemporary appearance"],
    applications: ["Modern interiors", "Flooring", "Wall features", "Bathroom elements"]
  }
];

const categories = ["All", "Marble", "Granite", "Travertine", "Limestone"];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const filteredProducts = activeCategory === "All" 
    ? products
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    document.title = 'Products - Stone Style';
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mb-12">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1031443/pexels-photo-1031443.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-400 uppercase tracking-widest mb-3">Our Collection</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Premium Stone Products
            </h1>
            <p className="text-primary-100 text-lg">
              Discover our selection of high-quality stones for your project
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
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
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
                  <p className="text-primary-600 mb-4">{product.description}</p>
                  <button 
                    className="text-accent-600 hover:text-accent-700 font-medium transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600 text-lg">
                No products found in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-serif font-semibold">{selectedProduct.name}</h3>
              <button 
                onClick={closeModal}
                className="text-primary-800 hover:text-primary-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm bg-primary-100 text-primary-800 rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-primary-600">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-primary-600">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Applications</h4>
                    <ul className="list-disc pl-5 space-y-1 text-primary-600">
                      {selectedProduct.applications.map((application, index) => (
                        <li key={index}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="/contact" 
                      className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded transition-colors duration-300"
                    >
                      Request Quote
                    </a>
                    <button 
                      onClick={closeModal}
                      className="inline-block border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white px-6 py-3 rounded transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-primary-600 mb-6">
                We have access to a wide range of stone materials beyond what's showcased on our website. 
                Our team can help source specific types, colors, or patterns to match your project requirements.
              </p>
              <p className="text-primary-600 mb-8">
                Contact us today to discuss your specific needs, request samples, or schedule a consultation 
                with our stone experts.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary-800 text-white px-6 py-3 rounded hover:bg-primary-900 transition-colors duration-300"
              >
                Contact Our Team
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2562426/pexels-photo-2562426.jpeg" 
                  alt="Stone samples" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4004366/pexels-photo-4004366.jpeg" 
                  alt="Stone selection" 
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

export default ProductsPage;