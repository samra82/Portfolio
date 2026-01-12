'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page visits - only in browser environment
  useEffect(() => {
    if (typeof window !== 'undefined' && pathname) {
      // Combine pathname and search params to get the full URL
      const fullPath = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;

      // Dynamically import tracking functions to avoid SSR issues
      const trackPageView = async () => {
        try {
          const { trackPageVisit } = await import('@/utils/tracking');
          trackPageVisit(fullPath);
        } catch (error) {
          // Silently fail if tracking fails, to avoid build issues
          console.debug('Analytics tracking failed:', error);
        }
      };

      // Track initial page load
      trackPageView();

      // Track time spent when leaving the page
      let startTime = Date.now();

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
          import('@/utils/tracking').then(({ trackTimeSpent }) => {
            trackTimeSpent(fullPath, timeSpent);
          }).catch(() => {
            // Silently fail if tracking fails
            console.debug('Time tracking failed');
          });
        } else if (document.visibilityState === 'visible') {
          startTime = Date.now(); // Reset start time when returning to page
        }
      };

      const handleBeforeUnload = () => {
        const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
        import('@/utils/tracking').then(({ trackTimeSpent }) => {
          trackTimeSpent(fullPath, timeSpent);
        }).catch(() => {
          // Silently fail if tracking fails
          console.debug('Time tracking failed');
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
  }, [pathname, searchParams]);

  return <>{children}</>;
}