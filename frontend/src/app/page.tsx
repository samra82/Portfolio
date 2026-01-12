'use client';

import React, { lazy, Suspense } from 'react';

// Lazy load heavy components
const Hero = lazy(() => import('@/components/sections/Hero'));
const About = lazy(() => import('@/components/sections/About'));
const Services = lazy(() => import('@/components/sections/Services'));
const Project = lazy(() => import('@/components/sections/Project'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const Process = lazy(() => import('@/components/sections/Process'));
const ToolMarquee = lazy(() => import('@/components/tool'));

// Loading skeleton for better UX
const ComponentLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-500 text-white">
      {/* Main Content - remove animated background elements for better performance */}
      <main>
        <section id="home">
          <Suspense fallback={<ComponentLoader />}>
            <Hero />
          </Suspense>
        </section>

        <section id="about">
          <Suspense fallback={<ComponentLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-20 bg-gradient-to-r from-indigo-900/10 to-purple-900/10"></div>}>
            <ToolMarquee />
          </Suspense>
        </section>

        <section id="services">
          <Suspense fallback={<ComponentLoader />}>
            <Services />
          </Suspense>
        </section>

        <section id="portfolio">
          <Suspense fallback={<ComponentLoader />}>
            <Project />
          </Suspense>
        </section>

        <section id="process">
          <Suspense fallback={<ComponentLoader />}>
            <Process/>
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<ComponentLoader />}>
            <Contact />
          </Suspense>
        </section>

      </main>
    </div>
  );
};

export default Portfolio;