'use client';

import { motion } from 'framer-motion';

const roadmap = [
  { quarter: "Q2 2025", milestone: "Token Launch on Solana via Pump.fun" },
  { quarter: "Q3 2025", milestone: "Reach 1000+ Holders and Strong Community" },
  { quarter: "Q4 2025", milestone: "NFT Collection Launch & Exchange Listings" },
  { quarter: "Q1 2026", milestone: "Mobile Game Beta Release" },
  { quarter: "Q2 2026", milestone: "Start Anime Series Production" },
  { quarter: "Q3 2026", milestone: "Launch Open World PC Crypto Game" },
];

export default function Roadmap() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-blue-950 to-black flex flex-col items-center py-20 text-white overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.png')] bg-cover bg-center opacity-10"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Roadmap
      </motion.h2>

      {/* Timeline */}
      <div className="relative flex flex-col space-y-20 max-w-4xl z-10">
        {roadmap.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center group"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Circle */}
            <div className="w-6 h-6 bg-yellow-400 rounded-full z-20 border-4 border-blue-500"></div>

            {/* Line */}
            {index !== roadmap.length - 1 && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-yellow-400 to-blue-400 opacity-60"></div>
            )}

            {/* Card */}
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 mt-6 w-full hover:scale-105 transform transition duration-300 group-hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">
                {step.quarter}
              </h3>
              <p className="text-gray-300 text-lg">{step.milestone}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute -bottom-20 left-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 z-0"></div>
    </section>
  );
}
