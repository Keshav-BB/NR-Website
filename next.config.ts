import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.flexifunnels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
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
    ];
  },
  async redirects() {
    return [
      {
        source: '/The%20Company.dc.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/The Company.dc.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/Careers.dc.html',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/b3rz8xhb',
        destination: '/',
        permanent: true,
      },
      {
        source: '/poiu3wez',
        destination: '/refund-policy',
        permanent: true,
      },
      {
        source: '/the-science',
        destination: '/science',
        permanent: true,
      },
      {
        source: '/what-is-anxiety-brain-vs-mind-hours--ride-model',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
