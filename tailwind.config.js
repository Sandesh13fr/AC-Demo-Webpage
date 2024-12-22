/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'rgba(75, 11, 108, 0.15)',
      },
      boxShadow: {
        'custom': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      borderRadius: {
        'custom': '10px',
      },
      backdropBlur: {
        'custom': '11px',
      },
      borderColor: {
        'custom-white': 'rgba(255, 255, 255, 0.18)',
      },
    },
  },
  plugins: [],
}

