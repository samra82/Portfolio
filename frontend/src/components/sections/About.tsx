'use client';

import { staggerDelay } from "@/Animations/animations";

const cards = [
  {
    title: "Founder Mindset",
    description:
      "I focus on outcomes, timelines, and growth—not just features or visuals.",
  },
  {
    title: "Idea to Execution",
    description:
      "From product thinking to UX structure and clean development—everything stays aligned.",
  },
  {
    title: "Built for Scale",
    description:
      "Every decision supports performance, maintainability, and future expansion.",
  },
  {
    title: "Clear & Reliable",
    description:
      "Direct communication, ownership of work, and no unnecessary complexity.",
  },
];

const About = () => {
  const isInView = true;
  const ref = null;
  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full px-8 py-20 md:px-12 lg:px-24 bg-[#1F143D]/20 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            About <span className="text-[#9E47FF]">Me</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#9E47FF] to-[#D2B4FF] mx-auto rounded-full" />
        </div>

        {/* Description */}
        <p className="mx-auto mb-14 max-w-3xl text-base leading-relaxed text-[#C3BCDB] md:text-lg">
          I help founders turn ideas into fast, scalable web products that are
          ready to grow. I work at the intersection of strategy, design, and
          engineering—ensuring every product is built with clarity, performance,
          and long-term scalability in mind.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              style={staggerDelay(i)}
              className={`rounded-2xl border border-[#9E47FF]/20 bg-[#1F143D]/30 p-6 text-left backdrop-blur transition-all duration-500 hover:border-[#9E47FF]/40 hover:bg-[#1F143D]/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <h3 className="mb-2 text-lg font-medium text-[#FFFFFF]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#C3BCDB]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
