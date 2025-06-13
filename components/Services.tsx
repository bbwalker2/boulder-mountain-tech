'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Cpu,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Cpu,
    title: 'Automation Systems',
    description:
      'AI-powered workflows that reduce friction, eliminate bottlenecks, and scale with intelligence.',
    href: '/services/automation',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description:
      'From offers to ops — we design the blueprint behind scalable, profitable, repeatable growth.',
    href: '/services/strategy',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Infrastructure',
    description:
      'We build systems that are secure, scalable, and ready to expand — from backend to front-end UX.',
    href: '/services/infrastructure',
  },
  {
    icon: Briefcase,
    title: 'Consulting & Execution',
    description:
      'Not just advice. We embed, activate, and execute — with zero fluff and full accountability.',
    href: '/services/consulting',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="fadeIn scroll-mt-24 md:scroll-mt-32">
      {/* Top Title Area */}
      <div className="bg-yellow-400 text-black py-16 px-6 md:px-10 text-center rounded-b-3xl shadow-xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help founders move faster with clarity and confidence — blending strategy, automation, and design into scalable systems that grow as you do.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map(({ icon: Icon, title, description, href }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
          >
            <Link href={href} className="block space-y-4">
              <div className="flex justify-center">
                <Icon className="w-10 h-10 text-yellow-400 drop-shadow-glow group-hover:text-white transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/services"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:brightness-110 hover:ring-2 hover:ring-yellow-400 transition duration-300"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
}