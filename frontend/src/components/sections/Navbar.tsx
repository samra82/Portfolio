'use client';

import React, { useState, useEffect } from 'react';
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
        <a
          href="#home"
          className="text-white font-bold text-xl tracking-wide flex items-center hover:scale-105 transition-transform duration-300"
          onClick={(e) => scrollToSection(e, '#home')}
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Samra Shafiq Logo"
            className="w-8 h-8 mr-1"
          />
          <span>AMRA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${
                activeSection === item.id
                  ? 'text-white shadow-inner shadow-[#4D229D]/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={(e) => scrollToSection(e, item.href)}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4D229D] to-[#2C2F6C] text-white font-medium text-sm border border-[#8B4BEC]/40 shadow-lg shadow-[#4D229D]/20 hover:shadow-[#4D229D]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:-translate-y-1 transform group"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            <span className="flex items-center">
              Hire Me
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
            role="presentation"
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            role="presentation"
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
            role="presentation"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#2C2F6C]/90 backdrop-blur-md py-4 px-6 border-t border-[#8B4BEC]/30 max-h-[70vh] overflow-y-auto transition-all duration-300"
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
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4D229D] to-[#2C2F6C] text-white font-medium text-sm border border-[#8B4BEC]/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
