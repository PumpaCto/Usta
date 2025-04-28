'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Tokenomics from '@/components/Tokenomics';
import Community from '@/components/Community';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';
import StarsBackground from '@/components/StarsBackground';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white font-poppins overflow-hidden">
      <StarsBackground />

      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Features />
        <Tokenomics />
        <Community />
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
}
