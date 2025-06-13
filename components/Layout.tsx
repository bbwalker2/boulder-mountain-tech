'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden transition-all duration-500 ease-in-out">
      {/* Top Navigation */}
      <Navigation />

      {/* Page Content */}
      <main className="pt-24 px-4 md:px-8">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}