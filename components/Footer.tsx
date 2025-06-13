'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
    url: 'https://www.linkedin.com/company/bouldermountaintech',
    label: 'LinkedIn',
  },
  {
    icon: <Twitter className="w-5 h-5 md:w-6 md:h-6" />,
    url: 'https://twitter.com/bouldermtech',
    label: 'Twitter',
  },
  {
    icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
    url: 'https://instagram.com/bouldermountaintech',
    label: 'Instagram',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 text-white fadeIn">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center space-y-8 text-center"
      >
        {/* Email */}
        <a
          href="mailto:info@bouldermountaintech.com"
          className="flex items-center text-sm md:text-base font-medium text-yellow-400 hover:underline hover:text-white transition"
        >
          <Mail className="mr-2 w-4 h-4" />
          info@bouldermountaintech.com
        </a>

        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map(({ icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-transform duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 pt-6">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Boulder Mountain Tech. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}