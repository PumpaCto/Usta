'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white p-8 overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.png')] bg-cover bg-center opacity-10"></div>

      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 z-10"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-2xl z-10 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div>
          <label className="block mb-2 text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Message</label>
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-full font-bold text-lg hover:scale-105 transition transform"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-10 mt-16 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <a href="https://t.me/MiraVerseToken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xl hover:scale-110 transition transform">
          Telegram
        </a>
        <a href="https://x.com/MiraVersaToken?s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xl hover:scale-110 transition transform">
          Twitter
        </a>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 z-0"></div>
    </section>
  );
}
