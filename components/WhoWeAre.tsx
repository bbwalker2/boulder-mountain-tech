'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Vision',
    desc: 'To be the force multiplier behind future-defining ventures — automating systems, unlocking scale, and building with intention.',
  },
  {
    title: 'Edge',
    desc: 'We engineer intelligent systems and breakthrough strategy at the intersection of design, data, and innovation. It’s not just what we build — it’s how we think.',
  },
  {
    title: 'Promise',
    desc: 'We move fast. We move smart. We move with you — executing with surgical clarity and zero fluff. Our focus is your momentum.',
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="fadeIn scroll-mt-24 md:scroll-mt-32">
      {/* Top Section Title */}
      <div className="bg-yellow-400 text-black py-16 px-6 md:px-10 text-center rounded-b-3xl shadow-xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Boulder Mountain Tech is a next-gen consulting partner for the bold. We align technology with growth strategy to help startups, scaleups, and visionaries unlock their next level — faster, smarter, and without friction.
        </motion.p>
      </div>

      {/* Feature Grid */}
      <div className="container mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {features.map(({ title, desc }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="bg-white/5 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-xl hover:scale-[1.03] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}