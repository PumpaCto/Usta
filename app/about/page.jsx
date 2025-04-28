'use client';

import { motion } from 'framer-motion';

const coreValues = [
  {
    title: "Vision",
    description: "To create a decentralized entertainment universe where creativity and opportunity are limitless.",
  },
  {
    title: "Mission",
    description: "Empowering communities through innovative blockchain solutions, gaming, NFTs, and anime content.",
  },
  {
    title: "Values",
    description: "Transparency, community-driven development, creativity, and unshakable trust.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center px-8 py-20 font-poppins overflow-hidden">

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About MiraVerse
      </motion.h1>

      {/* Main Text */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-4xl text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        MiraVerse Token is not just a cryptocurrency. It's a movement.  
        We are crafting a universe where decentralization meets limitless creativity — gaming, anime, NFTs, and beyond.
      </motion.p>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {coreValues.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Rocket */}
      <motion.div
        className="mt-24 w-40 h-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <img src="/rocket.png" alt="Rocket" className="w-full h-full object-contain animate-bounce-slow" />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-24 bg-gradient-to-r from-purple-600 to-blue-600 p-10 rounded-xl text-center shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-bold mb-4">Ready to join the journey?</h3>
        <p className="text-gray-300 mb-8">Become a part of the revolution and explore new galaxies of opportunity with MiraVerse.</p>
        <a
          href="https://t.me/MiraVerseToken"
          target="_blank"
          className="bg-black px-8 py-4 rounded-full text-lg font-bold hover:scale-110 transition transform inline-block"
        >
          Join the Community
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-500 mt-20 text-sm">
        © 2025 MiraVerse Token. Built for dreamers.
      </footer>
    </div>
  );
}
