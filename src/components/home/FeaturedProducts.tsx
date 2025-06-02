import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "White Carrara Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/3773571/pexels-photo-3773571.png",
    description: "Classic Italian white marble with soft gray veining."
  },
  {
    id: 2,
    name: "Absolute Black Granite",
    category: "Granite",
    image: "https://images.pexels.com/photos/3048528/pexels-photo-3048528.jpeg",
    description: "Deep black granite with consistent color and texture."
  },
  {
    id: 3,
    name: "Travertine Classic",
    category: "Travertine",
    image: "https://images.pexels.com/photos/6419332/pexels-photo-6419332.jpeg",
    description: "Natural beige travertine with distinctive veining patterns."
  },
  {
    id: 4,
    name: "Blue Pearl Granite",
    category: "Granite",
    image: "https://images.pexels.com/photos/220320/pexels-photo-220320.jpeg",
    description: "Elegant dark blue granite with pearl-like inclusions."
  },
  {
    id: 5,
    name: "Calacatta Gold Marble",
    category: "Marble",
    image: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
    description: "Luxurious white marble with dramatic gold veining."
  },
  {
    id: 6,
    name: "Desert Gold Limestone",
    category: "Limestone",
    image: "https://images.pexels.com/photos/8130274/pexels-photo-8130274.jpeg",
    description: "Warm gold limestone with unique natural patterns."
  }
];

const categories = ["All", "Marble", "Granite", "Travertine", "Limestone"];

const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="section-padding bg-primary-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent-600 uppercase tracking-widest mb-2">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Products</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Discover our selection of premium quality stone materials for your projects.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-primary-600 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
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
                <Link 
                  to={`/products`} 
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors duration-300"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white rounded transition-all duration-300"
          >
            View All Products <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;