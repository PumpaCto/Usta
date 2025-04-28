'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden px-6">
      
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/stars.png')] bg-repeat z-0 animate-stars"></div>

      <div className="z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About MiraVerse
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          MiraVerse Token is more than just a cryptocurrency. It's a journey into a new dimension where innovation, community, and ambition converge. 
          Our mission is to create an interconnected universe where holders have access to NFT collections, decentralized games, and an entire metaverse ecosystem.
          <br /><br />
          Powered by passion and the spirit of decentralization, MiraVerse aims to redefine what it means to be part of a truly groundbreaking project. 
          Together, we will build worlds, create art, and establish a legacy.
        </motion.p>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            { title: "Innovation", description: "Always pushing the boundaries of technology and creativity." },
            { title: "Community", description: "Driven by the power of a united and visionary community." },
            { title: "Sustainability", description: "Building for the long term with solid foundations." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 + idx * 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
