'use client';

import { motion } from 'framer-motion';

const roadmap = [
  {
    quarter: 'Q2 2025',
    title: 'Token Launch',
    desc: 'Launch on Solana via Pump.fun with aggressive marketing push.',
  },
  {
    quarter: 'Q3 2025',
    title: '1000+ Holders',
    desc: 'Community expansion, strategic partnerships, and first airdrop campaign.',
  },
  {
    quarter: 'Q4 2025',
    title: 'NFT Launch',
    desc: 'Release our exclusive NFT collection rewarding early supporters.',
  },
  {
    quarter: 'Q1 2026',
    title: 'Mobile Game Release',
    desc: 'Launch our P2E mobile game on App Store and Google Play.',
  },
  {
    quarter: 'Q2 2026',
    title: 'Anime Series Announcement',
    desc: 'Reveal and kickstart production for the animated crypto series.',
  },
  {
    quarter: 'Q3 2026',
    title: 'Open World Game Development',
    desc: 'Start building the most immersive crypto open-world PC experience.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden px-6 py-24">
      
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/stars.png')] bg-repeat z-0 animate-stars"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-16 z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Roadmap
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl z-10">

        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-blue-500 transform -translate-x-1/2 animate-pulse"></div>

        {/* Roadmap Steps */}
        <div className="flex flex-col space-y-20">
          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="w-full md:w-1/2 p-6">
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{step.quarter}</h3>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
