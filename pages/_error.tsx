'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  const title =
    statusCode === 404
      ? "Looks like this page took a wrong turn."
      : "Something went off-course.";

  const description =
    statusCode
      ? `An error ${statusCode} occurred on the server.`
      : 'An unexpected error occurred. Please try again later.';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </main>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;