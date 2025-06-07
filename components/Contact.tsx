'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="container text-center fadeIn scroll-mt-24 md:scroll-mt-32"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Whether you're ready to build, scale, or strategize — we're here for bold moves and smart growth. Let's talk.
      </motion.p>

      <motion.div
        className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-xl mx-auto border border-yellow-400/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form
          action="mailto:your@email.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition"
          />
          <input
            type="email"
            name="email"
            aria-label="Your Email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition"
          />
          <input
            type="tel"
            name="phone"
            aria-label="Phone Number"
            placeholder="Phone (optional)"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition"
          />
          <textarea
            name="message"
            aria-label="Your Message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold px-5 py-3 rounded-xl hover:brightness-110 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}