'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ['Vision', 'Tech', 'Growth', 'Solutions'];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden fadeIn">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 via-black/90 to-black z-0 pointer-events-none" />

      {/* Logo */}
      <motion.img
        src="/assets/BM2nowords.png"
        alt="Boulder Mountain Tech Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-28 md:w-40 mb-6 z-10 drop-shadow-lg"
      />

      {/* Animated Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold z-10 relative">
        Empowering{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={rotatingWords[currentIndex]}
            className="text-primary inline-block px-2"
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
      <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mt-6 z-10">
        We deliver intelligent automation, bold strategy, and scalable innovation to elevate your business and future-proof your growth.
      </p>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 text-sm text-gray-500 animate-bounce z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}