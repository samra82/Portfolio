'use client';

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/Animations/animations";

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
  return (
    <section
      id="services"
      className="relative w-full px-6 py-24 md:px-12 bg-gradient-to-b from-[#2C2F6C]/50 to-[#4D229D]/50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#8B4BEC]">Services</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#8B4BEC] to-[#FDBE79] mx-auto rounded-full" />
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-14 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg"
        >
          I help startups and businesses turn ideas into scalable,
          high-performing web products—built for clarity, speed, and long-term
          growth.
        </motion.p>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index * 0.1}
              className="rounded-2xl border border-[#8B4BEC]/20 bg-[#2C2F6C]/30 p-6 text-left backdrop-blur transition hover:border-[#8B4BEC]/40 hover:bg-[#4D229D]/30"
            >
              <h3 className="mb-2 text-lg font-medium text-[#F2F2F2]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#B0B0B0]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mt-16">
          <motion.a
            href="#contact"
            className="btn btn-primary text-sm sm:text-base"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Let's Build Your Product
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
