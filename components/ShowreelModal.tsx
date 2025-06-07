'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';

export default function ShowreelModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:brightness-110 transition"
        >
          <PlayCircle className="w-5 h-5" />
          Play Showreel
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl mx-4 bg-black rounded-xl overflow-hidden shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video */}
              <video
                className="w-full h-auto"
                src="/media/showreel.m4v"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}