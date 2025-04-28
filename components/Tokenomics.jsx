'use client';

import { motion } from 'framer-motion';

const tokenomicsData = [
  { title: "Total Supply", value: "1,000,000,000 $MIRA" },
  { title: "Presale", value: "30% of supply" },
  { title: "Liquidity Pool", value: "40% of supply" },
  { title: "Marketing", value: "15% of supply" },
  { title: "Development", value: "10% of supply" },
  { title: "Airdrop & Rewards", value: "5% of supply" },
];

export default function Tokenomics() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white p-8">
      <motion.h1
        className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tokenomics
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {tokenomicsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition transform hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
              {item.title}
            </h3>
            <p className="text-lg text-gray-400">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
