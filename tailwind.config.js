/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          dark: '#200308',
          DEFAULT: '#380712',
          rich: '#4a0a18',
          surface: '#2d060f',
          glow: 'rgba(74, 10, 24, 0.6)',
        },
        gold: {
          light: '#f7de9c',
          DEFAULT: '#e6c280',
          bright: '#ffd700',
          rich: '#dfb15b',
          dark: '#b38a3e',
        },
        walnut: {
          dark: '#1c0f08',
          DEFAULT: '#362216',
          medium: '#4d3221',
          light: '#6e4730',
          border: '#5c3a25',
        },
        ivory: {
          DEFAULT: '#faf8f3',
          pure: '#fffff8',
          soft: '#f0ebd8',
          muted: '#d6cdbe',
        },
        forest: {
          dark: '#0c160a',
          DEFAULT: '#182713',
          rich: '#22381b',
          surface: '#142210',
          glow: 'rgba(38, 65, 30, 0.6)',
          emerald: '#27441d',
          sage: '#5c8050',
          border: '#3e5630',
        },
        cream: {
          DEFAULT: '#f3eee4',
          light: '#faf6ee',
          dark: '#e5dcce',
          muted: '#cfc4b2',
        },
        brand: {
          red: '#f10a06',
          darkRed: '#d00804',
          deep: '#1a0202',
          obsidian: '#0d0101',
          gold: '#e6c280',
          champagne: '#faefe0',
          surface: 'rgba(255, 255, 255, 0.08)',
          surfaceHover: 'rgba(255, 255, 255, 0.14)',
          border: 'rgba(255, 255, 255, 0.15)',
        }
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
        display: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        outfit: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
