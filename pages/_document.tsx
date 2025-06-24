import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Font Preload (Inter) */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon + App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />

        {/* SEO Essentials */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Boulder Mountain Tech" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="business automation, AI consulting, growth strategy, Boulder Mountain Tech" />
        <meta name="description" content="From bold ideas to built solutions. We turn vision into velocity." />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boulder Mountain Tech" />
        <meta property="og:description" content="From bold ideas to built solutions. We turn vision into velocity." />
        <meta property="og:image" content="/assets/og-cover.png" />
        <meta property="og:url" content="https://www.bouldermountaintech.com" />
        <meta property="og:site_name" content="Boulder Mountain Tech" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boulder Mountain Tech" />
        <meta name="twitter:description" content="From bold ideas to built solutions. We turn vision into velocity." />
        <meta name="twitter:image" content="/assets/og-cover.png" />
      </Head>

      <body className="bg-black text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}