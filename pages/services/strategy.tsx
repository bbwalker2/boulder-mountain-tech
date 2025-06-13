'use client';

import { motion } from 'framer-motion';
import { Compass, Layers, Brain, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Compass className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Strategic Roadmapping',
    description: 'We help you zoom out, prioritize the right things, and execute a plan that compounds.'
  },
  {
    icon: <Layers className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Ops Layering',
    description: 'We design systems that stack — from vision to implementation, no layer left unaligned.'
  },
  {
    icon: <Brain className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Adaptive Strategy',
    description: 'Business moves fast. Our frameworks help you pivot intelligently and seize opportunity early.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Knowledge Transfer',
    description: 'We build playbooks, process docs, and systems that scale your genius — without dependency.'
  },
];

export default function StrategyPage() {
  return (
    <section className="text-center fadeIn">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Strategic Execution
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We don’t just plan — we implement bold strategies built on clarity, leverage, and long-term competitive edge.
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
            {/* Animated Background */}
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