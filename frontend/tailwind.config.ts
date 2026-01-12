import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Royal color palette
        'royal-primary': 'var(--primary-color)',      // #2C2F6C - Deep Indigo
        'royal-secondary': 'var(--secondary-color)',  // #4D229D - Vibrant Purple
        'royal-tertiary': 'var(--tertiary-color)',    // #8B4BEC - Soft Lilac
        'royal-accent': 'var(--accent-color)',        // #FDBE79 - Soft Peach/Apricot
        'text-light': 'var(--text-light)',            // #FFFFFF - White
        'text-gray': 'var(--text-gray)',              // #F2F2F2 - Light Gray
        'text-dark': 'var(--text-dark)',              // #1A1A1A - Dark Charcoal
        'accent-purple': 'var(--accent-purple)',      // #8B4BEC
        'gold-accent': 'var(--gold-accent)',          // #FDBE79
        'text-primary': 'var(--text-primary)',        // #F8FAFC
        'text-secondary': 'var(--text-secondary)',    // #CBD5E1
        'border-purple': 'var(--border-purple)',      // #7E22CE
      },

      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(139, 75, 236, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(139, 75, 236, 0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },

      animation: {
        bounce: 'bounce 0.5s',
        fadeIn: 'fadeIn 1s ease-in-out',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },

      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
        'royal-diagonal': 'linear-gradient(125deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--tertiary-color) 100%)',
        'gold-highlight': 'linear-gradient(90deg, var(--accent-purple), var(--gold-accent))',
      },

      boxShadow: {
        'royal': '0 10px 30px -10px rgba(77, 34, 157, 0.3)',
        'royal-hover': '0 20px 40px -10px rgba(77, 34, 157, 0.4)',
        'gold-glow': '0 0 20px rgba(253, 190, 121, 0.3)',
        'purple-glow': '0 0 20px rgba(139, 75, 236, 0.3)',
      },

      backdropBlur: {
        'xl': '12px',
      }
    },
  },
  plugins: [],
};

export default config;