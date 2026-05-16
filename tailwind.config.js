/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0B',
        abyss: '#111111',
        crypt: '#161616',
        tomb: '#1E1E1E',
        gold: {
          DEFAULT: '#C2A96A',
          light: '#D4BC85',
          dark: '#A08840',
          glow: 'rgba(194,169,106,0.15)',
        },
        crimson: {
          DEFAULT: '#6B0F1A',
          light: '#8B1525',
          dark: '#4A0A12',
          glow: 'rgba(107,15,26,0.2)',
        },
        bone: '#E8E0D0',
        ash: '#9A9086',
        smoke: '#5A5248',
      },
      fontFamily: {
        gothic: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(ellipse at center, rgba(194,169,106,0.08) 0%, transparent 70%)',
        'radial-crimson': 'radial-gradient(ellipse at center, rgba(107,15,26,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.7) 60%, #0B0B0B 100%)',
        'card-gradient': 'linear-gradient(to bottom, transparent 30%, rgba(11,11,11,0.95) 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(194,169,106,0.3), 0 0 60px rgba(194,169,106,0.1)',
        'gold-sm': '0 0 10px rgba(194,169,106,0.2)',
        'crimson': '0 0 20px rgba(107,15,26,0.5), 0 0 60px rgba(107,15,26,0.2)',
        'card': '0 4px 40px rgba(0,0,0,0.6)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'flicker': 'flicker 4s infinite',
        'drift': 'drift 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
