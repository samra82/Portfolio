'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Project from '@/components/sections/Project';
import Contact from '@/components/sections/Contact';
import Process from '@/components/sections/Process';
import ToolMarquee from '@/components/tool';

const Portfolio = () => {

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#2C2F6C] via-[#4D229D] to-[#8B4BEC] text-white">
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B4BEC]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FDBE79]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
          <ToolMarquee />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="portfolio">
          <Project />
        </section>

        <section id="process">
          <Process/>
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
  );
};

export default Portfolio;