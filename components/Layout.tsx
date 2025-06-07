'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-full overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Site Container with top padding to avoid overlap */}
      <main className="container pt-20">
        {children}
      </main>
    </div>
  );
}