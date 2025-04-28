'use client';

import { motion } from 'framer-motion';

const roadmapSteps = [
  {
    quarter: 'Q2 2025',
    title: 'Token Launch',
    description: 'Miraverse Token officially launches via Pump.fun, setting the stage for an exciting future.',
  },
  {
    quarter: 'Q3 2025',
    title: 'Community Growth',
    description: 'We aim to grow our community to over 1,000 holders with social campaigns and collaborations.',
  },
  {
    quarter: 'Q4 2025',
    title: 'NFT Collection Launch',
    description: 'Introduction of the first exclusive NFT series for early supporters and holders.',
  },
  {
    quarter: 'Q1 2026',
    title: 'Mobile Game Release',
    description: 'Release of a Play-to-Earn mobile game on App Store and Google Play.',
  },
  {
    quarter: 'Q2 2026',
    title: 'Anime Series Announcement',
    description: 'Teasing the upcoming crypto-inspired anime series, a first in the blockchain industry.',
  },
  {
    quarter: 'Q3 2026',
    title: 'Open World Crypto Game',
    description: 'Beginning development on an open-world PC game integrated with Miraverse Token economy.',
  },
];

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center px-8 py-20 font-poppins">
      
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Roadmap
      </motion.h1>

      {/* Timeline Line */}
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-0 w-1 bg-gradient-to-b from-yellow-400 to-blue-500 h-full"></div>

        {/* Steps */}
        <div className="flex flex-col space-y-16 mt-8 max-w-3xl z-10">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="bg-gray-900 rounded-xl p-8 shadow-lg max-w-md w-full">
                <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{step.quarter}</h3>
                <h4 className="text-xl font-semibold mb-2 text-blue-300">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rocket Animation */}
      <motion.div
        className="mt-20"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img src="/rocket.png" alt="Rocket to the Moon" className="w-40 h-40 animate-bounce" />
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-500 mt-20 text-sm">
        © 2025 MiraVerse Token. Charting the Future.
      </footer>
    </div>
  );
}
