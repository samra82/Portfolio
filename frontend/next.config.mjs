/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Enable compression
  compress: true,
  // Optimize webpack
  webpack: (config, { dev, isServer }) => {
    // Only enable compression in production
    if (!dev && !isServer) {
      config.optimization.minimizer = config.optimization.minimizer || [];
    }

    // Reduce bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  poweredByHeader: false,
  // Optimize bundle splitting
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
};

export default nextConfig;