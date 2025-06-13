'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PageLoader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 1600); // Trimmed to 0.6s + 1s

    return () => clearTimeout(timeout);
  }, [onFinish]);

  const letters = 'Boulder Mountain Tech'.split('');

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      exit={{ opacity: 0 }}
    >
      {/* Glow Animation */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl animate-ping"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />

      {/* Animated Brand Name */}
      <div className="relative z-10 flex space-x-1 text-white text-xl md:text-2xl font-semibold tracking-widest">
        {letters.map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.03 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}