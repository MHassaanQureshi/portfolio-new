
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        ripple: 'ripple 2s ease-in-out infinite',
        opacityChange: 'opacityChange 2s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)',
          },
          '50%': {
            transform: 'scale(1.3)',
            boxShadow: '0 30px 20px rgba(0, 0, 0, 0.3)',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)',
          },
        },
        opacityChange: {
          '0%': { opacity: '0.7' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
