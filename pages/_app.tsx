// pages/_app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import SiteLayout from '@/components/SiteLayout';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router.pathname]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Boulder Mountain Tech" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="business automation, consulting, growth strategy, AI systems, Boulder Mountain Tech"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full overflow-x-hidden">
        <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans antialiased">
          <SiteLayout>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={router.route}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </SiteLayout>
        </main>
      </div>
    </>
  );
}