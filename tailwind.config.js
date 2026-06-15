/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
        architect: ['"Architects Daughter"', 'cursive'],
      },
      colors: {
        ink: '#1a1a2e',
        pencil: '#3d3d5c',
        paper: '#fdf6e3',
        ruled: '#c8d8e8',
        highlight: '#ffe066',
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.5s ease forwards',
        float: 'float 3s ease-in-out infinite',
        pop: 'pop 0.35s ease forwards',
        spin: 'spin 1s linear infinite',
      },
      boxShadow: {
        sketch: '4px 4px 0 #1a1a2e',
        'sketch-lg': '6px 6px 0 #1a1a2e',
        'sketch-yellow': '5px 5px 0 #ffe066',
        'sketch-yellow-lg': '8px 8px 0 #ffe066',
      },
    },
  },
  plugins: [],
}
