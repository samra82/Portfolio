import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

// Preload critical resources
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
  weight: ["400", "500", "600", "700", "800"],
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
    url: 'https://samrashafiq.com',
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
  // Add performance hints
  other: {
    'theme-color': '#8B4BEC',
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
      <body
        className={`antialiased bg-gradient-to-br from-[#2C2F6C] via-[#4D229D] to-[#8B4BEC] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
