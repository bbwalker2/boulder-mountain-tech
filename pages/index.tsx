'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import Contact from '@/components/Contact';
import ShowreelModal from '@/components/ShowreelModal';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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

      {/* HERO */}
      <section className="bg-black text-white">
        <Hero onPlayShowreel={() => setShowModal(true)} />
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 text-black py-20 px-6 md:px-16">
        <WhoWeAre />
      </section>

      {/* WHAT WE DO */}
      <section className="bg-black text-white py-20 px-6 md:px-16">
        <WhatWeDo />
      </section>

      {/* CONNECT */}
      <section className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 text-black py-20 px-6 md:px-16">
        <Contact />
      </section>

      <ShowreelModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </>
  );
}