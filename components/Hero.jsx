'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const slogans = [
    "Beyond Limits. Beyond Galaxies.",
    "Miraverse Token: Redefining Crypto.",
    "Your Universe of Endless Possibilities."
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
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
    }, 80);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-full h-full bg-repeat opacity-20 bg-[url('/stars.png')] animate-stars"></div>
      </div>

      {/* Content */}
      <div className="z-10 mt-16 px-6">
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Miraverse Logo"
          className="w-32 h-32 mx-auto rounded-full shadow-xl border-2 border-blue-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Animated Slogan */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {text}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Explore the limitless universe of decentralized opportunities with Miraverse Token.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Buy Now (Coming Soon)
        </motion.a>
      </div>

    </section>
  );
}
