'use client';

import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section id="community" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden px-6 py-24">

      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/stars.png')] bg-repeat animate-stars z-0"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-10 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Join Our Community
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg md:text-2xl text-gray-400 mb-16 max-w-3xl text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Become part of the movement shaping the future of decentralized finance, gaming, NFTs, and beyond.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {[
          {
            title: "Exclusive Airdrops",
            desc: "Participate in community-only airdrops and giveaways as a thank you for your support.",
          },
          {
            title: "Early NFT Access",
            desc: "Get first access to rare NFTs before public releases, including special collaborations.",
          },
          {
            title: "Community Governance",
            desc: "Vote and propose on key developments and be truly part of the decision-making process.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition transform text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Join Now Button */}
      <motion.a
        href="https://t.me/MiraVerseToken"
        target="_blank"
        className="mt-16 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition transform z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
      >
        Join Now on Telegram
      </motion.a>

    </section>
  );
}
