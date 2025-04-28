'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Public Sale', value: 40 },
  { name: 'Liquidity', value: 25 },
  { name: 'Development', value: 20 },
  { name: 'Marketing', value: 10 },
  { name: 'Community Rewards', value: 5 },
];

const COLORS = ['#FFD700', '#00BFFF', '#8A2BE2', '#00FA9A', '#FF69B4'];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden px-6 py-20">
      
      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/stars.png')] bg-repeat z-0 animate-stars"></div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Tokenomics
        </motion.h2>

        {/* Chart and Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
          
          {/* Pie Chart */}
          <motion.div
            className="w-full md:w-1/2 h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={130}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Feature List */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            {[
              { title: 'Public Sale', percent: '40%', desc: 'Available for public during the token launch event.' },
              { title: 'Liquidity', percent: '25%', desc: 'Ensures stable trading experience on decentralized exchanges.' },
              { title: 'Development', percent: '20%', desc: 'For future technological advancements and platform growth.' },
              { title: 'Marketing', percent: '10%', desc: 'Brand building, partnerships, and global outreach.' },
              { title: 'Community Rewards', percent: '5%', desc: 'Airdrops, staking rewards, and loyalty bonuses.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 + idx * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-blue-400">{item.title} - {item.percent}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
