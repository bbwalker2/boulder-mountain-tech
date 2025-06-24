'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans overflow-x-hidden transition-colors duration-500 ease-in-out">
      {/* 🔝 Global Navigation */}
      <Navigation />

      {/* 📄 Page Content */}
      <main className="pt-24 px-4 md:px-8 fadeIn animate-fadeIn">
        {children}
      </main>

      {/* 🔚 Global Footer */}
      <Footer />
    </div>
  );
}