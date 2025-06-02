import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'th' : 'en');
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 relative">
            <Logo isDark={isScrolled || isOpen} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  text-sm font-medium transition-colors duration-300 relative
                  ${isScrolled || location.pathname !== '/' 
                    ? 'text-primary-800 hover:text-accent-600' 
                    : 'text-white hover:text-accent-300'}
                  ${isActive ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent-500' : ''}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center text-sm transition-colors duration-300
                ${isScrolled || location.pathname !== '/' 
                  ? 'text-primary-800 hover:text-accent-600' 
                  : 'text-white hover:text-accent-300'}`}
            >
              <Globe size={16} className="mr-1" />
              <span className="uppercase">{currentLanguage}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X 
                className={`w-6 h-6 ${
                  isScrolled || location.pathname !== '/' ? 'text-primary-800' : 'text-white'
                }`} 
              />
            ) : (
              <Menu 
                className={`w-6 h-6 ${
                  isScrolled || location.pathname !== '/' ? 'text-primary-800' : 'text-white'
                }`} 
              />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    text-xl font-medium transition-colors duration-300
                    ${isActive ? 'text-accent-600' : 'text-primary-800 hover:text-accent-600'}
                  `}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Language Switcher (Mobile) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-xl text-primary-800 hover:text-accent-600 transition-colors duration-300"
              >
                <Globe size={20} className="mr-2" />
                <span className="uppercase">{currentLanguage}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;