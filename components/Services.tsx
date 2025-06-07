'use client';

import { motion } from 'framer-motion';
import { Briefcase, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    title: 'Automation Systems',
    description:
      'We build AI-enhanced workflows that eliminate bottlenecks, reduce errors, and scale operations efficiently.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    title: 'Growth Strategy',
    description:
      'From market positioning to offer design, we engineer winning strategies that align with your business DNA.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: 'Digital Infrastructure',
    description:
      'We architect scalable, secure systems to support rapid expansion — from backend automation to front-end UX.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
    title: 'Consulting & Execution',
    description:
      'Whether advising or implementing, we serve as your hands-on partner in high-leverage transformation.',
  },
];

export default function Services() {
  return (
    <section id="services" className="container text-center fadeIn">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our services are designed to future-proof your operations and amplify your impact through strategy, automation, and deep technical expertise.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}