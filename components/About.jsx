'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "A New Universe",
    description: "Miraverse Token opens the door to a revolutionary decentralized world. Where dreams, innovation, and community collide beyond imagination."
  },
  {
    title: "Designed for Growth",
    description: "Our tokenomics ensure sustainable development, rewards for holders, and support for ongoing expansions into NFTs, gaming, and anime."
  },
  {
    title: "Driven by Community",
    description: "We believe in collective power. Miraverse is a token where the community shapes the roadmap, votes on proposals, and leads the future."
  },
  {
    title: "Next-Gen Gaming",
    description: "We're building a universe of games—mobile, PC, and open-world metaverses—integrated directly with Mira token utility and rewards."
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white p-8 overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.png')] bg-cover bg-center opacity-10"></div>

      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 z-10"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About MiraVerse
      </motion.h2>

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start md:space-x-16 max-w-7xl z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Left side - Big Paragraph */}
        <div className="md:w-1/2 space-y-6 text-gray-300 text-lg">
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Welcome to MiraVerse, the decentralized frontier where cosmic dreams become blockchain realities. 
            Fueled by community ambition and innovation, MiraVerse Token embarks on a journey beyond the known universe.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            More than just a token, MiraVerse is an expanding ecosystem—where NFTs, anime storytelling, and groundbreaking crypto gaming projects converge.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
          >
            Join the movement. Shape the cosmos. Write the next legendary chapter in decentralized history.
          </motion.p>
        </div>

        {/* Right side - Features */}
        <div className="mt-12 md:mt-0 md:w-1/2 grid grid-cols-1 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 z-0"></div>
    </section>
  );
}
