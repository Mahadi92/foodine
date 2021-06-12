module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#EB651B',
      primaryShad: '#eb641b1e',
      dark: '#2c3e50',
      light: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'header': ['Do Hyeon'],
        'header2': ['Montserrat'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
