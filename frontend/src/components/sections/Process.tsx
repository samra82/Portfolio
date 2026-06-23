'use client';

import Link from 'next/link';
import { Compass, Layers, GitBranch, Rocket } from 'lucide-react';
import { staggerDelay } from '@/Animations/animations';

const items = [
  {
    title: 'Product Clarity Before Code',
    description:
      'I help founders define the real problem, target users, and success metrics early\u2014so decisions stay aligned and development stays focused.',
    icon: Compass,
  },
  {
    title: 'Design With Purpose',
    description:
      'UX and UI are shaped around user behavior and business goals\u2014not trends\u2014so the product feels intuitive and drives action.',
    icon: Layers,
  },
  {
    title: 'Built to Scale From Day One',
    description:
      'Clean architecture, modern tooling, and performance-first development ensure the product can grow without rewrites.',
    icon: GitBranch,
  },
  {
    title: 'Launch, Learn, Iterate',
    description:
      'I ship fast, validate with real users, and iterate based on feedback\u2014keeping momentum without reckless decisions.',
    icon: Rocket,
  },
];

export default function Process() {
  const isInView = true;
  const ref = null;

  return (
    <section
      id="process"
      ref={ref}
      className="relative px-6 py-24 bg-[#1F143D]/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How I Work
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#9E47FF] to-[#D2B4FF] mx-auto rounded-full mb-6" />
          <p className="mx-auto mt-4 max-w-2xl text-[#FFFFFF] mb-10">
            How I build products that scale
          </p>
          <p className="mx-auto max-w-2xl text-[#C3BCDB]">
            A focused, outcome-driven approach designed for founders who value
            clarity, speed, and execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={staggerDelay(i)}
                className={`rounded-2xl border border-[#9E47FF]/20 bg-[#1F143D]/30 p-8 backdrop-blur transition-all duration-500 hover:border-[#9E47FF]/40 hover:bg-[#1F143D]/30 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F143D] shadow-lg shadow-[#9E47FF]/30">
                  <Icon className="text-white text-lg" />
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#C3BCDB]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="mb-6 text-lg text-[#FFFFFF]">
            If this approach resonates, let&apos;s talk.
          </p>
          <Link
            href="#contact"
            className="btn-primary"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
