'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getPageTitle = (pathname: string) => {
  const lastSegment = pathname.split('/').pop();
  if (!lastSegment) return '';
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse z-0" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-gray-800 px-6 md:px-10 py-4 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-yellow-400 tracking-tight">
            Our Services
          </h2>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-6 md:px-10 pt-6 text-sm text-gray-400"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-white">Services</Link>
          </li>
          <li>/</li>
          <li className="text-yellow-400">{pageTitle}</li>
        </ol>
      </nav>

      {/* Page Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="#contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Let’s Talk →
        </Link>
      </div>
    </div>
  );
}