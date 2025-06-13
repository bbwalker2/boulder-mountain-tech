'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="container text-center fadeIn scroll-mt-24 md:scroll-mt-32 py-20 md:py-28"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-400 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Whether you're launching something new, scaling fast, or reworking the foundation — this is the starting point. We're listening.
      </motion.p>

      {/* Form Card */}
      <motion.div
        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl mx-auto border border-yellow-400/10 hover:border-yellow-400/30 transition"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form
          action="#"
          method="POST"
          // Replace with endpoint or `mailto:email@example.com`
          className="space-y-6"
        >
          {/* Inputs */}
          {[
            { type: 'text', name: 'name', placeholder: 'Full Name', required: true },
            { type: 'email', name: 'email', placeholder: 'Work Email', required: true },
            { type: 'tel', name: 'phone', placeholder: 'Phone (optional)', required: false },
          ].map((field, i) => (
            <motion.input
              key={i}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              aria-label={field.placeholder}
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              whileFocus={{ scale: 1.01 }}
            />
          ))}

          {/* Message */}
          <motion.textarea
            name="message"
            aria-label="Message"
            placeholder="Tell us a bit about your project, timeline, or challenge…"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
            whileFocus={{ scale: 1.01 }}
          />

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-yellow-400 text-black font-semibold px-5 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            Send Inquiry
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}