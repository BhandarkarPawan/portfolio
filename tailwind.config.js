module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#1F1F1F',
        lightblue: '#E3E8F0',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
};
