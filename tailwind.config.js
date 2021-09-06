module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#2F2F2F',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover'],
    },
  },
  plugins: [],
};
