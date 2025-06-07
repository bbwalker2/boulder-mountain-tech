import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Font: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}