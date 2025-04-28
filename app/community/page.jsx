'use client';

import { motion } from 'framer-motion';

const communityHighlights = [
  {
    title: 'Engaged Community',
    description: 'Our holders actively participate in decision-making and marketing strategies.',
  },
  {
    title: 'Community Events',
    description: 'From meme contests to NFT giveaways, we make sure the fun never stops.',
  },
  {
    title: 'Voting System',
    description: 'Have a say in important project milestones through decentralized voting.',
  },
  {
    title: 'Exclusive Benefits',
    description: 'Early access to new features, private groups, and much more for loyal supporters.',
  },
];

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center px-8 py-20 font-poppins overflow-hidden">

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Community
      </motion.h1>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl z-10">
        {communityHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{highlight.title}</h2>
            <p className="text-gray-400">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Globe */}
      <motion.div
        className="mt-24 w-60 h-60"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <img src="/globe.png" alt="Community Globe" className="rounded-full shadow-2xl animate-spin-slow" />
      </motion.div>

      {/* Join Now Section */}
      <motion.div
        className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-xl text-center shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-bold mb-4">Become Part of the Miraverse Family</h3>
        <p className="text-gray-300 mb-8">Connect, collaborate, and rise with us as we build the future of decentralized entertainment.</p>
        <a
          href="https://t.me/MiraVerseToken"
          target="_blank"
          className="bg-black px-8 py-4 rounded-full text-lg font-bold hover:scale-110 transition transform inline-block"
        >
          Join Telegram
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-500 mt-20 text-sm">
        © 2025 MiraVerse Token. Powered by Community.
      </footer>
    </div>
  );
}
