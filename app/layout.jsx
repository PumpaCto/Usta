'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarsBackground from '@/components/StarsBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white font-poppins overflow-x-hidden relative">
        <StarsBackground />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
