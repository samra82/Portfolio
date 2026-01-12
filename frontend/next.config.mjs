/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    // Enable React Server Components for better performance
    serverComponentsExternalPackages: ['@sanity/client', '@sanity/image-url'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Optimize image loading
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Enable compression
  compress: true,
  // Optimize webpack
  webpack: (config, { dev, isServer }) => {
    // Optimize for production builds
    if (!dev) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;

      // Optimize split chunks
      if (config.optimization.splitChunks) {
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              chunks: 'all',
            },
            sanity: {
              test: /[\\/]node_modules[\\/](@sanity|sanity)[\\/]/,
              name: 'sanity-vendor',
              priority: 15,
              chunks: 'all',
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-icons)[\\/]/,
              name: 'react-vendor',
              priority: 12,
              chunks: 'all',
            },
            framer: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer-vendor',
              priority: 11,
              chunks: 'all',
            },
            // Add common libraries to separate chunks
            common: {
              test: /[\\/]node_modules[\\/](lodash|axios|date-fns)[\\/]/,
              name: 'common-vendor',
              priority: 8,
              chunks: 'all',
            },
          },
        };
      }

      // Enable more aggressive optimization
      config.optimization.minimize = true;
      config.optimization.minimizer = config.optimization.minimizer || [];
    }

    // Reduce bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
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
  // Reduce initial bundle size
  productionBrowserSourceMaps: false,
  // Add output configuration for better performance
  output: 'standalone',
  // Enable static optimization where possible
  trailingSlash: false,
  // Add headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
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
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
        ],
      },
      {
        source: '/(.*)\\.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;