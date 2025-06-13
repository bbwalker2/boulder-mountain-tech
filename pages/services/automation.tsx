'use client';

import { motion } from 'framer-motion';
import { Cpu, Sparkles, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Process Mapping',
    description: 'We diagram your workflows to find inefficiencies, redundancies, and untapped leverage.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'AI Assistants',
    description: 'From customer support to internal ops, we implement AI agents that never sleep.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'Workflow Engines',
    description: 'We create custom automations that trigger intelligently and scale without tech debt.',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400 group-hover:text-white transition" />,
    title: 'System Sync',
    description: 'No more siloed tools. We integrate your platforms into one seamless data stream.',
  },
];

export default function AutomationPage() {
  return (
    <section className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 fadeIn">
      <div className="container text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Automation Systems
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We build AI-enhanced workflows that eliminate bottlenecks, reduce errors, and scale operations efficiently.
        </motion.p>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition duration-500 animate-gradient bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-2xl scale-125" />
              <div className="relative z-10">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2 group-hover:text-white transition">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/#contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:brightness-110 hover:ring-2 hover:ring-yellow-400 transition duration-300"
          >
            Let’s Automate →
          </Link>
        </div>
      </div>
    </section>
  );
}