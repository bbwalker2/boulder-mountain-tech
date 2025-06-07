import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ShowreelModal from '@/components/ShowreelModal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boulder Mountain Tech</title>
        <meta name="description" content="Strategy, automation, and innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        {/* Enhancement 1 */}
        <Navigation />

        <Hero />
        <WhoWeAre />
        <Services />

        {/* Enhancement 2 */}
        <Contact />

        <ShowreelModal />
        <Footer />
      </main>
    </>
  );
}