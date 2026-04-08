import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-blue/50 transition-all duration-300">
            <BookOpen size={20} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-purple">
            SKTC
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-navy hover:text-brand-blue font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-blue after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium shadow-md hover:shadow-xl hover:shadow-brand-purple/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Enroll Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-navy p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full border-t border-white/20 px-6 py-4 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-navy font-medium py-2 border-b border-white/40"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
