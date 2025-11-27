import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { 
      name: 'The Sangha', 
      path: '/sangha',
      dropdown: [
        { name: 'Events & Retreats', path: '/events' },
        { name: 'Get Involved', path: '/get-involved' }
      ]
    },
    { 
      name: 'Our Inspiration', 
      path: '/inspiration'
    },
    { 
      name: 'RESOURCES', 
      dropdown: [
        { name: 'Free Resources', path: '/resources' },
        { name: 'FAQs', path: '/faqs' }
      ]
    }
  ];

  return (
    <nav 
      className={`fixed w-full z-40 top-0 left-0 glass border-b border-white/5 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-[#030305]/90' : ''
      }`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Cpu className="text-vedic-orange group-hover:animate-spin transition-all duration-700" />
            <div className="absolute inset-0 bg-vedic-orange blur-lg opacity-40 group-hover:opacity-80 transition-opacity"></div>
          </div>
          <span className="text-2xl font-tech font-bold tracking-widest text-white">
            ANCIENT <span className="text-vedic-orange">AI</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-tech font-semibold text-gray-400 uppercase tracking-widest items-center">
          {navLinks.map((link, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.path ? (
                <Link 
                  to={link.path} 
                  className={`flex items-center gap-1 hover:text-vedic-orange transition-colors py-2 ${link.special ? 'font-cursive text-xl text-vedic-gold' : ''}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
              ) : (
                <button className="flex items-center gap-1 hover:text-vedic-orange transition-colors py-2 cursor-default">
                  {link.name} <ChevronDown size={14} />
                </button>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-48 bg-cyber-panel border border-white/10 rounded-xl shadow-xl overflow-hidden pt-2"
                    >
                      {link.dropdown.map((dropItem, idx) => (
                        <Link 
                          key={idx} 
                          to={dropItem.path} 
                          className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA & Shranyam */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/shranyam" className="group flex flex-col items-end text-right">
            <span className="font-cursive text-2xl text-vedic-gold group-hover:text-white transition-colors">Sharanyam</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-vedic-orange transition-colors">Sound worthy of surrender</span>
          </Link>
          <button className="relative px-6 py-2 font-tech font-bold text-black bg-vedic-orange rounded hover:bg-white transition-colors duration-300 clip-corner">
            <span className="relative z-10">JOIN BETA</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-vedic-orange font-tech uppercase tracking-widest font-bold border-b border-white/5 pb-1 mb-2">
                        {link.name}
                      </div>
                      {link.dropdown.map((dropItem, idx) => (
                        <Link 
                          key={idx} 
                          to={dropItem.path} 
                          className="block pl-4 text-gray-300 hover:text-white py-1 font-tech uppercase text-sm"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="block text-gray-300 hover:text-vedic-orange font-tech uppercase tracking-widest font-bold"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="w-full py-3 bg-vedic-orange text-black font-bold font-tech uppercase mt-4 rounded">
                Join Beta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
