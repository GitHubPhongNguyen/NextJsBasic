/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  i18n: {
    locales: ['vi'],
    defaultLocale: 'vi',
  },
};

module.exports = nextConfig;
