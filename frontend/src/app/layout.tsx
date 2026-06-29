import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

// Trim weights to what's actually used once you've confirmed via grep
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "900",],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | Samra Shafiq - Web Engineer',
    default: 'Samra Shafiq - Web Engineer | Portfolio',
  },
  description: "Portfolio of Samra Shafiq, Web Engineer specializing in creating pixel-perfect web applications with Next.js, React, and modern technologies",
  keywords: ['portfolio', 'web developer', 'react', 'nextjs', 'frontend', 'samra shafiq'],
  authors: [{ name: 'Samra Shafiq' }],
  creator: 'Samra Shafiq',
  publisher: 'Samra Shafiq',
  icons: {
    icon: '/logo.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Samra Shafiq - Web Engineer',
    description: 'Portfolio of Samra Shafiq, Web Engineer specializing in creating pixel-perfect web applications',
    url: 'https://samrashafiq.xyz',
    siteName: 'Samra Shafiq Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samra Shafiq - Web Engineer',
    description: 'Portfolio of Samra Shafiq, Web Engineer specializing in creating pixel-perfect web applications',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#0B0816',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[var(--primary-color)] text-[var(--text-primary)]" style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preload" href="/Hero.avif" as="image" fetchPriority="high" />
        <meta name="description" content="Portfolio of Samra Shafiq, Web Engineer specializing in creating pixel-perfect web applications with Next.js, React, and modern technologies" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}