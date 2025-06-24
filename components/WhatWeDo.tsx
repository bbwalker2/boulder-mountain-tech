'use client';

import { motion } from 'framer-motion';
import { Briefcase, Brain, Code, BarChart, LayoutGrid, Users } from 'lucide-react';

const services = [
  {
    icon: <Brain size={32} />,
    title: 'Intelligent System Design',
    description: 'We build smart, scalable systems that think ahead and adapt to your operations.',
  },
  {
    icon: <BarChart size={32} />,
    title: 'Strategic Growth Consulting',
    description: 'We architect growth pathways using automation, analytics, and deep business logic.',
  },
  {
    icon: <Code size={32} />,
    title: 'Full-Stack Automation',
    description: 'From workflows to infrastructure — we automate the backbone of your business.',
  },
  {
    icon: <LayoutGrid size={32} />,
    title: 'Workflow Optimization Labs',
    description: 'We streamline operations with tailored optimization sprints that unlock speed.',
  },
  {
    icon: <Users size={32} />,
    title: 'Integrated AI Partnerships',
    description: 'AI isn’t just a tool — it’s your teammate. We embed AI where it matters most.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Brand Development Strategy',
    description: 'Your brand is your engine. We design strategies that build identity and influence.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-black text-white py-20 px-6 md:px-16 scroll-mt-24 md:scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">What We Do</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Our capabilities are engineered for forward momentum. From AI to automation, we bring clarity, performance, and strategic lift.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 text-left border border-gray-800 hover:shadow-xl hover:scale-[1.03] transition duration-300"
            >
              <div className="mb-4 text-[#facc15]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}