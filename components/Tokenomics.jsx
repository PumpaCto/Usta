'use client';

import { motion } from 'framer-motion';

export default function Tokenomics() {
  const tokenData = [
    { label: "Total Supply", value: "1,000,000,000 MIRA" },
    { label: "Liquidity Pool", value: "60%" },
    { label: "Community Rewards", value: "20%" },
    { label: "Marketing & Partnerships", value: "10%" },
    { label: "Team & Development", value: "5%" },
    { label: "CEX Listings", value: "5%" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white py-20">
      
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tokenomics
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl max-w-4xl text-center text-gray-300 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Explore the well-structured economy powering the Miraverse ecosystem, designed for sustainability, growth, and community empowerment.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-8 z-10">
        {tokenData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-lg p-8 shadow-xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
              {item.label}
            </h3>
            <p className="text-gray-400 text-lg">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Stars Background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>
    </div>
  );
}
