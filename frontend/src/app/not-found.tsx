import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Samra Shafiq",
  description: "The page you're looking for doesn't exist. Return to the homepage of Samra Shafiq's portfolio.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0816] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
