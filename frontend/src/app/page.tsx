'use client';

import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false,
  loading: () => (
    <div className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="h-8 w-48 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="h-4 w-72 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => <div key={i} className="h-40 bg-white/5 rounded-xl animate-pulse" />)}
        </div>
      </div>
    </div>
  ),
});
const ToolMarquee = dynamic(() => import('@/components/tool'), {
  ssr: false,
  loading: () => <div className="h-20 bg-white/5 rounded animate-pulse mx-6" />,
});
const Services = dynamic(() => import('@/components/sections/Services'), {
  ssr: false,
  loading: () => (
    <div className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="h-8 w-48 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="h-4 w-72 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => <div key={i} className="h-48 bg-white/5 rounded-xl animate-pulse" />)}
        </div>
      </div>
    </div>
  ),
});
const Project = dynamic(() => import('@/components/sections/Project'), {
  ssr: false,
  loading: () => (
    <div className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="h-8 w-48 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="h-4 w-72 bg-white/5 rounded animate-pulse mx-auto" />
        {[1,2].map(i => <div key={i} className="h-64 bg-white/5 rounded-xl animate-pulse" />)}
      </div>
    </div>
  ),
});
const Process = dynamic(() => import('@/components/sections/Process'), {
  ssr: false,
  loading: () => (
    <div className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="h-8 w-48 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => <div key={i} className="h-32 bg-white/5 rounded-xl animate-pulse" />)}
        </div>
      </div>
    </div>
  ),
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
  loading: () => (
    <div className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="h-8 w-48 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="h-4 w-72 bg-white/5 rounded animate-pulse mx-auto" />
        <div className="space-y-4">
          {[1,2,3].map(i => <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />)}
        </div>
        <div className="h-12 w-32 bg-white/5 rounded-lg animate-pulse mx-auto" />
      </div>
    </div>
  ),
});

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0816] text-white">
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
          <Process />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
