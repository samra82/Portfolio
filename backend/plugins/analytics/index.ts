import {definePlugin} from 'sanity'

interface AnalyticsConfig {
  trackingId: string
  debug?: boolean
}

export const googleAnalytics = definePlugin<AnalyticsConfig>((config) => {
  const {trackingId, debug = false} = config

  // Create the Google Analytics script injection function
  const injectGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.document.querySelector('#sanity-google-analytics')) {
      // Create script element for gtag library
      const gaScript = window.document.createElement('script')
      gaScript.id = 'sanity-google-analytics'
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
      window.document.head.appendChild(gaScript)

      // Create inline script to initialize gtag
      const initScript = window.document.createElement('script')
      initScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', {
          debug_mode: ${debug},
          transport_url: 'https://www.google-analytics.com'
        });

        // Track page views in Sanity Studio
        const originalPushState = history.pushState;
        history.pushState = function(state, title, url) {
          originalPushState.call(history, state, title, url);
          setTimeout(function() {
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname + window.location.search
            });
          }, 100);
        };
      `
      window.document.head.appendChild(initScript)
    }
  }

  return {
    name: 'google-analytics',
    meta: {
      name: 'Google Analytics',
      version: '1.0.0',
      pluginType: 'sanity-plugin',
    },
    studio: {
      components: {
        // Inject the analytics script when the studio loads
        studio: (props: { renderDefault: (arg0: any) => any }) => {
          // Inject the scripts when the studio component mounts
          setTimeout(injectGoogleAnalytics, 0)
          return props.renderDefault(props)
        }
      }
    }
  }
})