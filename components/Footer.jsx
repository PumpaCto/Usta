'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-black text-gray-400 py-8 flex flex-col items-center justify-center space-y-4 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sosyal Medya Linkleri */}
      <div className="flex space-x-6">
        <a
          href="https://t.me/MiraVerseToken"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          Telegram
        </a>
        <a
          href="https://x.com/MiraVersaToken?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          Twitter
        </a>
      </div>

      {/* Footer Yazısı */}
      <p className="text-center">
        © 2025 MiraVerse Token. All Rights Reserved.
      </p>
    </motion.footer>
  );
}
