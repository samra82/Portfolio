"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      alert('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start <span className="text-[#8B4BEC]"> the Conversation</span>
          </h2>
          <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-[#8B4BEC] to-[#FDBE79] mx-auto rounded-full" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-20"
        >
          I work with founders, startups, and brands to design and build digital products
          that are clear, scalable, and user-focused.
        </motion.p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            variants={item}
            className="flex flex-col justify-start p-10 space-y-8 rounded-3xl"
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                Have an idea worth shipping?
              </h3>
              <p className="text-gray-200 leading-relaxed mt-3">
                I don’t just design screens or write code. I help founders
                translate ideas into clear user experiences, solid architecture,
                and scalable products.
              </p>

              <ul className="space-y-3 text-sm text-gray-300 mt-4">
                <li>• UI/UX with real product context</li>
                <li>• Modern front-end using React & motion</li>
                <li>• Clear documentation and communication</li>
                <li>• Open to early collaborations and feedback</li>
              </ul>

              <p className="text-xs text-gray-400 pt-2">
                Open to projects, concept work, and early-stage ideas
              </p>
            </div>

            {/* Contact Links Vertical */}
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="mailto:samrashafiq16@gmail.com"
                className="inline-flex items-center space-x-3 text-[#8B4BEC] hover:text-[#FDBE79] transition font-medium"
              >
                <FaEnvelope size={18} /> <span>Email Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/samrashafiq16/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-[#8B4BEC] hover:text-[#FDBE79] transition font-medium"
              >
                <FaLinkedin size={18} /> <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>

{/* Right Column: Form */}
<motion.form
  variants={item}
  onSubmit={handleSubmit}
  className="space-y-6 p-10 rounded-3xl
             shadow-2xl border border-white/20
             w-full backdrop-blur-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5
             ring-1 ring-white/20 hover:ring-white/30
             transition-all duration-300"
>
  {/* Inputs */}
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    className="w-full rounded-2xl bg-white/10 border border-white/20
               px-5 py-4 text-sm text-white placeholder-gray-300
               focus:outline-none focus:ring-2 focus:ring-[#8B4BEC]/50
               focus:border-transparent backdrop-blur-sm transition duration-300"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    className="w-full rounded-2xl bg-white/10 border border-white/20
               px-5 py-4 text-sm text-white placeholder-gray-300
               focus:outline-none focus:ring-2 focus:ring-[#8B4BEC]/50
               focus:border-transparent backdrop-blur-sm transition duration-300"
  />

  <input
    type="text"
    name="company"
    placeholder="Startup / Idea (optional)"
    value={formData.company}
    onChange={handleChange}
    className="w-full rounded-2xl bg-white/10 border border-white/20
               px-5 py-4 text-sm text-white placeholder-gray-300
               focus:outline-none focus:ring-2 focus:ring-[#8B4BEC]/50
               focus:border-transparent backdrop-blur-sm transition duration-300"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Tell me about your idea or what you’re trying to build…"
    value={formData.message}
    onChange={handleChange}
    className="w-full rounded-2xl bg-white/10 border border-white/20
               px-5 py-4 text-sm text-white placeholder-gray-300
               focus:outline-none focus:ring-2 focus:ring-[#8B4BEC]/50
               focus:border-transparent backdrop-blur-sm transition duration-300"
  />

  {/* Glassmorphic Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full btn-primary py-4 font-semibold rounded-2xl transition-opacity duration-300 disabled:opacity-70"
  >
    {isSubmitting ? 'Sending...' : "Let's Talk"}
  </button>

  {submitMessage && (
    <div className={`text-center ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'} py-2`}>
      {submitMessage}
    </div>
  )}

  <p className="text-xs text-center text-gray-400 pt-2">
    Honest conversations · Learning mindset · Long-term thinking
  </p>
</motion.form>

        </div>
      </motion.div>
    </section>
  );
}
