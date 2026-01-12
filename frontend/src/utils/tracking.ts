// Generate a unique session ID for the visitor
export function generateSessionId(): string {
  if (typeof window !== 'undefined') {
    // Try to get existing session ID from localStorage
    const existingSessionId = localStorage.getItem('visitor_session_id');
    if (existingSessionId) {
      return existingSessionId;
    }

    // Generate a new session ID
    const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('visitor_session_id', sessionId);
    return sessionId;
  }
  // Fallback for server-side rendering
  return 'server_' + Date.now().toString();
}

// Get visitor's IP address (client-side)
export async function getIpAddress(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Could not fetch IP address:', error);
    return 'unknown';
  }
}

// Get visitor's location based on IP
export async function getLocationFromIp(ip: string): Promise<any> {
  try {
    if (ip === 'unknown') {
      return null;
    }
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return {
      country: data.country_name,
      city: data.city,
      region: data.region,
      timezone: data.timezone,
    };
  } catch (error) {
    console.warn('Could not fetch location:', error);
    return null;
  }
}

// Track page visit
export async function trackPageVisit(pageUrl: string) {
  try {
    const sessionId = generateSessionId();
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown';
    const ipAddress = await getIpAddress();
    const location = await getLocationFromIp(ipAddress);
    const referrer = typeof document !== 'undefined' ? document.referrer : '';

    await fetch('/api/analytics/track-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pageUrl,
        userAgent,
        ipAddress,
        referrer,
        location,
      }),
    });
  } catch (error) {
    console.error('Error tracking page visit:', error);
  }
}

// Track project click
export async function trackProjectClick(projectId: string, projectTitle: string) {
  try {
    const sessionId = generateSessionId();

    await fetch('/api/analytics/track-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        projectId,
        projectTitle,
      }),
    });
  } catch (error) {
    console.error('Error tracking project click:', error);
  }
}

// Track time spent on page
export async function trackTimeSpent(pageUrl: string, timeSpent: number) {
  try {
    const sessionId = generateSessionId();

    await fetch('/api/analytics/track-time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pageUrl,
        timeSpent,
      }),
    });
  } catch (error) {
    console.error('Error tracking time spent:', error);
  }
}

// Hook to track page views automatically
export function usePageTracking(pageUrl: string) {
  if (typeof window !== 'undefined') {
    // Track initial page load
    trackPageVisit(pageUrl);

    // Track time spent when leaving the page
    let startTime = Date.now();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
        trackTimeSpent(pageUrl, timeSpent);
      } else if (document.visibilityState === 'visible') {
        startTime = Date.now(); // Reset start time when returning to page
      }
    };

    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
      trackTimeSpent(pageUrl, timeSpent);
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