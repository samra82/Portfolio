'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePageTracking } from '@/utils/tracking';

export default function PageTrackingProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page visits
  useEffect(() => {
    if (pathname) {
      // Combine pathname and search params to get the full URL
      const fullPath = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
      usePageTracking(fullPath);
    }
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}