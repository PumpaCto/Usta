'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full z-50 bg-black bg-opacity-60 backdrop-blur-md text-white shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Miraverse Logo" className="w-10 h-10 rounded-full" />
          <span className="font-bold text-xl tracking-wider bg-gradient-to-r from-yellow-400 to-blue-400 text-transparent bg-clip-text">Miraverse</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/tokenomics" className="hover:text-blue-400 transition">Tokenomics</Link>
          <Link href="/roadmap" className="hover:text-blue-400 transition">Roadmap</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-90 space-y-6 py-6">
          <Link href="/" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/tokenomics" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Tokenomics</Link>
          <Link href="/roadmap" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Roadmap</Link>
          <Link href="/contact" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}
