'use client';

import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const data = {
    labels: ['Liquidity', 'Community Rewards', 'Marketing', 'Development', 'Team'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
          '#facc15', // yellow
          '#3b82f6', // blue
          '#6366f1', // indigo
          '#a855f7', // purple
          '#f59e0b', // orange
        ],
        borderColor: '#000',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ccc',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <section id="tokenomics" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden px-6 py-24">

      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/stars.png')] bg-repeat animate-stars z-0"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-12 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Tokenomics
      </motion.h2>

      {/* Pie Chart */}
      <motion.div
        className="w-full max-w-md md:max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-lg mb-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Pie data={data} options={options} />
      </motion.div>

      {/* Token Distribution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full z-10">
        {[
          {
            title: "Liquidity",
            percentage: "40%",
            desc: "Ensuring stability and smooth trading on DEX platforms like Raydium and Orca."
          },
          {
            title: "Community Rewards",
            percentage: "25%",
            desc: "Rewarding loyal supporters through staking rewards and loyalty bonuses."
          },
          {
            title: "Marketing",
            percentage: "15%",
            desc: "Building brand awareness through campaigns, partnerships, and influencer collaborations."
          },
          {
            title: "Development",
            percentage: "10%",
            desc: "Continuous updates, smart contract audits, and feature releases."
          },
          {
            title: "Team",
            percentage: "10%",
            desc: "Dedicated core team working to expand the Miraverse ecosystem globally."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition transform text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title}</h3>
            <p className="text-4xl font-bold mb-2">{item.percentage}</p>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
