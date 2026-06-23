import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#9E47FF]/30 bg-[#1F143D]/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="text-2xl font-bold">
            <span className="text-[#9E47FF]">S</span>AMRA
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Twitter', 'LinkedIn', 'GitHub' ,'Behance'].map((social) => (
              <a
                key={social}
                href=""
                className="text-[#C3BCDB] hover:text-[#9E47FF] transition-colors text-sm sm:text-base hover:-translate-y-1 duration-200 inline-block"
              >
                {social}
              </a>
            ))}
          </div>

          <p className="text-[#C3BCDB] text-xs sm:text-sm text-center sm:text-right">
            &copy; 2026 Samra Shafiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
