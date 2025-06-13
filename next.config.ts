import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enforces best practices

  swcMinify: true, // ⚡ Fast builds via SWC compiler

  poweredByHeader: false, // 🔒 Hide Next.js signature

  images: {
    domains: ['bouldermountaintech.com'], // 🔐 Allowlist image domains
    formats: ['image/webp'], // ⚡ Enable modern image formats
  },

  experimental: {
    scrollRestoration: true, // 🧭 Improved UX when navigating
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
};

export default nextConfig;