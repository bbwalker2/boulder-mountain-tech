'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Lightbulb, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Positioning Strategy',
    description: 'We craft market positions that stand out, attract ideal clients, and build brand momentum.',
  },
  {
    icon: <Target className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Go-To-Market Clarity',
    description: 'Launch smarter with frameworks for messaging, timing, and traction.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Offer Design',
    description: 'We shape irresistible offers — priced to scale, built to close, and easy to deliver.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Revenue Systems',
    description: 'Build lead-to-cash engines that drive sustainable, scalable growth month after month.',
  },
];

export default function GrowthPage() {
  return (
    <section className="text-center fadeIn">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Growth Strategy
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        From market positioning to scalable revenue systems — we engineer growth engines that fit your business DNA.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition duration-500 animate-gradient bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-2xl scale-125" />

            <div className="relative z-10">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 group-hover:text-white transition">{feature.title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-200 transition">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}