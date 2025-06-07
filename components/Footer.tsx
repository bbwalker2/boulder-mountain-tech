'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/company/bouldermountaintech',
    label: 'LinkedIn',
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://twitter.com/bouldermtech',
    label: 'Twitter',
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://instagram.com/bouldermountaintech',
    label: 'Instagram',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 text-center fadeIn bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-4"
      >
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Boulder Mountain Tech. All rights reserved.
        </p>

        <div className="flex space-x-5">
          {socialLinks.map(({ icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href="mailto:info@bouldermountaintech.com"
          className="flex items-center text-sm text-yellow-400 hover:underline transition"
        >
          <Mail className="mr-1 w-4 h-4" />
          info@bouldermountaintech.com
        </a>
      </motion.div>
    </footer>
  );
}