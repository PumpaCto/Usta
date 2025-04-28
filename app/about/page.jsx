'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex flex-col items-center justify-center px-6 py-20 space-y-10 font-poppins">
      {/* Başlık */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About MiraVerse
      </motion.h1>

      {/* Açıklama */}
      <motion.p
        className="max-w-4xl text-center text-gray-300 text-lg md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        MiraVerse Token is not just another cryptocurrency — it's a movement. We combine futuristic anime aesthetics, an active community, and powerful decentralized tools to create a universe of endless opportunities.
      </motion.p>

      {/* 3lü Kartlar */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
      >
        {/* Kart 1 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 mb-4">Our Vision</h3>
          <p className="text-gray-400">
            To create a crypto ecosystem where anime, gaming, NFTs, and blockchain collide to forge a new world of decentralized fun.
          </p>
        </motion.div>

        {/* Kart 2 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 mb-4">Our Mission</h3>
          <p className="text-gray-400">
            Empower users with ownership, creativity, and control. We break the limits of centralized systems.
          </p>
        </motion.div>

        {/* Kart 3 */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400 mb-4">Our Community</h3>
          <p className="text-gray-400">
            Passionate fans, gamers, developers, anime lovers, and crypto enthusiasts joining forces to shape the future.
          </p>
        </motion.div>
      </motion.div>

      {/* Vizyon Videosu */}
      <motion.div
        className="w-full max-w-4xl mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <video
          className="w-full rounded-xl shadow-2xl border-2 border-blue-600"
          controls
          poster="/poster-image.jpg"
        >
          <source src="/about-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

    </div>
  );
      }
