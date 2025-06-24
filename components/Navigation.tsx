'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#services' },
  { label: 'Connect', href: '#contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg'
          : 'bg-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" aria-label="Boulder Mountain Tech Home" className="flex items-center space-x-2">
          <Image
            src="/assets/BM2nowords.png"
            alt="Boulder Mountain Tech Logo"
            width={48}
            height={48}
            priority
            className="w-12 md:w-14 drop-shadow-glow"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="relative text-sm text-gray-300 hover:text-primary transition-all duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none transition-transform"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 border-t border-primary/10 text-center text-base font-medium py-6 space-y-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block text-white hover:text-primary transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}