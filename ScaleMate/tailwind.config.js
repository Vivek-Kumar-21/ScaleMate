/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'scale-dark': '#121212',
        'scale-darker': '#0A0A0A',
        'scale-light': '#1E1E1E',
        'scale-lighter': '#2D2D2D',
        'scale-teal': '#00F2EA',
        'scale-purple': '#A855F7',
        'scale-red': '#FF3366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-teal': '0 0 15px rgba(0, 242, 234, 0.5)',
        'neon-purple': '0 0 15px rgba(168, 85, 247, 0.5)',
        'neon-red': '0 0 15px rgba(255, 51, 102, 0.5)',
      },
    },
  },
  plugins: [],
};