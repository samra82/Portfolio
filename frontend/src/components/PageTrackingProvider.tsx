'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PageTrackingProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page visits
  useEffect(() => {
    if (pathname) {
      // Combine pathname and search params to get the full URL
      const fullPath = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;

      // Track initial page load
      if (typeof window !== 'undefined') {
        import('@/utils/tracking').then(({ trackPageVisit }) => {
          trackPageVisit(fullPath);
        });

        // Track time spent when leaving the page
        let startTime = Date.now();

        const handleVisibilityChange = () => {
          if (document.visibilityState === 'hidden') {
            const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
            import('@/utils/tracking').then(({ trackTimeSpent }) => {
              trackTimeSpent(fullPath, timeSpent);
            });
          } else if (document.visibilityState === 'visible') {
            startTime = Date.now(); // Reset start time when returning to page
          }
        };

        const handleBeforeUnload = () => {
          const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
          import('@/utils/tracking').then(({ trackTimeSpent }) => {
            trackTimeSpent(fullPath, timeSpent);
          });
        };

        // Add event listeners
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup function
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }
    }
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}