"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";

const HeroClient = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple fade-in when component mounts to avoid complex animations on initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Small delay to ensure hydration is complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-8 sm:mt-16 min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
      <div className="max-w-4xl text-center relative z-10 w-full">
        {/* Role */}
        <p className={`text-xs sm:text-sm md:text-base tracking-widest text-purple-400 mb-3 sm:mb-4 font-medium uppercase transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Web Engineer
        </p>

        {/* Name with royal styling */}
        <h1 className={`font-extrabold text-white mb-4 sm:mb-6 relative inline-block drop-shadow-[0_0_10px_rgba(139,75,236,0.5)] transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-100">
            Samra Shafiq
          </span>
        </h1>

        {/* Value Proposition */}
        <p className={`text-sm sm:text-base md:text-lg text-gray-100 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I help{" "}
          <span className="font-semibold text-orange-200">
            startups and businesses
          </span>{" "}
          build fast, scalable web products focused on clarity, performance, and
          growth.
        </p>

        {/* CTAs with refined Tailwind buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 mt-4 sm:mt-0 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-purple-400/30 bg-indigo-900/40 text-white hover:bg-purple-900/40 hover:border-purple-400/60 focus:ring-purple-400/40 text-sm sm:text-base"
          >
            Hire Me
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-orange-200/40 bg-transparent text-orange-200 hover:bg-orange-200/10 hover:border-orange-200/70 focus:ring-orange-200/40 text-sm sm:text-base"
          >
            View Work
          </a>
        </div>

        {/* Social Icons */}
        <div className={`flex items-center justify-center gap-5 sm:gap-6 text-purple-400 transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <FaGithub size={20} className="sm:size-5" />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <FaLinkedinIn size={20} className="sm:size-5" />
          </a>

          <a
            href="https://behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/30"
          >
            <FaBehance size={20} className="sm:size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroClient;