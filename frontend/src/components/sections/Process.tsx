'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaCompass,
  FaLayerGroup,
  FaCodeBranch,
  FaRocket,
} from 'react-icons/fa';

const items = [
  {
    title: 'Product Clarity Before Code',
    description:
      'I help founders define the real problem, target users, and success metrics early—so decisions stay aligned and development stays focused.',
    icon: FaCompass,
  },
  {
    title: 'Design With Purpose',
    description:
      'UX and UI are shaped around user behavior and business goals—not trends—so the product feels intuitive and drives action.',
    icon: FaLayerGroup,
  },
  {
    title: 'Built to Scale From Day One',
    description:
      'Clean architecture, modern tooling, and performance-first development ensure the product can grow without rewrites.',
    icon: FaCodeBranch,
  },
  {
    title: 'Launch, Learn, Iterate',
    description:
      'I ship fast, validate with real users, and iterate based on feedback—keeping momentum without reckless decisions.',
    icon: FaRocket,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative px-6 py-24 bg-gradient-to-b from-[#2C2F6C]/20 to-[#4D229D]/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How I Work
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#8B4BEC] to-[#FDBE79] mx-auto rounded-full mb-6" />
          <p className="mx-auto mt-4 max-w-2xl text-[#F2F2F2] mb-10">
            How I build products that scale
          </p>
          <p className="mx-auto max-w-2xl text-[#B0B0B0]">
            A focused, outcome-driven approach designed for founders who value
            clarity, speed, and execution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-[#8B4BEC]/20 bg-[#2C2F6C]/30 p-8 backdrop-blur transition hover:border-[#8B4BEC]/40 hover:bg-[#4D229D]/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4D229D] to-[#2C2F6C] shadow-lg shadow-[#8B4BEC]/30">
                  <Icon className="text-white text-lg" />
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#B0B0B0]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="mb-6 text-lg text-[#F2F2F2]">
            If this approach resonates, let's talk.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-[#8B4BEC]/30 bg-[#2C2F6C]/40 px-7 py-3 text-sm font-medium text-white transition hover:border-[#8B4BEC]/60 hover:bg-[#4D229D]/40"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
