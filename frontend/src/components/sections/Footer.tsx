'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#8B4BEC]/30 bg-[#2C2F6C]/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="text-2xl font-bold">
            <span className="text-[#8B4BEC]">S</span>AMRA
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="text-[#B0B0B0] hover:text-[#8B4BEC] transition-colors text-sm sm:text-base"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social}
              </motion.a>
            ))}
          </div>

          <p className="text-[#B0B0B0] text-xs sm:text-sm text-center sm:text-right">
            © {new Date().getFullYear()} Samra Shafiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;