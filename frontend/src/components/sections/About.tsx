import {  fadeInUp, staggerContainer } from "@/Animations/animations";
import { motion } from "framer-motion";



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
  return (
   <motion.section
         variants={staggerContainer}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      id="about"
      className="relative w-full px-8 py-20 md:px-12 lg:px-24 bg-gradient-to-b from-[#2C2F6C]/20 to-[#4D229D]/20"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            About <span className="text-[#8B4BEC]">Me</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#8B4BEC] to-[#FDBE79] mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-14 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg"
        >
          I help founders turn ideas into fast, scalable web products that are
          ready to grow. I work at the intersection of strategy, design, and
          engineering—ensuring every product is built with clarity, performance,
          and long-term scalability in mind.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="rounded-2xl border border-[#8B4BEC]/20 bg-[#2C2F6C]/30 p-6 text-left backdrop-blur transition hover:border-[#8B4BEC]/40 hover:bg-[#4D229D]/30"
            >
              <h3 className="mb-2 text-lg font-medium text-[#F2F2F2]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#B0B0B0]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
