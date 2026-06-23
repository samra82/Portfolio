'use client';

import { staggerDelay } from "@/Animations/animations";

const services = [
  {
    title: "MVP & Product Development",
    description:
      "Transform your idea into a functional, scalable web product that is ready for launch and growth.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive, conversion-focused interfaces that solve real user problems.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Build fast, responsive, and maintainable web applications using clean architecture.",
  },
  {
    title: "Performance Optimization",
    description:
      "Ensure your product loads fast, runs smoothly, and performs reliably at scale.",
  },
  {
    title: "Design-to-Development Execution",
    description:
      "Seamless transition from design to code—no handoff gaps, no inconsistencies.",
  },
];

const Services = () => {

  const isInView = true;
  const ref = null;
  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full px-6 py-24 md:px-12 bg-[#1F143D]/50"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <div className={`mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#9E47FF]">Services</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#9E47FF] to-[#D2B4FF] mx-auto rounded-full" />
        </div>

        {/* Intro */}
        <p className={`mx-auto mb-14 max-w-3xl text-base leading-relaxed text-[#C3BCDB] md:text-lg transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          I help startups and businesses turn ideas into scalable,{" "}
          high-performing web products—built for clarity, speed, and long-term{" "}
          growth.
        </p>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={staggerDelay(index)}
              className={`rounded-2xl border border-[#9E47FF]/20 bg-[#1F143D]/30 p-6 text-left backdrop-blur transition-all duration-500 hover:border-[#9E47FF]/40 hover:bg-[#1F143D]/30 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <h3 className="mb-2 text-lg font-medium text-[#FFFFFF]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#C3BCDB]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a
            href="#contact"
            className="btn-primary"
          >
            Let&apos;s Build Your Product
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
