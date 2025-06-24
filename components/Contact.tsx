'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#facc15] text-black scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 px-6 md:px-16 fadeIn"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Let’s Connect
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-black/80 mb-12">
          Whether you're launching something new, scaling fast, or reworking your foundation — this is your starting point.
        </p>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            action="#"
            method="POST"
            className="space-y-6 text-left"
          >
            {[
              { type: 'text', name: 'name', placeholder: 'Full Name', required: true },
              { type: 'email', name: 'email', placeholder: 'Work Email', required: true },
              { type: 'tel', name: 'phone', placeholder: 'Phone (optional)', required: false },
            ].map((field, i) => (
              <input
                key={i}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                aria-label={field.placeholder}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            ))}

            <textarea
              name="message"
              aria-label="Message"
              placeholder="Tell us about your project, timeline, or challenge…"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-black text-yellow-400 font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}