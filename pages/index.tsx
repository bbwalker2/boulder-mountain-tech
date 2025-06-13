'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ShowreelModal from '@/components/ShowreelModal';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  // Lock scroll + ESC key close
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setShowModal(false);
      };
      document.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [showModal]);

  // Pause video on close
  useEffect(() => {
    if (!showModal && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showModal]);

  return isLoading ? (
    <PageLoader onFinish={() => setIsLoading(false)} />
  ) : (
    <>
      <Head>
        <title>Boulder Mountain Tech</title>
        <meta
          name="description"
          content="From bold ideas to built solutions. We help visionaries automate, scale, and grow with confidence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        <Hero onPlayShowreel={() => setShowModal(true)} />

        {/* 🧠 Visual Confirmation Banner — safe to remove in production */}
        <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black text-center p-6 md:p-8 mb-10 rounded-2xl shadow-2xl border border-yellow-500 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Tailwind is Fully Functional 🎉</h2>
          <p className="text-md md:text-lg font-medium">
            Utility-first styling and custom themes are rendering perfectly. You're ready to build boldly.
          </p>
        </section>

        <WhoWeAre />
        <Services />
        <Contact />
        <ShowreelModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          videoRef={videoRef}
        />
        <Footer />
      </main>
    </>
  );
}