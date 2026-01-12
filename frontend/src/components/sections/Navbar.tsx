'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Projects', href: '#portfolio' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#2C2F6C]/30 border-b border-[#8B4BEC]/20 shadow-lg shadow-[#2C2F6C]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-white font-bold text-xl tracking-wide flex items-center"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="S"
            className="w-8 h-8 mr-1"
          />
          <span>AMRA</span>
       
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white  shadow-inner shadow-[#4D229D]/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={(e) => scrollToSection(e, item.href)}
              whileHover={{ y: -1 }}
            >
              {item.label}
            </motion.a>
          ))}

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4D229D] to-[#2C2F6C] text-white font-medium text-sm border border-[#8B4BEC]/40 shadow-lg shadow-[#4D229D]/20 hover:shadow-[#4D229D]/40 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(77, 34, 157, 0.4)' }}
            whileTap={{ y: 0 }}
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-white transition-all duration-300"
          />
          <motion.div
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white transition-all duration-300"
          />
          <motion.div
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-white transition-all duration-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#2C2F6C]/90 backdrop-blur-md py-4 px-6 border-t border-[#8B4BEC]/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-[#8B4BEC]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4D229D] to-[#2C2F6C] text-white font-medium text-sm border border-[#8B4BEC]/30 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
