'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white p-8">
      
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Miraverse
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl max-w-4xl text-gray-300 text-center mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Welcome to <span className="text-yellow-400 font-bold">Miraverse Token</span> — a revolutionary project blending the world of decentralized finance, anime art, and gaming innovation.
        Our mission is to create a vibrant, immersive universe where cryptocurrency enthusiasts and anime lovers can thrive together. 
        Backed by NFTs, mobile games, an anime series, and open-world PC gaming, $MIRA is your gateway to infinite possibilities across the metaverse and beyond.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mt-12">
        {/* Card 1 */}
        <motion.div
          className="bg-gray-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">Our Vision</h3>
          <p className="text-gray-400">
            To lead the future of entertainment and decentralized economies by combining blockchain technology with powerful storytelling and cutting-edge gaming experiences.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-gray-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">Our Mission</h3>
          <p className="text-gray-400">
            Empower communities through decentralized access to exclusive anime content, NFT rewards, in-game ownership, and life-changing crypto opportunities.
          </p>
        </motion.div>
      </div>

      {/* Extra Star Background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>
    </div>
  );
}
