import '@/styles/globals.css'; // ✅ absolute path via tsconfig baseUrl
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}