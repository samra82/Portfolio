// CSS class names for scroll-triggered animations
// Used with IntersectionObserver in components
// These are defined in tailwind.config.ts and globals.css

export const fadeInUp = 'animate-fadeInUp';

export const fadeIn = 'animate-fadeIn';

export const scaleIn = 'animate-scaleIn';

// Stagger children container class
// Children with .stagger-item animate sequentially
export const staggerContainer = 'stagger-container';

// Helper: returns delay style for stagger children
export function staggerDelay(index: number, baseDelay = 0.1): React.CSSProperties {
  return {
    animationDelay: `${index * baseDelay}s`,
  };
}
