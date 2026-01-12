"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { container, item, fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/Animations/animations";

const Hero = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="margin-mb min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2F6C]/20 to-[#4D229D]/20"></div>
      <motion.div
        className="max-w-4xl text-center relative z-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Role */}
        <motion.p
          variants={item}
          className="text-xs sm:text-sm md:text-base tracking-widest text-[#8B4BEC] mb-3 sm:mb-4 font-medium uppercase"
        >
          Web Engineer 
        </motion.p>

        {/* Name with royal styling */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 relative inline-block drop-shadow-[0_0_10px_rgba(139,75,236,0.5)]"
        >
          <span className="relative z-10  bg-clip-text ">
            Samra Shafiq
          </span>
          <span className="absolute inset-0 text-[#8B4BEC] opacity-20 -z-10 blur-lg">
            Samra Shafiq
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg text-[#F2F2F2] max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
        >
          I help{" "}
          <span className="font-semibold text-[#FDBE79]">
            startups and businesses
          </span>{" "}
          build fast, scalable web products focused on clarity, performance, and
          growth.
        </motion.p>

        {/* CTAs with refined Tailwind buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 mt-4 sm:mt-0"
        >
          <motion.a
            href="#contact"
            className="btn btn-primary text-sm sm:text-base"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Hire Me
          </motion.a>

          <motion.a
            href="#portfolio"
            className="btn btn-secondary text-sm sm:text-base"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-5 sm:gap-6 text-[#8B4BEC]"
        >
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-[#8B4BEC]/30"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} className="sm:size-5" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-[#8B4BEC]/30"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn size={20} className="sm:size-5" />
          </motion.a>

          <motion.a
            href="https://behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-[#8B4BEC]/30"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBehance size={20} className="sm:size-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
