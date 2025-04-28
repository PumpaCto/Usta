'use client';

import { motion } from 'framer-motion';

const tokenomicsData = [
  { title: "Total Supply", value: "1,000,000,000" },
  { title: "Circulating Supply", value: "750,000,000" },
  { title: "Liquidity Lock", value: "Pump.fun - Locked 1 year" },
  { title: "Team Allocation", value: "5% - Gradual Vesting" },
  { title: "Community Rewards", value: "10% - Staking & Airdrops" },
  { title: "Marketing Wallet", value: "5% - Promotions & Partnerships" },
];

export default function TokenomicsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center px-8 py-20 font-poppins overflow-hidden">

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tokenomics
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-4xl text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Our tokenomics model ensures sustainable growth, fair distribution, and incentives for the loyal community members who believe in the MiraVerse vision.
      </motion.p>

      {/* Tokenomics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
            <p className="text-gray-400 text-xl">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Circular Chart Animation */}
      <div className="relative w-full flex flex-col items-center my-32">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Supply Distribution</h2>
        <motion.div
          className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-10">
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-gray-400 mt-2">Supply Allocation Visual</p>
          </div>
        </motion.div>
      </div>

      {/* Animated Bars */}
      <div className="w-full max-w-4xl mt-20 space-y-8">
        {[
          { label: "Liquidity", percent: 80 },
          { label: "Community Rewards", percent: 10 },
          { label: "Marketing", percent: 5 },
          { label: "Team", percent: 5 },
        ].map((bar, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span>{bar.label}</span>
              <span>{bar.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-blue-400 h-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-24 bg-gradient-to-r from-purple-600 to-blue-600 p-10 rounded-xl text-center shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-bold mb-4">Secure Your Share of the Universe!</h3>
        <p className="text-gray-300 mb-8">MiraVerse Token is your gateway to the future of entertainment, ownership, and opportunity.</p>
        <a
          href="#"
          className="bg-black px-8 py-4 rounded-full text-lg font-bold hover:scale-110 transition transform inline-block"
        >
          Buy Now (Coming Soon)
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-500 mt-20 text-sm">
        © 2025 MiraVerse Token. Powered by community.
      </footer>
    </div>
  );
}
