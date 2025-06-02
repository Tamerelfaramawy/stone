import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-4 md:px-6">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo isDark={false} />
            <p className="text-primary-300 text-sm max-w-xs">
              Premium marble, granite and stone solutions for architectural and interior design projects across Thailand.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-600 flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-600 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-300">
                  123 Marble Road, Sathorn, Bangkok 10120, Thailand
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent-400 mr-3 flex-shrink-0" />
                <a href="tel:+6622345678" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  +66 2 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@stonestyle.co.th" className="text-primary-300 hover:text-accent-400 transition-colors duration-300">
                  info@stonestyle.co.th
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-300">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 9am - 2pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-primary-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates and promotions.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-primary-800 text-white placeholder-primary-400 border border-primary-700 rounded focus:outline-none focus:border-accent-500 transition-colors duration-300" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} Stone Style. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;