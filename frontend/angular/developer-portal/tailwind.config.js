/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: {
          300: 'var(--six-color-danger-light-to-be-defined)',
          900: 'var(--six-color-red)',
        },
        black: 'var(--six-color-black)',
        white: 'var(--six-color-white)',
        action: {
          500: 'var(--six-color-action-500)',
          600: 'var(--six-color-action-600)',
        },
        rock: {
          50: 'var(--six-color-web-rock-50)',
          100: 'var(--six-color-web-rock-100)',
          200: 'var(--six-color-web-rock-200)',
          300: 'var(--six-color-web-rock-300)',
          400: 'var(--six-color-web-rock-400)',
          500: 'var(--six-color-web-rock-500)',
          600: 'var(--six-color-web-rock-600)',
          700: 'var(--six-color-web-rock-700)',
          800: 'var(--six-color-web-rock-800)',
          900: 'var(--six-color-web-rock-900)',
        },
        clay: {
          50: 'var(--six-color-clay-50)',
          200: 'var(--six-color-clay-200)',
        },
        danger: {
          800: 'var(--six-color-danger-800)',
          900: 'var(--six-color-danger-900)',
        },
        warning: {
          700: 'var(--six-color-warning-700)',
          800: 'var(--six-color-warning-800)',
        },
        success: {
          500: 'var(--six-color-success-500)',
          600: 'var(--six-color-success-600)',
        },
        link: {
          500: '#2196F3',
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
    divideStyle:true,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

