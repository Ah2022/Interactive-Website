/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Add commonly used classes that might be dynamically generated
    'hidden', 'flex', 'block', 'grid',
    'space-x-4', 'space-x-8', 'space-y-4', 'space-y-8',
    'gap-2', 'gap-4', 'gap-8',
    'p-4', 'm-4', 'px-2', 'py-1',
    // Add more as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#1a1a1a',
        accent: '#ff4081',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
