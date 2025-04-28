'use client';

import { motion } from 'framer-motion';

const tokenomicsData = [
  { title: 'Total Supply', value: '1,000,000,000', description: 'Fixed supply to ensure scarcity and value growth.' },
  { title: 'Liquidity Pool', value: '50%', description: 'Half of total supply locked into liquidity for stability.' },
  { title: 'Community Rewards', value: '20%', description: 'Incentives for holders, contributors, and promoters.' },
  { title: 'Marketing Fund', value: '15%', description: 'Budget for campaigns, partnerships, and global outreach.' },
  { title: 'Development Reserve', value: '10%', description: 'Allocated for platform development and scaling.' },
  { title: 'Team Allocation', value: '5%', description: 'Locked for core team with vesting schedule.' },
];

export default function TokenomicsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden flex flex-col items-center p-8">
      {/* Page Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mt-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Tokenomics
      </motion.h1>

      {/* Short Description */}
      <motion.p
        className="text-lg md:text-2xl mt-4 text-gray-300 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover how Miraverse Token fuels the decentralized universe through a robust and fair token economy.
      </motion.p>

      {/* Tokenomics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-6xl w-full">
        {tokenomicsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-lg shadow-xl p-8 hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 mb-4">{item.title}</h3>
            <p className="text-2xl text-blue-300 mb-2">{item.value}</p>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Supply Chart Simulation (Fake for design) */}
      <div className="relative mt-32 max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
          Supply Breakdown
        </h2>
        <motion.div
          className="w-64 h-64 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          1B Tokens
        </motion.div>

        <div className="grid grid-cols-2 gap-6 mt-10 text-center">
          {[
            { label: 'Liquidity', percent: '50%' },
            { label: 'Community', percent: '20%' },
            { label: 'Marketing', percent: '15%' },
            { label: 'Development', percent: '10%' },
            { label: 'Team', percent: '5%' },
          ].map((part, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-blue-400">{part.label}</h4>
              <p className="text-gray-300">{part.percent}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 mt-20 mb-6 text-sm">
        © 2025 MiraVerse Token. All rights reserved.
      </footer>
    </div>
  );
}
