'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

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

  // Track scroll position with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    }, {
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0,
    });

    sectionElements.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
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
    <nav aria-label="Main navigation" className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl  border-b border-[#D2B4FF]/10 shadow-lg shadow-[#0B0816]/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
      <Link
  href="#home" 
  className="text-white font-bold text-xl tracking-wide flex items-center hover:scale-105 transition-transform duration-300" 
  onClick={(e) => scrollToSection(e, '#home')} 
  aria-label="Go to homepage"
>
  <span className="font-inter">Samra</span>
</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                activeSection === item.id
                  ? 'text-[#D2B4FF] font-semibold bg-[#D2B4FF]/5'
                  : 'text-[#C3BCDB] hover:text-white hover:bg-[#D2B4FF]/10'
              }`}
              onClick={(e) => scrollToSection(e, item.href)}
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}

          {/* CTA Button — The single solid violet exception */}
          <a
            href="#contact"
            className="btn-primary ml-4 shadow-lg shadow-[#9E47FF]/10 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            <span className="flex items-center">
              Let&apos;s talk
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
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#0B0816]/95 backdrop-blur-md py-4 px-6 border-t border-[#D2B4FF]/10 min-h-[calc(100vh-4rem)] z-40 overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-5 py-3.5 rounded-full text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-[#D2B4FF] bg-[#D2B4FF]/10'
                    : 'text-[#C3BCDB] hover:text-white hover:bg-white/5'
                }`}
                onClick={(e) => scrollToSection(e, item.href)}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="btn-primary mt-4 text-center shadow-md transition-all duration-300 hover:scale-[1.02]"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;