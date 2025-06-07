'use client';

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="container fadeIn text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Boulder Mountain Tech is a forward-thinking consultancy at the intersection of strategy, automation, and innovation. We don’t just build solutions — we engineer growth engines that scale with your ambition.
      </motion.p>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Our Vision</h3>
          <p className="text-sm text-gray-400">Creating intelligent, resilient systems that elevate businesses and the people behind them.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Our Edge</h3>
          <p className="text-sm text-gray-400">We combine emerging tech with strategic clarity to solve problems before they become roadblocks.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Our Commitment</h3>
          <p className="text-sm text-gray-400">No fluff. No friction. Just results — and relentless momentum for your business goals.</p>
        </div>
      </motion.div>
    </section>
  );
}