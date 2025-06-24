'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ['Vision', 'Tech', 'Momentum', 'Solutions'];

export default function Hero({ onPlayShowreel }: { onPlayShowreel?: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden"
    >
      {/* Gold Glow Accent */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-[#fcd34d]/10 rounded-full blur-3xl animate-pulse z-0 pointer-events-none" />

      {/* Background Fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#facc15]/5 via-black/90 to-black z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="container relative z-10 px-6">
        {/* Logo */}
        <motion.img
          src="/assets/BM2nowords.png"
          alt="Boulder Mountain Tech Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-28 md:w-40 lg:w-48 mx-auto mb-6 drop-shadow-[0_4px_20px_rgba(255,215,0,0.25)]"
        />

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Empowering{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[currentIndex]}
              className="text-[#facc15] inline-block px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {rotatingWords[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mt-6 font-medium">
          From bold ideas to built systems — we help visionaries automate, scale, and grow with confidence.
        </p>

        {/* CTA */}
        {onPlayShowreel && (
          <motion.button
            onClick={onPlayShowreel}
            whileHover={{ scale: 1.05 }}
            className="mt-10 bg-[#facc15] text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:brightness-110 transition-all duration-300"
          >
            ▶ Play Showreel
          </motion.button>
        )}
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 text-sm text-gray-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}