'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Page() {
  const [text, setText] = useState('');
  const slogans = [
    "Beyond Limits. Beyond Galaxies.",
    "Miraverse Token: Redefining Crypto.",
    "Your Universe of Endless Possibilities.",
    "Built for Dreamers. Powered by Blockchain.",
    "Where Crypto Meets Imagination.",
    "The Future of Decentralized Universes."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(slogans[index].slice(0, i));
      i++;
      if (i > slogans[index].length) {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden font-poppins">
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="animate-stars w-full h-full bg-repeat bg-[url('/stars.png')] opacity-20"></div>
      </div>

      {/* Logo */}
      <div className="z-10 mt-10">
        <motion.img
          src="/logo.png"
          alt="Miraverse Logo"
          className="w-32 h-32 mx-auto rounded-full shadow-lg border-2 border-blue-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      {/* Animated Slogan */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {text}
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-2xl mt-6 text-gray-300 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Dive into a new universe with Miraverse Token. Where technology meets imagination.
      </motion.p>

      {/* Buy Now Button */}
      <motion.a
        href="#"
        className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Buy Now (Coming Soon)
      </motion.a>

      {/* Animated Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-8 max-w-7xl z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
      >
        {[
          { title: 'Tokenomics', desc: 'A sustainable and rewarding economy designed to empower our holders.' },
          { title: 'Community', desc: 'Be part of a vibrant ecosystem where ideas are limitless.' },
          { title: 'Roadmap', desc: 'A bold journey mapped through innovation and expansion.' },
          { title: 'Security', desc: 'Audited contracts. Maximum transparency. Peace of mind.' },
          { title: 'NFT Integration', desc: 'Dive into exclusive NFT universes powered by Miraverse.' },
          { title: 'Gaming Metaverse', desc: 'An open-world experience for crypto explorers and adventurers.' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Roadmap */}
      <div className="relative w-full flex flex-col items-center my-32 px-4">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Roadmap</h2>
        <div className="flex flex-col space-y-10 max-w-2xl">
          {[
            { year: "Q2 2025", event: "Token Launch via Pump.fun - Listing on Solana DEXs" },
            { year: "Q3 2025", event: "Achieve 10,000 Holders Milestone - Expand Global Marketing" },
            { year: "Q4 2025", event: "Launch NFT Collection - Launch Community DAO Governance" },
            { year: "Q1 2026", event: "Release Mobile Game App on App Store and Google Play" },
            { year: "Q2 2026", event: "Start Production of Anime Series - Partnerships Announcement" },
            { year: "Q3 2026", event: "Release Open-World PC Game with Blockchain Integration" }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-2xl font-semibold">{step.year}</h4>
              <p className="text-gray-400">{step.event}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Socials */}
      <div className="flex space-x-10 my-10 z-10">
        <a href="https://t.me/MiraVerseToken" target="_blank" className="hover:scale-110 transition transform">
          <p className="text-gray-400 hover:text-blue-400">Join Telegram</p>
        </a>
        <a href="https://x.com/MiraVersaToken?s=09" target="_blank" className="hover:scale-110 transition transform">
          <p className="text-gray-400 hover:text-blue-400">Follow on Twitter</p>
        </a>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 mb-6 text-sm">
        © 2025 MiraVerse Token. All rights reserved.
      </footer>
    </div>
  );
}
