'use client';

import { motion } from 'framer-motion';

const roadmapSteps = [
  { quarter: "Q2 2025", title: "Token Launch", description: "Launch of $MIRA Token via Pump.fun on Solana network with secured liquidity." },
  { quarter: "Q3 2025", title: "Community Growth", description: "Reach 5,000+ holders, launch ambassador program, grow Twitter & Telegram." },
  { quarter: "Q4 2025", title: "NFT Series Release", description: "Drop our first anime-inspired NFT collection tied to game assets and rewards." },
  { quarter: "Q1 2026", title: "Mobile Game Launch", description: "Release Play-to-Earn mobile game on App Store and Google Play. Beta early access for holders." },
  { quarter: "Q2 2026", title: "Anime Series Start", description: "Begin production of original anime series based on the Miraverse universe." },
  { quarter: "Q3 2026", title: "PC Open World Game", description: "Launch development of AI-driven open-world crypto game for PC and Mac." },
  { quarter: "Q4 2026", title: "CEX Listings", description: "Apply for top centralized exchange (CEX) listings to boost adoption." },
  { quarter: "2027", title: "Expansion & Partnerships", description: "Global partnerships with brands, studios, and major crypto projects." },
];

export default function Roadmap() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Roadmap
      </motion.h1>

      <div className="relative w-full max-w-5xl">
        <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col space-y-16">
          {roadmapSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`relative flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-[320px]">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">
                  {step.quarter}
                </h3>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
