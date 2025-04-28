'use client';

import { motion } from 'framer-motion';

const communityItems = [
  {
    title: "Join Our Telegram",
    description: "Engage with the community, get updates first, and connect directly with the team.",
    link: "https://t.me/MiraVerseToken",
  },
  {
    title: "Follow Our Twitter",
    description: "Stay informed about the latest news, contests, and development progress.",
    link: "https://x.com/MiraVersaToken?s=09",
  },
  {
    title: "Exclusive Airdrops",
    description: "Early community members will have access to special airdrops and giveaways!",
    link: "#", // Yakında aktif olacak!
  },
  {
    title: "Community Voting",
    description: "Vote on future features, upgrades, and project directions. Your voice matters!",
    link: "#",
  },
];

export default function Community() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white py-20 px-6 overflow-hidden">
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
        Community
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl z-10">
        {communityItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            className="relative p-8 rounded-2xl bg-gray-900 hover:scale-105 hover:shadow-2xl transform transition duration-300 flex flex-col space-y-4 group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl transition duration-300"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
            <p className="text-gray-400 text-lg">{item.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-40 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 z-0"></div>
    </section>
  );
}
